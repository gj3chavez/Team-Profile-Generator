const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("employee object", () => {
      it("creates an employee object with their respective name, id and email", () => {
        const employee = new Employee('Giana Raa', 90, 'giana@gmail.com');
        
        expect(employee).toBeInstance(Employee);
        expect(employee.name).toEqual("Giana Raa");
        expect(employee.id).toEqual(90);
        expect(employee.email).toEqual('giana@gmail.com');
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

        expect(employee.getId()).toEqual(90);
    });
});
describe("geEmail", () =>{
    it("Returns the object's email", () =>{

        const employee = new Employee("Giana Raa", 90, 'giana@gmail.com');

        expect(employee.getEmail()).toEqual('giana@gmail.com');
    });
});

describe("getRole", () =>{
    it("Returns the object's role", () =>{

        const employee = new Employee("Giana Raa", 90, 'giana@gmail.com');

        expect(employee.getrole()).toEqual('Employee');
    });
});

});
  