// Action value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) =>{
    return{
        type: DELETE_TODO,payload
    }
}
// initial State
const initialState = {
  todos: [
    {
      id: 1,
      title: "react를 배워봅시다.",
      body:"화이팅",
      isDone:false
    },
    {
      id: 2,
      title: "redux를 배워봅시다.",
      body:"화이팅",
      isDone:false
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
      case DELETE_TODO:
        return{
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),

        }
      
      
    default:
      return state;
  }
};

export default todos;