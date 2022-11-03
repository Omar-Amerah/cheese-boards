//const { Board } = require('cheese-boards/models/board.model.js');
const { Board, User, Cheese } = require("../models");
const { db } = require('cheese-boards/db/db.js');

test('Instance is created on start', async () => {
    await Board.sync({ force: true });
    await Board.create({type: "Wood", description: "Looks nice", rating: 5})
    const test = await Board.findAll({where: {type: "Wood"}})
    expect(test[0].getDataValue("type")).toMatch('Wood');
})


test('Instance is created on start', async () => {
    await User.sync({ force: true });
    await User.create({name: "Amazing", email: "Amazing@test.com"})
    const test = await User.findAll({where: {name: "Amazing"}})
    expect(test[0].getDataValue("email")).toMatch('Amazing@test.com');
})

test('Instance is created on start', async () => {
    await Cheese.sync({ force: true });
    await Cheese.create({title: "Halloumi", description: "Best Cheese"})
    const test = await Cheese.findAll({where: {title: "Halloumi"}})
    expect(test[0].getDataValue("description")).toMatch('Best Cheese');
})