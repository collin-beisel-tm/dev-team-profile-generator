class Manager extends Employee {
    constructor (officeNumber ='') {
        super(officeNumber);
    }

    getRole() {
        return Manager;
    }
}