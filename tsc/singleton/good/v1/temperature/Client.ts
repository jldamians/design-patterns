import Singleton from "./Singleton";

export default class Client {
    private exec(): void {
        const myInstance1 = Singleton.getInstance();
        const myInstance2 = Singleton.getInstance();
        console.log(myInstance1);
        console.log(myInstance1.temperature);
        console.log(myInstance1.increase());
        console.log(myInstance1.increase());
        console.log(myInstance1.increase());
        console.log(myInstance1.decrease());
        console.log(`myInstance1 === myInstance2 = ${myInstance1 === myInstance2}`);
        console.log(myInstance2.temperature);

    }

    public static main(): void {
        new Client().exec();
    }
}

Client.main();