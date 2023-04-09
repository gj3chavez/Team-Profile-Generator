
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("engineer object", () => {
      it("creates an engineer object with their respective name, id, email and github", () => {
        const engineer = new Engineer('Giana Raa', 100, 'giana@gmail.com','gianaraa');
        
      
        expect(engineer.name).toBe("Giana Raa");
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.github).toEqual(expect.any(String));
      });
    });

describe("getName", () =>{
    it("Returns the object's name", () =>{

        const engineer = new Engineer("Giana Raa", 100, 'giana@gmail.com','gianaraa');

        expect(engineer.getName()).toEqual('Giana Raa');
    });
});

describe("getId", () =>{
    it("Returns the object's id", () =>{

        const engineer = new Engineer("Giana Raa", 100, 'giana@gmail.com','gianaraa');

        expect(engineer.getId()).toEqual(expect.any(Number));
    });
});
describe("getEmail", () =>{
    it("Returns the object's email", () =>{

        const engineer = new Engineer("Giana Raa", 100, 'giana@gmail.com','gianaraa');

        expect(engineer.getEmail()).toEqual(expect.any(String));
    });
});

describe("getRole", () =>{
    it("Returns the object's role", () =>{

        const engineer = new Engineer("Giana Raa", 100, 'giana@gmail.com','gianaraa');

        expect(engineer.getRole()).toEqual('Engineer');
    });
});

describe("getGithub", () =>{
    it("Returns the object's github", () =>{

        const engineer = new Engineer("Giana Raa", 100, 'giana@gmail.com', 'gianaraa');

        expect(engineer.getGithub()).toEqual(expect.any(String));
    });
});

});