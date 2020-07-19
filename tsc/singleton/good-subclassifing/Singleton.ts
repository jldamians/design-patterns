import SingletonRegistry from "./SingletonRegistry";

export default abstract class Singleton {
    private static singleton: Singleton;

    public static instance(): Singleton {
        let singletonClass = 'CSingleton';
        if (!this.singleton) {
            this.singleton = SingletonRegistry.instance().lookup(singletonClass);
        }
        return this.singleton;
    }

    abstract message(): void;
}