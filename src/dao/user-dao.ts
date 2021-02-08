import { User, UserRow } from '../model/user';
import { db } from './db';

export function getAllUsers(): Promise<User[]> {
    const sql = 'SELECT * FROM users ORDER BY id';

    return db.query<UserRow>(sql, []).then(res => {
        const rows: UserRow[] = res.rows;
        const users: User[] = rows.map(row => User.from(row));
        return users;
    }).catch(e => {
        console.log(e);
        return undefined;
    });
}
