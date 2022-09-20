controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(0, -50)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(-50, 0)
})
info.onCountdownEnd(function () {
    info.changeScoreBy(50)
    info.startCountdown(5)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(50, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.trail, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 200)
    snakeLength = snakeLength + 1
    fruit = sprites.create(img`
        . . f f . 7 7 7 . . . . . . . . 
        . . 7 f f 7 7 7 . . . . . . . . 
        . 7 7 . . f f f 2 2 2 2 . . . . 
        . . 2 2 2 2 2 f 2 . . 2 2 2 . . 
        . 2 2 . 2 . 2 2 2 2 2 . . 2 2 . 
        2 2 . 2 2 2 2 . 2 . 2 . . . . 2 
        2 . 2 2 2 2 . 2 . . 2 2 2 . . 2 
        . 2 2 2 2 . . 2 2 2 2 . 2 . . 2 
        . 2 2 . . 2 2 2 2 . 2 2 2 . 2 2 
        . . 2 . . . . 2 2 2 2 2 2 2 2 . 
        . . 2 2 . 2 2 . . 2 2 2 . 2 2 . 
        . . . 2 2 . . 2 2 2 2 . . 2 2 . 
        . . . . 2 . . . . 2 2 2 2 2 . . 
        . . . . . 2 . . . . . 2 2 2 . . 
        . . . . . 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    fruit.setPosition(randint(0, 160), randint(0, 120))
    info.changeScoreBy(10)
})
let fruit: Sprite = null
let snakeHead: Sprite = null
let snakeLength = 0
snakeLength = 1
let FruitCount = 1
snakeHead = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a . . . . . . . . . . 2 2 a 
    a . a a . . . . . . . . 2 2 . a 
    a . . . 7 7 7 7 7 7 7 7 . . . a 
    a . . . 7 7 7 8 8 8 7 7 . . . a 
    a . . . 7 8 7 7 8 7 8 7 . . . a 
    a . . . 7 8 8 7 7 8 8 7 . . . a 
    a . . . 7 5 5 5 7 7 8 7 . . . a 
    a . . . 7 a 8 a 5 7 7 7 . . . a 
    a . . . 7 a 9 a a 9 7 7 . . . a 
    a . . . 7 7 7 7 7 7 7 7 . . . a 
    a . . . . . a . . . 2 2 . . . a 
    a . . . . a a . . . 2 . 2 2 . a 
    a . . a a . . . . . . . . 2 2 a 
    a a a a . . . . . . . . . . 2 a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
snakeHead.setStayInScreen(true)
fruit = sprites.create(img`
    . . f f . 7 7 7 . . . . . . . . 
    . . 7 f f 7 7 7 . . . . . . . . 
    . 7 7 . . f f f 2 2 2 2 . . . . 
    . . 2 2 2 2 2 f 2 . . 2 2 2 . . 
    . 2 2 . 2 . 2 2 2 2 2 . . 2 2 . 
    2 2 . 2 2 2 2 . 2 . 2 . . . . 2 
    2 . 2 2 2 2 . 2 . . 2 2 2 . . 2 
    . 2 2 2 2 . . 2 2 2 2 . 2 . . 2 
    . 2 2 . . 2 2 2 2 . 2 2 2 . 2 2 
    . . 2 . . . . 2 2 2 2 2 2 2 2 . 
    . . 2 2 . 2 2 . . 2 2 2 . 2 2 . 
    . . . 2 2 . . 2 2 2 2 . . 2 2 . 
    . . . . 2 . . . . 2 2 2 2 2 . . 
    . . . . . 2 . . . . . 2 2 2 . . 
    . . . . . 2 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
fruit.setPosition(randint(0, 160), randint(0, 120))
info.setScore(0)
info.startCountdown(5)
