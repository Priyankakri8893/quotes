const quotes = document.getElementById("quotes");
        const author = document.getElementById("author");
        const newQ = document.getElementById("newQ");
        const tweetMe = document.getElementById("tweetMe");
        let realData = "";
        let quotesData = "";

        const tweetNow = () => {
            let tweetPost = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quotesData.text + " - " + quotesData.author)}`;
            window.open(tweetPost);
        };

        const getNewQuotes = () => {
            let rnum = Math.floor(Math.random() * realData.length);
            quotesData = realData[rnum];
            quotes.innerText = `${quotesData.text}`;
            author.innerText = quotesData.author ? `- ${quotesData.author}` : "- Unknown";
        };

        const getQuotes = async () => {
            const api = "https://type.fit/api/quotes"; //real-time API
            try {
                let data = await fetch(api);
                realData = await data.json();
                getNewQuotes();
            } catch (error) {
                console.log("Error fetching quotes:", error);
            }
        };

        tweetMe.addEventListener("click", tweetNow);
        newQ.addEventListener("click", getNewQuotes);
        getQuotes();