/*
{
    notes:[],
    active: null,
    active{
        id:'asdfgasdgawge5asdgw8g54s4g45gsd',
        title:'',
        body:'',
        imageUrl:'',
        date: 161563
    }
}
*/

import { types } from "../types/types";

const initialState={
    notes:[],
    active:null
}

export const notesReducer = (state = initialState, action)=>{
    switch (action.type) {
        case types.notesActive:
            return { 
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.notesLoad:
            return{
                ...state,
                notes: [...action.payload]
            }
        default:
            return state;
    }
}