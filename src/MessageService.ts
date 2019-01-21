
export class MessageService {

    constructor(private readonly userService){}

    async prepareMessage(text: string, userId: string) {
        const user = await this.userService.getUser(userId);
        return { 
            to: user.email,
            title: `Hello ${user.name}`,
            body: text
        }

    }
}