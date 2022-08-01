import Worker from "../AbstractClass/Worker";

export default class Manager extends Worker {
    public workerName() : void{
        console.log("Gerente: ");
    }
    public getUpTime(): void {
        console.log("As 9:00");
    }
    public goToWorkTime(): void {
        console.log("As 10:00");
    }
    public returnToHomeTime(): void {
        console.log("As 16:00");
    }
    
}