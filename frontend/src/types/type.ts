
export type Status = "TODO" | "ON HOLD" | "IN PROGRESS" | "DONE";

export type Task = {
    id: number,
    title: string,
    description: string,
    status: Status,
    createdAt: number,
    updatedAt: number
}
