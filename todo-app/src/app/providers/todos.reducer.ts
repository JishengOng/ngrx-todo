import { State, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { TodoModel, todos } from "./todos.states";
import { actions } from "./todos.action";
import { state } from "@angular/animations";

export const todoReducer = createReducer(
    todos,
    on(actions.addTodoAction, (state, todo) => {
        return [todo, ...state,];
    }),
    on(actions.updateTodoAction, (state, todo) => {
        let tempTodoIndex = state.findIndex((t) => t.id == todo.id);
        if(tempTodoIndex != -1) {
            state[tempTodoIndex] = todo; 
        }
        return [...state];
    }),
    on(actions.deleteTodoAction, (state, todo) => {
        let todos = state.filter((t) => t.id != todo.id);
        return [...todos];
    }),
)

export const todosSelector = createSelector(createFeatureSelector("todos"), 
    (todos: TodoModel[]) => todos
);