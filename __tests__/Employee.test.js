const Employee = require ('../lib/Employee');

test('tests the employee object', () => {
    const employee = new Employee ('Collin Beisel', '123456', 'collin@cbbuilds.tech','Employee');

    expect(employee.name).toBe('Collin Beisel');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('collin@cbbuilds.tech');
});

test('checks employee name', () => {
    const employee = new Employee ('Collin Beisel', '123456', 'collin@cbbuilds.tech','Employee');

    expect(employee.getName()).toEqual(expect.stringContaining('Collin Beisel'));
});

test('checks employee ID', () => {
    const employee = new Employee ('Collin Beisel', '123456', 'collin@cbbuilds.tech','Employee');

    expect(employee.getId()).toEqual(expect.stringContaining('123456'));
});

test('checks employee email', () => {
    const employee = new Employee ('Collin Beisel', '123456', 'collin@cbbuilds.tech','Employee');

    expect(employee.getEmail()).toEqual(expect.stringContaining('collin@cbbuilds.tech'));
});

test('checks employee role', () => {
    const employee = new Employee ('Collin Beisel', '123456', 'collin@cbbuilds.tech','Employee');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});