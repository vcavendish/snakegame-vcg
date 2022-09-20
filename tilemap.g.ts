// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000202020202020202020202020202020202040b0b0b0b0b0b0b0b0b0b0b0b0a0202050d0d0d0d0d0d0d0d0d0d0d0d090202050d0d0d0d0d0d0d030d0d0d0d090202050d0d0d030d0d0d0d0d0d0d0d090202050d0d0d0d0d0d0c0d0d0d0d0d090202050d0d0d0d0d0d0d0d0d0d0d0d090202050d0d0d0d0d010d0d0c0d0d0d090202050d0d0d0d0d0d0d0d0d0d0d0d090202050d0d0d030d0d0d0d0d0d0d0d090202050d0d0d0d0d0d0d0d0d0d0d0d090202050d0d0d0d0d0d0d0d0d0d0d0d090202050d030d0d0d0d0c0d0d0d0d0d090202050d0d0d0d0d0d0d0d0d0d0d0d09020206070707070707070707070707080202020202020202020202020202020202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.builtin.brick,sprites.castle.tileGrass1,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tileGrass3,sprites.castle.tilePath5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
