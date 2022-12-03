import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn:{auth:false,who:""},
}

const loginSlice = createSlice({
    name:"checkUserLogin",
    initialState,
    reducers:{
        logout:(state,action)=>{
            state.loggedIn = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(middlewarReq.fulfilled,(state,action)=>{
            state.loggedIn = action.payload;
        })
        .addCase(middlewarReq.pending,(state)=>{
            state.loggedIn = false;
        })
        .addCase(middlewarReq.rejected,(state)=>{
            state.loggedIn = false;
        })
        
    }
});
export const {logout} = loginSlice.actions;
export default loginSlice.reducer;

export const middlewarReq = createAsyncThunk('user/check',async (token)=>{
    const res = await fetch("http://localhost:4000/verifyUserLogin",{
        method:"POST",
        headers:{
            'Authorization': token,
            "Content-Type":"application/json"
        },
        body:JSON.stringify({token})
    });
    const data = await res.json();
    return data;
})