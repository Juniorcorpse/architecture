import type { User } from "../user.entity.js";
import type { UserRepository } from "../user-repository.js";

export const createInMemoryUserRepository = (initialUsers:User[] = []):UserRepository => {
    const users: User[] = [...initialUsers];
    return{
         findById: async (email:string) =>{
            return users.find(user=>user.email === email) || null;
        },
        save: async (user:User)=>{
            users.push(user);
        }
    }
}