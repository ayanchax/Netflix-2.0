import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    status: 'idle',
};

 

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions 
    // reducers are methods inside createSlice toolkit of redux. createSlice method is the entry point in every slice of a redux managed app
    // with every reducer slice, we push value from our components to the corresponding slice
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            
        },
        logout: (state) => {
            state.user = null
        }
    },

});

export const {login, logout} = userSlice.actions
// with selector we access reducer values in our components from the corresponding slice
export const selectUser =(state)=> state.user.user
export default userSlice.reducer;