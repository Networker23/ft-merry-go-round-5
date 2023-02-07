basic.forever(function () {
    while (!(input.buttonIsPressed(Button.A))) {
        continue;
    }
    Kitronik_IFF.motorOn(Kitronik_IFF.Motors.Motor1, Kitronik_IFF.MotorDirection.Forward, 100)
    basic.pause(5000)
    basic.pause(5000)
    Kitronik_IFF.motorOn(Kitronik_IFF.Motors.Motor1, Kitronik_IFF.MotorDirection.Forward, 0)
    basic.pause(1000)
    Kitronik_IFF.motorOn(Kitronik_IFF.Motors.Motor1, Kitronik_IFF.MotorDirection.Reverse, 100)
    basic.pause(5000)
    basic.pause(5000)
    Kitronik_IFF.motorOn(Kitronik_IFF.Motors.Motor1, Kitronik_IFF.MotorDirection.Reverse, 0)
})
