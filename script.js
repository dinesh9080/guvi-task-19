const fox_result= document.getElementById("fox_result");
const dog_result=document.getElementById("dog_result");
const fox_btn=document.getElementById("fox_btn");
const dog_btn=document.getElementById("dog_btn");

fox_btn.addEventListener('click', getRandomfox)
dog_btn.addEventListener('click', getRandomdog)


function getRandomdog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        dog_result.innerHTML= `<img src="${data.url}"/>`
    })


    
}
function getRandomfox(){
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => {
        fox_result.innerHTML= `<img src="${data.image}"/>`
    })

    }
