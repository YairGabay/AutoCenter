/* eslint-disable @typescript-eslint/no-extraneous-class */
import axios from 'axios';

interface validateUserTypes {
  password: string;
  userName: string;
}
export class AuthService {
  public static async validateUser({ password, userName }: validateUserTypes) {
    console.log({ password, userName });
    return await axios.get('https://jsonplaceholder.typicode.com/users/1');
  }
}
