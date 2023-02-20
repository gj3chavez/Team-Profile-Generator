const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("engineer object", () => {
      it("creates an engineer object with their respective name, id and email", () => {
        const engineer = new engineer('Giana Raa', 100, 'giana@gmail.com');
        
        expect(engineer).toBeInstance(engineer);
        expect(engineer.name).toEqual("Giana Raa");
        expect(engineer.id).toEqual(100);
        expect(engineer.email).toEqual('giana@gmail.com');
        expect(engineer.github).toEqual('gianaraa');
      });
    });

describe("getName", () =>{
    it("Returns the object's name", () =>{

        const engineer = new engineer("Giana Raa", 100, 'giana@gmail.com','gianaraa');

        expect(engineer.getName()).toEqual('Giana Raa');
    });
});

describe("getId", () =>{
    it("Returns the object's id", () =>{

        const engineer = new engineer("Giana Raa", 100, 'giana@gmail.com','gianaraa');

        expect(engineer.getId()).toEqual(100);
    });
});
describe("geEmail", () =>{
    it("Returns the object's email", () =>{

        const engineer = new engineer("Giana Raa", 100, 'giana@gmail.com','gianaraa');

        expect(engineer.getEmail()).toEqual('giana@gmail.com');
    });
});

describe("getRole", () =>{
    it("Returns the object's role", () =>{

        const engineer = new engineer("Giana Raa", 100, 'giana@gmail.com','gianaraa');

        expect(engineer.getRole()).toEqual('Engineer');
    });
});

describe("getGithub", () =>{
    it("Returns the object's github", () =>{

        const engineer = new engineer("Giana Raa", 100, 'giana@gmail.com', 'gianaraa');

        expect(engineer.getGithub()).toEqual('gianaraa');
    });
});

});