input.onButtonPressed(Button.B, function () {
    if (block_shown) {
        reaction_time = input.runningTime() - start_time
        basic.clearScreen()
        basic.showString("Nice!")
        basic.showString("Time: " + reaction_time + "ms")
        basic.clearScreen()
        block_shown = false
    } else {
        basic.showString("Too Soon!")
    }
})
let start_time = 0
let reaction_time = 0
let block_shown = false
let random_time = 0
basic.forever(function () {
    basic.pause(randint(1000, 5000))
    basic.showString("Go!")
    basic.pause(500)
    start_time = input.runningTime()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    block_shown = true
    basic.pause(3000)
})
