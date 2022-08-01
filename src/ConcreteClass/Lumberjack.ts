import Worker from "../AbstractClass/Worker";

export default class Lumberjack extends Worker {
    public workerName() : void{
        console.log("Lenhador: ");
    }
    public getUpTime(): void {
        console.log("As 7:00");
    }
    public goToWorkTime(): void {
        console.log("As 9:00");
    }
    public returnToHomeTime(): void {
        console.log("As 18:00");
    }
    public relax() : void{
        console.log("Descansando as 15:30");
    }
}