import { v4 } from 'uuid';
import { hashSync } from 'bcryptjs'; // Assuming you are using bcryptjs for password hashing
export type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

type CreateUserType = {
  name: string;
  email: string;
  password: string;
};
1
const hashPassword = (password: string): string => {
    return hashSync(password); // Hash the password with a salt round of 10
}
export const createUser = ({ name, email, password }: CreateUserType): User => {
  const id = v4();
  const passwordHash = hashPassword(password); // Assuming you have a function to hash the password
  const createdAt = new Date();
  return Object.freeze({
    id,
    name,
    email,
    passwordHash,
    createdAt
  });
  
};