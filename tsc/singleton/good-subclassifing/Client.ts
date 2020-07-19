import Singleton from "./Singleton";
import ASingleton from "./ASingleton";
import BSingleton from "./BSingleton";

class Client {
    exec(): void {
        ASingleton.register();
        BSingleton.register();

        Singleton.instance().message();
    }
}

const client = new Client();
client.exec();