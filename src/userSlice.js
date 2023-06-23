import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        name:"userName",
        email:"",
        token:""
    },
    reducers:{
        changeName:(state,action) =>{
            state.name = action.payload.name
        },
        loginAccount:(state)=>{

        },
        signupAccount:(state) =>{

        }
    },
    extraReducers:{

    }
})


export const {
    loginAccount,signupAccount,
    changeName
} = userSlice.actions


export const userReducer= userSlice.reducer