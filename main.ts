namespace SpriteKind {
    export const TrailingSnake = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath4, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(0, -50)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    bgMusicOn = 0
    music.stopAllSounds()
    game.over(false)
})
function backgroundMusic2 () {
    if (bgMusicOn == 1) {
        music.playMelody("C5 B C5 A F A B G ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 B C5 A F A B G ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("F A G B F A G B ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 G E G F A G B ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 B C5 A F A B G ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 B C5 A F A B G ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("F A G B F A G B ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 G E G F A G B ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 B C5 A F A B G ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("F - F F G - G G ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("A - A A B - B B ", 125)
    }
}
function bgMusic2DefinitionSectionA1 () {
    music.playMelody("C5 B C5 A F A B G ", 125)
    music.playMelody("C5 B C5 A F A B G ", 125)
    music.playMelody("F A G B F A G B ", 125)
    music.playMelody("C5 G E G F A G B ", 125)
}
function bgMusic1Definition () {
    music.playMelody("C5 B C5 A F A B G ", 125)
    music.playMelody("C5 B C5 A F A B G ", 125)
    music.playMelody("C5 B C5 A B G F A ", 125)
    music.playMelody("C5 A F A D A B G ", 125)
}
function bgMusic2DefinitionSectionA2 () {
    music.playMelody("C5 B C5 A F A B G ", 125)
    music.playMelody("C5 B C5 A F A B G ", 125)
    music.playMelody("F A G B F A G B ", 125)
    music.playMelody("C5 G E G F A G B ", 125)
}
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`noPlayerAllowedTile`, function (sprite, location) {
    bgMusicOn = 0
    music.stopAllSounds()
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(-50, 0)
})
function bgMusic2Definition () {
    bgMusic2DefinitionSectionA1()
    bgMusic2DefinitionSectionA2()
    bgMusic2DefinitionSectionB1()
}
function backgroundMusic1 () {
    if (bgMusicOn == 1) {
        music.playMelody("C5 B C5 A F A B G ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 B C5 A F A B G ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 B C5 A B G F A ", 125)
    }
    if (bgMusicOn == 1) {
        music.playMelody("C5 A F A D A B G ", 125)
    }
}
function bgMusic2DefinitionSectionB1 () {
    music.playMelody("C5 B C5 A F A B G ", 125)
    music.playMelody("F - F F G - G G ", 125)
    music.playMelody("A - A A B - B B ", 125)
}
info.onCountdownEnd(function () {
    growSnake()
    spawnEnemy()
    info.changeScoreBy(-2)
    info.startCountdown(5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath9, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
function growSnake () {
    snakeLength = 1 + snakeLength
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(50, 0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath3, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
function moveSnake () {
    for (let index3 = 0; index3 <= snakeLength; index3++) {
        snake[1 + index3] = sprites.create(assets.image`SnakeHead`, SpriteKind.TrailingSnake)
        snake[1 + index3].x = snakeHead.x
        snake[1 + index3].y = snakeHead.y
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    snakeHead.setVelocity(0, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 300)
    bgMusicOn = 0
    music.stopAllSounds()
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath1, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath8, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.stopCountdown()
    otherSprite.destroy(effects.trail, 200)
    snakeLength = snakeLength + 1
    music.powerUp.playUntilDone()
    growSnake()
    spawnFood()
    info.changeScoreBy(9)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath7, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
function spawnEnemy () {
    freeSpawnPoints = tiles.getTilesByType(sprites.castle.tileGrass3)
    for (let index = 0; index <= snakeLength; index++) {
        if (freeSpawnPoints.length > 0) {
            iEnemySpawn = randint(0, freeSpawnPoints.length)
            cSpawn = freeSpawnPoints.removeAt(iEnemySpawn)
            tiles.setTileAt(cSpawn, assets.tile`noPlayerAllowedTile`)
        }
    }
    music.knock.playUntilDone()
}
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath6, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 300)
    bgMusicOn = 0
    music.stopAllSounds()
    game.over(false)
})
let cSpawn: tiles.Location = null
let iEnemySpawn = 0
let freeSpawnPoints: tiles.Location[] = []
let fruit: Sprite = null
let bgMusicOn = 0
let snakeLength = 0
let snakeHead: Sprite = null
let snake: Sprite[] = []
tiles.setCurrentTilemap(tilemap`level1`)
let FruitCount = 1
snake = sprites.allOfKind(SpriteKind.Player)
snakeHead = sprites.create(assets.image`SnakeHead`, SpriteKind.Player)
snakeHead.setVelocity(50, 0)
snake[0] = snakeHead
snakeLength = 0
scene.cameraFollowSprite(snakeHead)
snakeHead.setStayInScreen(false)
snakeHead.setBounceOnWall(false)
snakeHead.setFlag(SpriteFlag.DestroyOnWall, true)
info.setScore(0)
spawnFood()
bgMusicOn = 1
forever(function () {
    backgroundMusic2()
})
