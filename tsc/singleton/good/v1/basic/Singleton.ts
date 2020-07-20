export default class Singleton {
    /*
    Evaluación temprana: aquí se tendría que inicializar con una instancia de la misma clase.
    Se crea cuando arranca la aplicación
    */
    private static singleton: Singleton;

    private constructor() {}

    public static instance(): Singleton {
        /*
        Evaluación peresosa: aquí se evalua si no existe la instancia para proceder a crearla.
        Se crea cuando se invoca al método "instance"
        */
        if (!this.singleton) {
            this.singleton = new Singleton();
        }
        return this.singleton;
    }

    public message(): void {
        console.log(`Ejecutando el método "message" de la clase "Singleton"`);
    }
}
