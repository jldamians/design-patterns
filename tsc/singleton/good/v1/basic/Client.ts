import Singleton from "./Singleton";

export default class Client {
    private exec(): void {
        /*
        El método "instance" me retorna un objeto, el cual 
        puedo administrar de cualquier forma conveniente
        */
        Singleton.instance().message();
    }

    public static main(): void {
        new Client().exec();
    }
}

Client.main();