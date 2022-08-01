import Worker from "../AbstractClass/Worker";

export default class FireFighter extends Worker {
    public workerName() : void{
        console.log("Bombeiro: ");
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