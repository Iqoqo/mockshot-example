export class UserServiceMocks {
    static getUser(mock: "success"): any {
        switch (mock) {
            case "success":
                return {
                  "email": "test@iqoqo.co",
                  "id": "abc",
                  "name": "Some Name"
                }
            default:
                throw Error("Unknown mock: "+mock);
        }
    }
}
