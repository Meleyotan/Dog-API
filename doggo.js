const BREED_URL="https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".doggos");
const refresh = document.querySelector(".refresh");
const downrefresh=document.querySelector(".down-refresh");
const loadinggif= document.querySelector(".loading-gif");
//promise fetched the url and passed it in as response, response was passed in and changed to a json file
const totop = document.querySelector(".totop");

function addNewDog(){
    const promise = fetch(BREED_URL);// this is fetching data from a server, terminology is API
    //console.log(promise) returns a blob of JSON
    promise.then(function(response){// calls the then method on the promise function
        const processedPromise=response.json();// the response provided by the server is turned to json
        return processedPromise;
    })

    .then(function(processedResponse){
        console.log(processedResponse);
        const img = document.createElement('img');
        img.src=processedResponse.message;
        img.alt='Cute dog';
        img.class = 'generated-dog';
        doggos.appendChild(img);
});
}
refresh.addEventListener('click', addNewDog);
console.log('This will log first');
loadinggif.addEventListener('load', loadGif);

function toTopButton(){
    if (window.scroll(scrollTo,200)){
        downrefresh.style.display="none";
    }
}
function loadGif(){
    console.log('I am working');
    loadinggif.style.display = "none";
}