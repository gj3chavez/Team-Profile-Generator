
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Intern object", () => {
      it("creates an Intern object with their respective name, id, email and school", () => {
        const intern = new Intern('Giana Raa', 100, 'giana@gmail.com','Hogwarts School of Witchcraft and Wizardry');
        
       
        expect(intern.name).toBe("Giana Raa");
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
      });
    });

describe("getName", () =>{
    it("Returns the object's name", () =>{

        const intern = new Intern("Giana Raa", 100, 'giana@gmail.com','Hogwarts School of Witchcraft and Wizardry');

        expect(intern.getName()).toEqual('Giana Raa');
    });
});

describe("getId", () =>{
    it("Returns the object's id", () =>{

        const intern = new Intern("Giana Raa", 100, 'giana@gmail.com','Hogwarts School of Witchcraft and Wizardry');

        expect(intern.getId()).toEqual(expect.any(Number));
    });
});
describe("getEmail", () =>{
    it("Returns the object's email", () =>{

        const intern = new Intern("Giana Raa", 100, 'giana@gmail.com','Hogwarts School of Witchcraft and Wizardry');

        expect(intern.getEmail()).toEqual(expect.any(String));
    });
});

describe("getRole", () =>{
    it("Returns the object's role", () =>{

        const intern = new Intern("Giana Raa", 100, 'giana@gmail.com','Hogwarts School of Witchcraft and Wizardry');

        expect(intern.getRole()).toEqual('Intern');
    });
});

describe("getSchool", () =>{
    it("Returns the object's school", () =>{

        const intern = new Intern("Giana Raa", 100, 'giana@gmail.com', 'Hogwarts School of Witchcraft and Wizardry');

        expect(intern.getSchool()).toEqual('Hogwarts School of Witchcraft and Wizardry');
    });
});

});