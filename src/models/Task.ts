/**
 * represents a task
 */

export interface Task {
    name?: string,
    date?: Date,
    comment?: string
}

//test task for home
export const task1: Task = {
    name: "Fold laundry",
    date: new Date(),
    comment: "Don't lose any socks"
}

export const task2: Task = {
    name: "Get Groceries",
    date: new Date(),
    comment: "NEED ICE CREAM"
}
