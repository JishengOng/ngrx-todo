import { State, createReducer, on, props } from "@ngrx/store";
import { todos } from "./todos.states";
import { actions } from "./todos.action";
import { state } from "@angular/animations";

const todoReducer = createReducer(
    todos,
    on(actions.addTodoAction, (state, todo) => {
        return [...state, todo];
    }),
    on(actions.updateTodoAction, (state, todo) => {
        let tempTodoIndex = state.findIndex((t) => t.id == todo.id);
    })
)