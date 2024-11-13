import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos:[],
   
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.todos.push({id:state.todos.length+1,text:action.payload.target[0].value,isDone:false})
        },
        done:(state,action)=>{
                state.todos = state.todos.map((el)=>{
                    if(action.payload === el.id){
                        return {...el,isDone:!el.isDone}
                    }
                    else{
                        return el
                    }
                })
        },
        del:(state,action)=>{
            state.todos = state.todos.filter((el)=>{
                return el.id !==action.payload
            })
        }
    }
})

export const {add,done,del} = todoSlice.actions

export default todoSlice.reducer
