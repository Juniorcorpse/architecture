import type { User } from "./user.entity.js";

export type UserRepository = {
    findById: (email: string) => Promise<User | null>;
    save: (user: User) => Promise<void>;
}
