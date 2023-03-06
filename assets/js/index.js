let input = document.querySelector('input');
let btn = document.querySelector('button');
let output = document.querySelector('.output');

async function getArt(art) {
    let response = await fetch(`http://cors-anywhere.herokuapp.com/https://api.forum-auto.ru/v2/listGoods?login=493358_stroyzar&pass=sAVDkrEbqd&art=${art}`, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json',
        },
    });
    let result = await response.json();
    return result;
};

document.getElementById("search-field").addEventListener("submit", async (event) => {
    event.preventDefault();
    let art = input.value;
    let result = await getArt(art);
    output.innerHTML += JSON.stringify(result);
});