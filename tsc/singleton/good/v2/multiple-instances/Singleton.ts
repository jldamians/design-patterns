export default class Singleton {
    private name: string;
    private static singletonList: Singleton[] = [];
    private static readonly NAMES: string[] = ['A', 'B', 'C'];
    private static readonly MAX: number = Singleton.NAMES.length;
    private static turn: number = 0;

    private constructor(name: string) {
        this.name = name;
    }

    public static instance(): Singleton {
        let turn: number;
        
        if (Singleton.singletonList.length < Singleton.MAX) {
            Singleton.singletonList.push(
                new Singleton(Singleton.NAMES[Singleton.turn])
            );
        }

        turn = Singleton.turn;

        Singleton.turn = (Singleton.turn + 1) % Singleton.MAX;

        return Singleton.singletonList[turn];
    }

    public message(): void {
        console.log(`Ejecutando el método "message" de la clase "Singleton" de nombre "${this.name}"`);
    }
}
