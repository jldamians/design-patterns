import Singleton from "./Singleton";

export default class Client {
    private exec(): void {
        Singleton.message();
    }

    public static main(): void {
        new Client().exec();
    }
}

Client.main();