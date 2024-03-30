const apiURL = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const key = "y7r4QLBAfoHPAq5qrhaKIg==qlu9AbhwOprBr56T";

const quote = document.querySelector("p");
const author = document.querySelector("span");
const btn = document.querySelector(".newQuote");

async function changeQuote(){
    try {
        const response = await fetch(apiURL, {
          method: 'GET',
          headers: {
            'X-Api-Key': `${key}`,
            'Content-Type': 'application/json'
          }
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        // console.log(data[0]);
        quote.innerHTML = `"${data[0].quote}"`;
        author.innerHTML = `--${data[0].author}`;

      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
}

btn.addEventListener("click",()=>{
    changeQuote();
})