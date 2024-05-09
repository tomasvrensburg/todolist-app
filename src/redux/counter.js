import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { content: "Walk the dog", description: "Take the dog for a walk to park", completed: false },
    { content: "Do Laundry", description: "", completed: false },
  ],
  displayEditModal: false,
  itemToEdit: null,
}

export const counterSlice = createSlice({

  name: 'counter',
  initialState,
  reducers: {
    add: (state) => {
      state.list.push(
        { content: "New Item", description: "", completed: false }
      )
    },
    remove: (state, action) => {
      state.list.splice(action.payload, 1)
    },
    edit: (state, action) => {
      state.itemToEdit = action.payload;
      state.displayEditModal = !state.displayEditModal;
    },
    complete: (state, action) => {
      state.list[action.payload].completed = true;
    },
    close: (state) => {
      state.displayEditModal = false;
    },
    changeName: (state, action) => {
      const { index, name } = action.payload;
      state.list[index].content = name;
    },
    changeDescription: (state, action) => {
      const { index, description } = action.payload;
      state.list[index].description = description;
    }
  },
})

export const { add, remove, edit, complete, close, changeName, changeDescription } = counterSlice.actions

export default counterSlice.reducer