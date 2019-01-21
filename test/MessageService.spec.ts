import { MessageService } from "../src/MessageService";
import { UserServiceMocks } from "../@mocks/mockshot-example/UserService";

describe("MessageService", () => {

    const getUserResult = UserServiceMocks.getUser("success");

    const userService = {
        getUser: ()=>getUserResult
    }

    it("Should prepare message", async () => {

        const messageService = new MessageService(userService);
        const text = "This is message body";

        const message = await messageService.prepareMessage(text, "abc");

        expect(message.to).toEqual(getUserResult.email);
        expect(message.title).toEqual(`Hello ${getUserResult.name}`);
        expect(message.body).toEqual(text);

    })
})