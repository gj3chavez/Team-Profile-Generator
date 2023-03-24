const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("employee object", () => {
      it("Should create a employee object with their respective name, id and email", () => {
        const employee = new Employee('Giana Raa', 90, 'giana@gmail.com');
        
       
        expect(employee.name).toBe("Giana Raa");
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
      });
    });

describe("getName", () =>{
    it("Returns the object's name", () =>{

        const employee = new Employee("Giana Raa", 90, 'giana@gmail.com');

        expect(employee.getName()).toEqual('Giana Raa');
    });
});

describe("getId", () =>{
    it("Returns the object's id", () =>{

        const employee = new Employee("Giana Raa", 90, 'giana@gmail.com');

        expect(employee.id).toEqual(90);
    });
});
describe("getEmail", () =>{
    it("Returns the object's email", () =>{

        const employee = new Employee("Giana Raa", 90, 'giana@gmail.com');

        expect(employee.getEmail()).toEqual(expect.stringContaining('giana@gmail.com'));
    });
});

describe("getRole", () =>{
    it("Returns the object's role", () =>{

        const employee = new Employee("Giana Raa", 90, 'giana@gmail.com');

        expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
    });
});

});
  