const main = document.getElementById('mainText');
const author = document.getElementById('author');

quoteGenerator();

function quoteGenerator () {
  let randNumber = Math.floor(Math.random() * 1644);

  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    main.innerText = `"${data[randNumber].text}"`;
    if (data[randNumber].author === null){
      author.innerText = `- Annonymous`;
    }else{
      author.innerText = `- ${data[randNumber].author}`;
    }
    
  }).catch(err => {
    main.innerHTML = `Something went wrong;
    check for internet connectivity`;
  });
}