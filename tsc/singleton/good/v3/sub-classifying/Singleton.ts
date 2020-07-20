import config from "../../../config";
import SingletonRegistry from "./SingletonRegistry";

export default abstract class Singleton {
    private static singleton: Singleton;

    public static instance(): Singleton {
        const mySingletonClassName = this.getSingletonConfig();
        if (!this.singleton) {
            this.singleton = SingletonRegistry.instance().lookup(mySingletonClassName);
        }
        return this.singleton;
    }

    private static getSingletonConfig(): string {
        const { singleton } = config;
        return singleton;
    }

    abstract message(): void;
}