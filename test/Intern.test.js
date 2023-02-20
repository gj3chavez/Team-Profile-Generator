const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Intern object", () => {
      it("creates an Intern object with their respective name, id, email and school", () => {
        const Intern = new Intern('Giana Raa', 100, 'giana@gmail.com','Hogwarts School of Witchcraft and Wizardry');
        
        expect(intern).toBeInstance(Intern);
        expect(intern.name).toEqual("Giana Raa");
        expect(intern.id).toEqual(100);
        expect(intern.email).toEqual('giana@gmail.com');
        expect(intern.school).toEqual('Hogwarts School of Witchcraft and Wizardry');
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

        expect(intern.getId()).toEqual(100);
    });
});
describe("geEmail", () =>{
    it("Returns the object's email", () =>{

        const intern = new Intern("Giana Raa", 100, 'giana@gmail.com','Hogwarts School of Witchcraft and Wizardry');

        expect(intern.getEmail()).toEqual('giana@gmail.com');
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