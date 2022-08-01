import AbstractClass from "./AbstractClass/Worker";
import Lumberjack from "./ConcreteClass/Lumberjack";
import FireFighter from "./ConcreteClass/FireFighter";
import Manager from "./ConcreteClass/Manager";
import Postman from "./ConcreteClass/Postman";

function clientCode(abstractClass: AbstractClass) {
    // ...
    abstractClass.templateMethod();
    // ...
}
clientCode(new Postman());
console.log('');
clientCode(new FireFighter());
console.log('');
clientCode(new Manager());
console.log('');
clientCode(new Lumberjack());
