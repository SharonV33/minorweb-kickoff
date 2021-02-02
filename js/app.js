const xhr = new XMLHttpRequest()
const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members/'

const userData = {
    "teamId": "1",
    "name": "Sharon",
    "avatar": "https://avatars.githubusercontent.com/u/45404384?s=460&u=949cf6d4c30b9152da8e3f7e9ef320149dd3e0ac&v=4",
    "prefix": "",
    "surname": "Veldman",
    "mugshot": "https://avatars.githubusercontent.com/u/45404384?s=460&u=949cf6d4c30b9152da8e3f7e9ef320149dd3e0ac&v=4",
    "githubHandle": "SharonV33",
    "url": "https://sharonv33.github.io/minorweb-kickoff/",
    "other": {
        "age": "22",
        "sport": "NaN",
        "pet": "2 katten",
        "muziek": "metal",
        "werkplek": "Thuis"
    }
}

const postUserData = () => {
    xhr.open("PUT", url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send(JSON.stringify(userData))
}

// GET REQUEST
const teams = fetch(`${url}`)
    .then(response => response.json())
    .then(data => console.log('fetch', data));

const fillCard = () => {
    const card = document.querySelector(".card")
    const p = document.createElement('p');
    card.appendChild(p).innerHTML = "sharon"
}


fillCard()