export interface Task {
    name?: string,
    date?: Date,
    comment?: string
}

//test task for home
export const task1: Task = {
    name: "hello",
    date: new Date(),
    comment: "hahhfildsjkfdsla"
}

export const task2: Task = {
    name: "goodbye",
    date: new Date(),
    comment: "fdsadsadfaf"
}