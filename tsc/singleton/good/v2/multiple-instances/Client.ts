import Singleton from "./Singleton";

export default class Client {
    private exec(): void {
        for (let index = 0; index < 10; index++) {
            Singleton.instance().message();
        }
    }

    public static main(): void {
        new Client().exec();
    }
}

Client.main();