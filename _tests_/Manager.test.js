
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("manager object", () => {
      it("creates an manager object with their respective name, id and email", () => {
        const manager = new Manager('Giana Raa', 123, 'giana@gmail.com',123);
        
       
        expect(manager.name).toBe("Giana Raa");
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.officeNumber).toEqual(expect.any(Number));
      });
    });

describe("getName", () =>{
    it("Returns the object's name", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com',123);

        expect(manager.getName()).toEqual('Giana Raa');
    });
});

describe("getId", () =>{
    it("Returns the object's id", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com',123);

        expect(manager.getId()).toEqual(expect.any(Number));
    });
});
describe("getEmail", () =>{
    it("Returns the object's email", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com',123);

        expect(manager.getEmail()).toEqual(expect.any(String));
    });
});

describe("getRole", () =>{
    it("Returns the object's role", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com',123);

        expect(manager.getRole()).toEqual('Manager');
    });
});

describe("getOfficeNumber", () =>{
    it("Returns the object's office Number", () =>{

        const manager = new Manager("Giana Raa", 123, 'giana@gmail.com', 123);

        expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    });
});

});