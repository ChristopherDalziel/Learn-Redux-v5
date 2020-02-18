// This file is just for note purposes about the React components and the thought process behind them and how in this application the Container components and the presentational components are functioning / been thought about

/* Designing Component Hierarchy
Remember how we designed the shape of the root state object? It's time we design the UI hierarchy to match it. This is not a Redux-specific task. Thinking in React is a great tutorial that explains the process.
Our design brief is simple. We want to show a list of todo items. On click, a todo item is crossed out as completed. We want to show a field where the user may add a new todo. In the footer, we want to show a toggle to show all, only completed, or only active todos.

#Designing Presentational Components

I see the following presentational components and their props emerge from this brief:
-TodoList is a list showing visible todos.
-todos: Array is an array of todo items with { id, text, completed } shape.
-onTodoClick(id: number) is a callback to invoke when a todo is clicked.
-Todo is a single todo item.
-text: string is the text to show.
-completed: boolean is whether the todo should appear crossed out.
-onClick() is a callback to invoke when the todo is clicked.
-Link is a link with a callback.
-onClick() is a callback to invoke when the link is clicked.
-Footer is where we let the user change currently visible todos.
-App is the root component that renders everything else.

They describe the look but don't know where the data comes from, or how to change it. They only render what's given to them. If you migrate from Redux to something else, you'll be able to keep all these components exactly the same. They have no dependency on Redux.

#Designing Container Components

We will also need some container components to connect the presentational components to Redux. For example, the presentational TodoList component needs a container like VisibleTodoList that subscribes to the Redux store and knows how to apply the current visibility filter. To change the visibility filter, we will provide a FilterLinkcontainer component that renders a Link that dispatches an appropriate action on click:
VisibleTodoList filters the todos according to the current visibility filter and renders a TodoList.
FilterLink gets the current visibility filter and renders a Link.
filter: string is the visibility filter it represents.

#Designing Other Components

Sometimes it's hard to tell if some component should be a presentational component or a container. For example, sometimes form and function are really coupled together, such as in the case of this tiny component:
AddTodo is an input field with an “Add” button
Technically we could split it into two components but it might be too early at this stage. It's fine to mix presentation and logic in a component that is very small. As it grows, it will be more obvious how to split it, so we'll leave it mixed. */
