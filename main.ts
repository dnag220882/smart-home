let temp = 0
let sound = 0
let light2 = 0
input.onButtonPressed(Button.A, function () {
    if (temp > 15) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(2000)
        temp += -5
        basic.showNumber(temp)
    } else {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    if (sound > 160) {
        basic.showString("!")
        basic.showString("alert")
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (light2 > 110) {
        basic.showIcon(IconNames.No)
        basic.showString("Turn off lights")
    } else {
        basic.showIcon(IconNames.Yes)
        basic.showString("Turn on lights")
    }
})
basic.forever(function () {
    temp = input.temperature()
    light2 = input.lightLevel()
    sound = input.soundLevel()
})
