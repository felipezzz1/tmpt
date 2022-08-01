import Worker from "../AbstractClass/Worker";

export default class Postman extends Worker {
    public workerName() : void{
        console.log("Carteiro: ");
    }
    public getUpTime(): void {
        console.log("As 6:00");
    }
    public goToWorkTime(): void {
        console.log("As 7:00");
    }
    public returnToHomeTime(): void {
        console.log("As 17:00");
    }
    public haveABreak(): void {
        console.log("Dando uma pausa das 9:00 as 10:00");
    }
}