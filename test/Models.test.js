//const { Board } = require('cheese-boards/models/board.model.js');
const { Board, User, Cheese } = require("../models");
const { db } = require('cheese-boards/db/db.js');
const seed  = require('cheese-boards/db/seed.js');



describe('Checks boards data is correct', () => {
    beforeEach(async () => {
        await Board.sync({force: true})
        await seed()
    })

    test('Instance is created on start', async () => {
        const test = await Board.findAll({where: {type: "Aged"}})
        expect(test[0].getDataValue("type")).toMatch('Aged');
    })
})



describe('Checks cheese data is correct', () => {
    beforeEach(async () => {
        await Cheese.sync({force: true})
        await seed()
    })
    test('Instance is created on start', async () => {
        const test = await Cheese.findAll({where: {title: "Parmesan"}})
        expect(test[0].getDataValue("description")).toMatch('The flavor power of parmesan can take a savory dish from acceptable to amazing with a dusting of this delicious cheese. Lots of words are used to describe parmesan: rich, tangy, nutty, sharp, complex, fruity, and bold to name a few. It has a somewhat gritty texture and a strong umami taste.');
    })
})



describe('Checks users data is correct', () => {
    beforeEach(async () => {
        await User.sync({force: true})
        await seed()
    })
    test('Instance is created on start', async () => {
        const test = await User.findAll({where: {name: "Amazing"}})
        expect(test[0].getDataValue("email")).toMatch('Amazing@test.com');
    })
})



describe('Relationships works', () => {
    beforeEach(async () => {
        await Board.sync({force: true})
        await seed()
    })
    test('One to many works', async () => {
        const test = await Board.findOne({where: {type: "Aged"}})
        expect(test.getDataValue("UserId")).toBe(1);
    })
})



