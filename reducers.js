// Reducers specify how the applications state changes in response to actions that are sent to the store. Remember that actions can only describe what happened, but don't describe how the applications state changes.

import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO } from "./actions";

const { SHOW_ALL } = VisibilityFilters;

// Creating the initial state of our app
const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

// Updating todo's
// ES6 initial state function, case must always return default.
function todos(state = [], action) {
  switch (action.type) {
    // Action 1
    case ADD_TODO:
      return [
        // First calling the old todos from the state before creating the new todo?
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    // Action 2 - Unsure I completely understand this action.. return NOT completed todos?
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      });
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    // ACTION 3
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

// Updating visibilityFilter
function todoApp(state = initialState, action) {
  switch (action.type) {
    // ACTION 4
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    // ACTION 5
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todo, action)
      });
    // ACTION 6
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      });
    default:
      return state;
  }
}

// function todoApp(state, action) {
//   if (typeof state === "undefined") {
//     return initialState;
//   }

//   // Don't handle any actions just return the state given to us
//   return state;
// }
