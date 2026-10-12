import { v4 } from 'uuid';
import { hashSync } from 'bcryptjs'; // Assuming you are using bcryptjs for password hashing
type CreateUserType = {
  name: string;
  email: string;
  password: string;
};
1
const hashPassword = (password: string): string => {
    return hashSync(password); // Hash the password with a salt round of 10
}
export const createUser = ({ name, email, password }: CreateUserType) => {
  const id = v4();
  const passwordHash = hashPassword(password); // Assuming you have a function to hash the password
  return Object.freeze({
    id,
    name,
    email,
    passwordHash
  });
};