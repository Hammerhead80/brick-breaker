namespace SpriteKind {
    export const Edge = SpriteKind.create()
    export const Ball = SpriteKind.create()
    export const Top = SpriteKind.create()
    export const Brick = SpriteKind.create()
    export const longBoi = SpriteKind.create()
    export const heartBrick = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Brick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(15)
    numBricks += -1
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.heartBrick, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(15)
    numBricks += -1
    if (info.life() >= 3) {
        info.changeScoreBy(100)
    } else {
        info.changeLifeBy(1)
    }
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.setVelocity((sprite.x - otherSprite.x) * 0, -1 * sprite.vy)
    if (sprite.vy >= -150) {
        sprite.vx += -5
    }
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.longBoi, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    info.changeScoreBy(15)
    numBricks += -1
    Pallet.setImage(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`)
    pause(1000)
    Pallet.setImage(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`)
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Edge, function (sprite, otherSprite) {
    sprite.setVelocity(-1 * sprite.vx, sprite.vy)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    console.log(convertToText(numBricks))
})
sprites.onOverlap(SpriteKind.Ball, SpriteKind.Top, function (sprite, otherSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
function buildSetBricks () {
    for (let index = 0; index <= 6; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            createBrick(index * 16 + 32, Column * 8 + 24)
            Column += 1
        }
        Column = 0
    }
}
function createBrick (x: number, y: number) {
    randNum = Math.randomRange(1, 100)
    if (randNum <= 30) {
        Brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    } else if (randNum <= 60) {
        Brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    } else if (randNum <= 90) {
        Brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f a a a a a a a a a a a a a a f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.Brick)
    } else if (randNum <= 93) {
        Brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f 1 1 1 1 2 2 1 2 2 1 1 1 1 1 f 
f 1 1 1 2 2 2 2 2 2 2 1 1 1 1 f 
f 1 1 1 1 2 2 2 2 2 1 1 1 1 1 f 
f 1 1 1 1 2 2 2 2 2 1 1 1 1 1 f 
f 1 1 1 1 1 2 2 2 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 2 1 1 1 1 1 1 1 f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.heartBrick)
    } else {
        Brick2 = sprites.create(img`
f f f f f f f f f f f f f f f f 
f a a 1 a a a a a a a a 1 a a f 
f a 1 1 a a a a a a a a 1 1 a f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
f a 1 1 a a a a a a a a 1 1 a f 
f a a 1 a a a a a a a a 1 a a f 
f f f f f f f f f f f f f f f f 
`, SpriteKind.longBoi)
    }
    Brick2.setPosition(x, y)
    numBricks += 1
}
let Brick2: Sprite = null
let randNum = 0
let numBricks = 0
let Pallet: Sprite = null
let Column = 0
Column = 0
let startBallVar = 0
scene.setBackgroundColor(4)
Pallet = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Player)
let Ball = sprites.create(img`
. 2 2 . 
2 2 2 2 
2 2 2 2 
. 2 2 . 
`, SpriteKind.Ball)
Pallet.setPosition(80, 110)
controller.moveSprite(Pallet, 100, 0)
Pallet.setFlag(SpriteFlag.StayInScreen, true)
let Top = sprites.create(img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, SpriteKind.Top)
let Left = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.Edge)
let Right = sprites.create(img`
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
1 
`, SpriteKind.Edge)
Top.setPosition(80, 0)
Left.setPosition(0, 60)
Right.setPosition(159, 60)
buildSetBricks()
numBricks = 0
info.setScore(0)
info.setLife(3)
game.onUpdate(function () {
    if (startBallVar == 0) {
        Ball.setPosition(Pallet.x, 105)
        Ball.setVelocity(0, 0)
        if (controller.A.isPressed()) {
            startBallVar = 1
        }
    }
    if (startBallVar == 1) {
        Ball.setVelocity(Math.randomRange(-30, 30), -50)
        startBallVar = 2
    }
    if (Ball.y > 115) {
        startBallVar = 0
        info.changeLifeBy(-1)
    }
})
forever(function () {
    if (numBricks <= 0) {
        numBricks = 0
        startBallVar = 0
        effects.confetti.startScreenEffect()
        pause(100)
        effects.confetti.endScreenEffect()
        buildSetBricks()
        info.changeScoreBy(100)
    }
})
