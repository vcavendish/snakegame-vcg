namespace SpriteKind {
    export const TrailingSnake = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(0, -50)
    moveSnake()
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    game.over(false)
})
function spawnFood () {
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
    tiles.placeOnRandomTile(fruit, sprites.castle.tileGrass2)
    info.startCountdown(5)
}
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(-50, 0)
    moveSnake()
})
info.onCountdownEnd(function () {
    info.changeScoreBy(50)
    info.startCountdown(5)
})
function growSnake () {
    snakeLength = 1 + snakeLength
    for (let index = 0; index <= snakeLength; index++) {
        snake[1 + index] = sprites.create(img`
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
            `, SpriteKind.TrailingSnake)
        snake[1 + index].x = snakeHead.x
        snake[1 + index].y = snakeHead.y
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(50, 0)
    moveSnake()
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.setTileAt(location, sprites.builtin.brick)
})
function moveSnake () {
    for (let index3 = 0; index3 <= snakeLength; index3++) {
        snake[1 + index3] = sprites.create(img`
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
            `, SpriteKind.TrailingSnake)
        snake[1 + index3].x = snakeHead.x
        snake[1 + index3].y = snakeHead.y
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(0, 50)
    moveSnake()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 300)
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 200)
    snakeLength = snakeLength + 1
    growSnake()
    spawnFood()
    info.changeScoreBy(10)
})
let fruit: Sprite = null
let snakeLength = 0
let snakeHead: Sprite = null
let snake: Sprite[] = []
tiles.setCurrentTilemap(tilemap`level1`)
let FruitCount = 1
snake = sprites.allOfKind(SpriteKind.Player)
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
snakeHead.setVelocity(50, 0)
snake[0] = snakeHead
snakeLength = 0
scene.cameraFollowSprite(snakeHead)
snakeHead.setStayInScreen(false)
snakeHead.setBounceOnWall(false)
snakeHead.setFlag(SpriteFlag.DestroyOnWall, true)
info.setScore(0)
spawnFood()
