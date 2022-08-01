import IWorker from "./interface/IWorker";

export default abstract class Worker implements IWorker {
    
    public templateMethod(): void {
        this.dailyRoutine();
        this.workerName();
        this.getUp();
        this.getUpTime();
        this.goToWork();
        this.goToWorkTime();
        this.haveABreak();
        this.relax();
        this.returnToHome();
        this.returnToHomeTime();
        
    }
    /*
        estes metodos sao implementados 
        diretamente na classe abstrata
    */
    public dailyRoutine(): void {
        console.log("Rotina diaria");
    }

    public getUp(): void {
        console.log("Acordando")
    }
      
    public goToWork() : void{
        console.log("Indo para o trabalho");
    }

    public returnToHome() : void{
        console.log("Voltando para casa");
    }

    /* 
        Estes metodos devem ser implementados
        pelas subclasses    
    */
    public abstract workerName() : void;

    public abstract getUpTime(): void;

    public abstract goToWorkTime() : void;

    public abstract returnToHomeTime() : void;
 
    /* 
        Estes metodos sao os "hooks", as subclasses podem
        sobrescreve-los porem nao obrigatoriamente
        desde que os hooks sejam definidos como vazios por default
        os hooks providenciam extensoes adicionais para algumas partes
        do algoritmo
    */
    public haveABreak() : void {};
    public relax() : void {};

}