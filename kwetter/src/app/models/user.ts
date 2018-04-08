import { Kweet } from './kweet';

export class User {
    public id: number;
    public username: string;
    public password: string;
    public profilePhoto: string;
    public role: string;
    public kweets: Kweet[];
}
