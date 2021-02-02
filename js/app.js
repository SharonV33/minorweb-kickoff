const xhr = new XMLHttpRequest()
const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members'

const userData = {
    "teamId": "1",
    "name": "Sharon",
    "avatar": "https://avatars.githubusercontent.com/u/10921830?s=460&u=d9790f50bebe35de86146b7fcb76906286611703&v=4",
    "prefix": "",
    "surname": "Veldman",
    "mugshot": "https://avatars.githubusercontent.com/u/10921830?s=460&u=d9790f50bebe35de86146b7fcb76906286611703&v=4",
    "githubHandle": "SharonV33",
    "other": {
        "age": "22",
        "sport": "NaN",
        "pet": "2 katten",
        "muziek": "metal",
        "werkplek": "Thuis"
    }
}

const postUserData = () => {
    xhr.open("POST", url, true)
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