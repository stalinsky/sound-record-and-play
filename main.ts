input.onButtonPressed(Button.A, function () {
    koi.koi_audio_rec("test1.wav")
})
input.onButtonPressed(Button.B, function () {
    koi.koi_audio_play("test1.wav")
})
koi.koi_init(SerialPin.P1, SerialPin.P2)
