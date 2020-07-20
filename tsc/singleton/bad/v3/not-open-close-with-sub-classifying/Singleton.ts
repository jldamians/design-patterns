import config from "../../../config";
import ASingleton from "./ASingleton";
import BSingleton from "./BSingleton";

export default class Singleton {
    private static singleton: Singleton;

    public static instance(): Singleton {
        let mySingletonClassName;

        if (!this.singleton) {
            mySingletonClassName = this.getSingletonConfig();
            if (mySingletonClassName === 'ASingleton') {
                this.singleton = new ASingleton();
            } else if (mySingletonClassName === 'BSingleton') {
                this.singleton = new BSingleton();
            } else {
                throw new Error(`La clase singleton ${mySingletonClassName} no existe`);
            }
        }

        return this.singleton;
    }

    private static getSingletonConfig(): string {
        const { singleton } = config;
        return singleton;
    }
}
