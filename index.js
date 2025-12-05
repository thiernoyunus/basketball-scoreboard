let homeScore = 0
let awayScore = 0
let homeScoreCount = document.getElementById("home-score")
let awayScoreCount = document.getElementById("away-score")

function add1Home() {
    homeScore += 1
    homeScoreCount.textContent = homeScore
}

function add2Home() {
    homeScore += 2
    homeScoreCount.textContent = homeScore
}

function add3Home() {
    homeScore += 3
    homeScoreCount.textContent = homeScore
}

function add1Guest() {
    awayScore += 1
    awayScoreCount.textContent = awayScore
}

function add2Guest() {
    awayScore += 2
    awayScoreCount.textContent = awayScore
}

function add3Guest() {
    awayScore += 3
    awayScoreCount.textContent = awayScore
}

function newGame() {
    homeScore = 0
    homeScoreCount.textContent = 0
    awayScore = 0
    awayScoreCount.textContent = 0
}