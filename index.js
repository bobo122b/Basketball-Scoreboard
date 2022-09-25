let homeEl = document.getElementById("homeScore");
let guestEl = document.getElementById("guestScore")
let homeScore = 0;
let guestScore = 0;
function home(pts) {
    homeScore += pts;
    homeEl.textContent = homeScore;
}

function guest(pts) {
    guestScore += pts;
    guestEl.textContent = guestScore;
}

function reset() {
    homeScore = 0;
    homeEl.textContent = homeScore;
    guestScore = 0;
    guestEl.textContent = guestScore;
}