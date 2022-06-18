input.onButtonPressed(Button.A, function () {
    antwoord = 0
    if (antwoord == randint(0, 2)) {
        basic.showString("Nee")
    }
})
let antwoord = 0
basic.showString("Druk op A")
