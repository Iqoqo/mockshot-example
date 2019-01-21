"use strict";
exports.__esModule = true;
var classTree = { "getUser": { "success": { "meta": { "key": "UserService Should get user: [mockshot] [ClassSnap] [[UserService getUser success]] 1", "originFile": "test/__snapshots__/UserService.spec.ts.snap" }, "mock": { "email": "test@iqoqo.co", "id": "abc", "name": "Some Name" } } } };
function getSpy(methodName) {
    var newSpy = jest.fn();
    var getMock = function (mockName) { return classTree[methodName][mockName].mock; };
    var mockImplementation = newSpy.mockImplementation, mockImplementationOnce = newSpy.mockImplementationOnce;
    newSpy.mockImplementation = function (mockName) {
        return typeof mockName === "string"
            ? mockImplementation(function () { return getMock(mockName); })
            : mockImplementation(mockName);
    };
    newSpy.mockImplementationOnce = function (mockName) {
        return typeof mockName === "string"
            ? mockImplementationOnce(function () { return getMock(mockName); })
            : mockImplementationOnce(mockName);
    };
    newSpy.getMock = getMock;
    return newSpy;
}
exports.userServiceSpy = {
    getUser: getSpy("getUser"),
};
