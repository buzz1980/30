input.onGesture(Gesture.Shake, function () {
    antwoord = randint(0, 2)
    if (antwoord == 0) {
        basic.showString("Nee")
    }
    if (antwoord == 1) {
        basic.showString("Ja")
    }
    if (antwoord == 2) {
        basic.showString("misschien")
    }
})
let antwoord = 0
basic.showString("schud mij")
