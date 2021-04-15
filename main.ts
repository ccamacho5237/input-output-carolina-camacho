input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    basic.showIcon(IconNames.Target)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
    basic.pause(100)
    basic.showArrow(ArrowNames.East)
    basic.pause(100)
    basic.showArrow(ArrowNames.South)
    basic.pause(100)
    basic.showArrow(ArrowNames.West)
    basic.pause(100)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
