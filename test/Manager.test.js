const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("manager object", () => {
      it("creates an manager object with their respective name, id and email", () => {
        const manager = new Manager('Giana Raa', 123, 'giana@gmail.com');
        
        expect(manager).toBeInstance(Manager);
        expect(manager.name).toEqual("Giana Raa");
        expect(manager.id).toEqual(123);
        expect(manager.email).toEqual('giana@gmail.com');
        expect(manager.officeNumber).toEqual('123');
      });
    });

describe("getName", () =>{
    it("Returns the object's name", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com','123');

        expect(manager.getName()).toEqual('Giana Raa');
    });
});

describe("getId", () =>{
    it("Returns the object's id", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com','123');

        expect(manager.getId()).toEqual(123);
    });
});
describe("geEmail", () =>{
    it("Returns the object's email", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com','123');

        expect(manager.getEmail()).toEqual('giana@gmail.com');
    });
});

describe("getRole", () =>{
    it("Returns the object's role", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com','123');

        expect(manager.getRole()).toEqual('manager');
    });
});

describe("getoffice.Number", () =>{
    it("Returns the object's office.Number", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com', '123');

        expect(manager.getOfficeNumber()).toEqual('123');
    });
});

});