import { createUser } from "./user.entity.js";

import { createInMemoryUserRepository } from "./in-memory-user-repository.js";
import { registerUser } from "./register-user.use-case.js";
describe("register User - User case", () => {
    it("deve registrar um novo usuário", async () => {
        const userRepository = createInMemoryUserRepository();
        const input ={
            name: 'Jr souza',
            email: 'jrtests@gmail.com',
            password:'123456'
        }

        await registerUser(input, userRepository);
        const savedUser = await userRepository.findById(input.email);
        expect(savedUser).toBeDefined();
        expect(savedUser?.name).toBe(input.name);
    });

    it("não deve registrar um usuário se o e-mail já existir", async () => {
        const userRepository = createInMemoryUserRepository([
            {id:'123', name:'tese2', email:'teste@teste.com', passwordHash:'13132', createdAt:new Date()}
        ]);
        const input ={
            name: 'Jr souza',
            email: 'teste@teste.com',
            password:'123456'
        }
        await expect(registerUser(input, userRepository)).rejects.toThrow('User already exists')
    });
});
