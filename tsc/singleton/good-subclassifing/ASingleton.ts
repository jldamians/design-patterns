import Singleton from "./Singleton";
import SingletonRegistry from "./SingletonRegistry";

export default class ASingleton extends Singleton {
    protected constructor() {
        super();
        SingletonRegistry.instance().register("ASingleton", this);
    }

    public message(): void {
        console.log(`Ejecución del método "message" de la clase "ASingleton"`);
    }

    public static register(): void {
        new ASingleton();
    }
}