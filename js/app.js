const url = 'https://600ff44f6c21e1001704fac2.mockapi.io/minor-web/api/squads/1/teams/1/members'

// GET REQUEST
const teams = fetch(`${url}`)
    .then(response => response.json())
    .then(data => console.log('fetch', data));

// PUT REQUEST
const putData = {
    id:1,
    teamId:1,
    name:'Sharon',
    prefix:'',
    surname:'Veldman',
    mugshot:'https://avatars.githubusercontent.com/u/45404384?s=460&u=949cf6d4c30b9152da8e3f7e9ef320149dd3e0ac&v=4',
    githubHandle:'sharonV33',
    skill: {
        html: 80,
        css: 80,
        js: 60
    },
    other: {
        movies: 'Horror',
        music: 'Metal',
        drink: 'beer'
    }
}

async function postData(url, data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

postData(`${url}`, putData)
    .then(data => {
        console.log('put', putData);
    });