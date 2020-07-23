export default class Singleton {
    private static instance: Singleton;
    private _temperature: number;
    private constructor() {}

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
            Singleton.instance._temperature = 0;
        }

        return Singleton.instance;
    }

    get temperature(): number {
        return this._temperature;
    }

    public increase(): number {
        return this._temperature += 1;
    }

    public decrease(): number {
        return this._temperature -= 1;
    }
}
