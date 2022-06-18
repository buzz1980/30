input.onButtonPressed(Button.A, function () {
    antwoord = randint(0, 1)
    if (antwoord == 0) {
        basic.showString("Nee")
    }
})
let antwoord = 0
basic.showString("Druk op A")
