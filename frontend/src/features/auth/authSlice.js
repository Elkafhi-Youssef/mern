import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


// get user from localstorege

const user  = JSON.parse(localStorage.getItem('user'))
const initialState = {
    user:user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    messge:''
}

// Register user

export const register = createAsyncThunk('auth/register',async (user,thunkAPI)=>{
    try{
        return await authServise.register(user)
    }catch(error){
         
    }
}
)

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.messge = ''
        }
    },
    extraReducers:()=>{

    }

})
export const {reset} = authSlice.actions
export default authSlice.reducer