import { createUser } from "../entities/user.js";
import type { UserRepository } from "../ports/user-repository.js";
type RegisterUserInput = {
    name: string;
    email: string;
    password: string;
}

export const registerUser = async (
    input: RegisterUserInput,
    repository: UserRepository
) => {
const existis = await repository.findById(input.email);
if (existis) {
    throw new Error("User already exists");
}
const user = createUser(input);
await repository.save(user);
}


