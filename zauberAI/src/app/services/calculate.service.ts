// observables
// does the following code break the solid principles?
// does the following code break the clean code principles?
// split code according to single responsibility principle

import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CalculationService {
    x: number = 7;
    y: number = 8;
    result: number = 0;

    // define object attribute, key value pair for boats    
    
    constructor() {
    }

    public calculate(): number {
        this.result = this.x + this.y;

        console.log('calculate() result: ' + this.result);

        return this.result;
    }

    public printNames() {
        const firstNames$ = of('Torben', 'Michael', 'Peter');
        const lastNames$ = of('Müller', 'Schmidt', 'Schneider');
        // observable that combines the first and last names and emits every 10 seconds

        // subscribe and console log the result

    }

}
