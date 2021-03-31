/**
 * data store for all the days 
 */

import { Day } from "../models/Day";

class DaysService {
    data: Map<Date, Day>;
    
    constructor() {
        this.data = new Map<Date, Day>();
    }

    getDay(d: Date): Day | undefined {
        return this.data.get(d);
    }

    addDay(day: Day): void {
        this.data.set(day.date, day);
    }
}