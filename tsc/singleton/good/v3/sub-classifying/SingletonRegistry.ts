import Singleton from "./Singleton";

export default class SingletonRegistry {
    private static singletonRegistry: SingletonRegistry;
    private singletonMap = new Map();

    private constructor() {}

    public static instance(): SingletonRegistry {
        if (!this.singletonRegistry) {
            this.singletonRegistry = new SingletonRegistry();
        }
        return this.singletonRegistry;
    }

    public register(name: string, singleton: Singleton): void {
        this.singletonMap.set(name, singleton);
    }

    public lookup(name: string): Singleton {
        return this.singletonMap.get(name);
    }
}