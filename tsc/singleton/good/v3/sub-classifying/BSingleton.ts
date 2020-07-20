import Singleton from "./Singleton";
import SingletonRegistry from "./SingletonRegistry";

export default class BSingleton extends Singleton {
    protected constructor() {
        super();
        SingletonRegistry.instance().register("BSingleton", this);
    }

    public message(): void {
        console.log(`Ejecución del método "message" de la clase "BSingleton"`);
    }

    public static register(): void {
        new BSingleton();
    }
}