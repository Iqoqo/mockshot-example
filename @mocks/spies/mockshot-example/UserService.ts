interface MockshotMock<P, T = {}> extends jest.Mock {
    mockImplementation(mockName: P): jest.Mock<T>;
    mockImplementation(fn: (...args: any[]) => any): jest.Mock<T>;
    mockImplementationOnce(mockName: P): jest.Mock<T>;
    mockImplementationOnce(fn: (...args: any[]) => any): jest.Mock<T>;
    getMock(mockName: P): any;
}

interface UserServiceSpy {
    getUser: MockshotMock<"success">;
}

const classTree = {"getUser":{"success":{"meta":{"key":"UserService Should get user: [mockshot] [ClassSnap] [[UserService getUser success]] 1","originFile":"test/__snapshots__/UserService.spec.ts.snap"},"mock":{"email":"test@iqoqo.co","id":"abc","name":"Some Name"}}}};

function getSpy<P extends string>(methodName: string): MockshotMock<P> {
    const newSpy = jest.fn() as MockshotMock<P>;
    const getMock = mockName => classTree[methodName][mockName].mock;
    const { mockImplementation, mockImplementationOnce } = newSpy;
    newSpy.mockImplementation = mockName =>
      typeof mockName === "string"
        ? mockImplementation(() => getMock(mockName))
        : mockImplementation(mockName);
    newSpy.mockImplementationOnce = mockName =>
      typeof mockName === "string"
        ? mockImplementationOnce(() => getMock(mockName))
        : mockImplementationOnce(mockName);
    newSpy.getMock = getMock;
    return newSpy;
}

export const userServiceSpy: UserServiceSpy = {
    getUser: getSpy("getUser"),
}
;
