"use strict";
exports.__esModule = true;
var UserServiceMocks = /** @class */ (function () {
    function UserServiceMocks() {
    }
    UserServiceMocks.getUser = function (mock) {
        switch (mock) {
            case "success":
                return {
                    "email": "test@iqoqo.co",
                    "id": "abc",
                    "name": "Some Name"
                };
            default:
                throw Error("Unknown mock: " + mock);
        }
    };
    return UserServiceMocks;
}());
exports.UserServiceMocks = UserServiceMocks;
