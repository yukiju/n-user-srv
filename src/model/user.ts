export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(
        id: number,
        username: string,
        email: string,
        password: string,
        firstName: string,
        lastName: string
    ) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static from(obj: UserRow): User {
        const user = new User(
            obj.id,
            obj.username,
            obj.email,
            obj.password,
            obj.first_name,
            obj.last_name
        );
        return user;
    }
}

export interface UserRow {
    id: number;
    username: string;
    email: string;
    password:  string;
    first_name: string;
    last_name: string;

}
