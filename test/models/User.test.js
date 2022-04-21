const User = require("../../app/models/User")

describe("Prueba de JEST", ()=>{

    test("prueba 1", ()=>{

        expect(10).toBe(10);
    })

    test("prueba 2", () =>{
        const user = new User(1,"erodriguez", "Esteban", "bio", new Date());
        expect(user.name).toBe("Esteban");
    })
})