//Step-0: Install Redux Library using NPM Command- "npm install @reduxjs/toolkit" in the terminal.
import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../features/todo/todoSlice';

//Step-1: Create Redux Store Object using configureStore() function from Redux Library.
export const store = configureStore({

    /*Step-12: Imported Reducer Object from todoSlice.js || Step-15: The Redux store receives the action object and forwards 
      it to the root reducer. The todoSlice reducer function handles the action based on its type. For addTodo, the addTodo 
      reducer function is called with the current state and the action object. The addTodo reducer function creates a new 
      todo object with a unique ID (using nanoid()) and the text from action.payload. It then adds this new todo object to
      the todos array in the state. Here the new state object is created(Immer in action). */

    reducer: todoReducer

    /* Step-16: Because the Redux store state has changed, any connected React components that depend on the todos state 
       will re-render to reflect the new state. */
})