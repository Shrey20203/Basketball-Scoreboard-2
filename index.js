const homeScoreBtnOne = document.querySelector("#home-score-btn-1")
const homeScoreBtnTwo = document.querySelector("#home-score-btn-2")
const homeScoreBtnThree = document.querySelector("#home-score-btn-3")
const guestScoreBtnOne = document.querySelector("#guest-score-btn-1")
const guestScoreBtnTwo = document.querySelector("#guest-score-btn-2")
const guestScoreBtnThree = document.querySelector("#guest-score-btn-3")
const homeScore = document.querySelector("#home-score")
const guestScore = document.querySelector("#guest-score")
let totalHomeScore = 0
let totalGuestScore = 0

homeScoreBtnOne.addEventListener("click", function (){
    totalHomeScore += 1
    homeScore.textContent = totalHomeScore
})

homeScoreBtnTwo.addEventListener("click", function (){
    totalHomeScore += 2
    homeScore.textContent = totalHomeScore
})

homeScoreBtnThree.addEventListener("click", function (){
    totalHomeScore += 3
    homeScore.textContent = totalHomeScore
})

guestScoreBtnOne.addEventListener("click", function (){
    totalGuestScore += 1
    guestScore.textContent = totalGuestScore
})

guestScoreBtnTwo.addEventListener("click", function (){
    totalGuestScore += 2
    guestScore.textContent = totalGuestScore
})

guestScoreBtnThree.addEventListener("click", function (){
    totalGuestScore += 3
    guestScore.textContent = totalGuestScore
})