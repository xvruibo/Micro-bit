let 上 = 0
let 左 = 0
let 下 = 0
let 右 = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    上 = 1
    for (let index = 0; index < 5; index++) {
        music.playTone(370, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.A, function () {
    左 = 1
    for (let index = 0; index < 5; index++) {
        music.playTone(370, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.AB, function () {
    下 = 1
    for (let index = 0; index < 5; index++) {
        music.playTone(370, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    右 = 1
    for (let index = 0; index < 5; index++) {
        music.playTone(370, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (下 == 1) {
        basic.clearScreen()
        上 = 0
        下 = 0
        左 = 0
        右 = 0
        for (let index = 0; index < 7; index++) {
            led.plot(randint(0, 4), randint(0, 4))
            led.plot(randint(0, 4), randint(0, 4))
            led.plot(randint(0, 4), randint(0, 4))
            basic.pause(50)
            basic.clearScreen()
        }
        for (let index = 0; index < 5; index++) {
            basic.showArrow(ArrowNames.South)
            basic.clearScreen()
            basic.pause(400)
        }
    }
    if (上 == 1) {
        basic.clearScreen()
        上 = 0
        下 = 0
        左 = 0
        右 = 0
        for (let index = 0; index < 7; index++) {
            led.plot(randint(0, 4), randint(0, 4))
            led.plot(randint(0, 4), randint(0, 4))
            led.plot(randint(0, 4), randint(0, 4))
            basic.pause(50)
            basic.clearScreen()
        }
        for (let index = 0; index < 5; index++) {
            basic.showArrow(ArrowNames.North)
            basic.clearScreen()
            basic.pause(400)
        }
    }
    if (左 == 1) {
        basic.clearScreen()
        上 = 0
        下 = 0
        左 = 0
        右 = 0
        for (let index = 0; index < 7; index++) {
            led.plot(randint(0, 4), randint(0, 4))
            led.plot(randint(0, 4), randint(0, 4))
            led.plot(randint(0, 4), randint(0, 4))
            basic.pause(50)
            basic.clearScreen()
        }
        for (let index = 0; index < 5; index++) {
            basic.showArrow(ArrowNames.West)
            basic.clearScreen()
            basic.pause(400)
        }
    }
    if (右 == 1) {
        basic.clearScreen()
        上 = 0
        下 = 0
        左 = 0
        右 = 0
        for (let index = 0; index < 7; index++) {
            led.plot(randint(0, 4), randint(0, 4))
            led.plot(randint(0, 4), randint(0, 4))
            led.plot(randint(0, 4), randint(0, 4))
            basic.pause(50)
            basic.clearScreen()
        }
        for (let index = 0; index < 5; index++) {
            basic.showArrow(ArrowNames.East)
            basic.clearScreen()
            basic.pause(400)
        }
    }
})
basic.forever(function () {
	
})
