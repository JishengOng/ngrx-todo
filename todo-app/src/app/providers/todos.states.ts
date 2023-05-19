export interface TodoModel {
    id: number;
    title: string;
    completed: boolean;
}

export let todos: TodoModel[] = [
    {
        id: 1,
        title: "Buy eggs from Costco",
        completed: false
    }
]