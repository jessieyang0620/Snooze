/**
 * all data from a day 
 */

import { Symptom } from "./Symptom";
import { Task } from "./Task";

export interface Day {
    date: Date,
    tasks: Task[],
    symptoms: Symptom[]
}