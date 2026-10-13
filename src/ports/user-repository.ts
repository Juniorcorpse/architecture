import type { User } from "../entities/user.js";

export type UserRepository = {
    findById: (email: string) => Promise<User | null>;
    save: (user: User) => Promise<void>;
}
