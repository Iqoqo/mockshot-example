export interface IUser {
    id: string;
    name: string;
    email: string;
}

export class UserService {

    constructor(private readonly db){}

    async getUser(id: string):Promise<IUser>{
        const user = await this.db.findOneById(id);
        return {
            id: user.id,
            name: user.name, 
            email: user.email
        };
    }

}

