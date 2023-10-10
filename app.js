const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
// Create players using for loop
// Type your code here
var type1=""
const initPlayers = (players) => {
    let detailedPlayers = [];

    for (let i = 1; i < players.length+1; i++) {
        if (i%2!=0){
            type1="hero"
        }else{
            type1="villain"
        }
        let player = {
            name: players[i-1],
            strength: getRandomStrength(),
            image: "images/super-" + (i) + ".png",
            type:type1
        };
        detailedPlayers.push(player);
    }
    return detailedPlayers;
}


    
// getting random strength
// Return a random integer (0,100]
// Note: You can use Math.random() and Math.ceil()
const getRandomStrength = () => {
    return Math.floor(Math.random() * 100) + 1;
}


// Loop through players and accumulate HTML template
// depending of type of player(hero|villain)
// Type your code here

const buildPlayers = (players, type) => {
    let fragment = '';
    for (let i = 0; i < players.length; i++) {
        if (players[i].type==type) {
            fragment += '<div class="player"><img src="' + players[i].image + '" alt=""><divclass="name">'+  players[i].name + '</div><div class="strength">' + players[i].strength + '</div></div>';
       
    }
}
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}

