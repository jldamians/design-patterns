export default class Singleton {
    private constructor() {}
    
    public static message(): void {
        console.log(`Ejecución del método "message" de la clase "Singleton"`);
    }
}
