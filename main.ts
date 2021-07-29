input.onGesture(Gesture.TiltLeft, function () {
    strip.showRainbow(1, 360)
    basic.pause(2000)
})
input.onGesture(Gesture.TiltRight, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
