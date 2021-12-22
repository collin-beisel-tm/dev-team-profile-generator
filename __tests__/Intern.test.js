const Intern = require('../lib/Intern');

test ("test Interns school", () => {
    const intern = new Intern ('Collin Beisel', '123456', 'collin@cbbuilds.tech', 'SMU')

    expect(intern.getSchool()).toEqual(expect.stringContaining('SMU'));
});