export enum Roles {
    Admin,
    Visitor
}

export interface IUser {
    id: string;
    name: string;
    role: Roles
}

export class UserService {

    constructor(private readonly db){}

    async createUser({name, role}: {name: string, role: Roles}):Promise<IUser>{
        const result = await this.db.save({ name, role});
        return result;
    }

}

