import "mockshot";
import { UserService } from "../src/UserService";

describe("UserService", () => {

    // fake database service
    const db = {
        findOneById: async (id) => {
            const name = "Some Name";
            const email = "test@iqoqo.co";
            return {
                id,
                name, 
                email
            } 
        }
    }
    
    it("Should get user", async () => {
        // prepare
        const userService = new UserService(db);
        const id = "abc";

        // execute
        const user = await userService.getUser(id);

        // assert
        expect(user.id).toEqual(id)
        expect(user.name).toBeDefined()
        expect(user.email).toBeDefined()

        expect(user).toMatchMock("UserService", "getUser", "success");

    })
})