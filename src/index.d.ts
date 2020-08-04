declare namespace jasmine {
    interface Matchers<T> {
        toBeDisplayed(): Promise<void>;
    }
}