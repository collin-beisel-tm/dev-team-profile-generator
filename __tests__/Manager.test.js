const Manager = require('../lib/Manager');

test ("test managers office number", () => {
    const manager = new Manager ('Collin Beisel', '123456', 'collin@cbbuilds.tech', '69420')

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('69420'));
});