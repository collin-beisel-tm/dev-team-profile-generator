const Engineer = require('../lib/Engineer');

test ("test github username", () => {
    const engineer = new Engineer ('Collin Beisel', '123456', 'collin@cbbuilds.tech', 'collin-beisel-tm')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('collin-beisel-tm'));
});