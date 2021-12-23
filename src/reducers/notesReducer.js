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

const initialState={
    notes:[],
    active:null
}

export const notesReducer = (state = initialState, action)=>{
    switch (action.type) {
        default:
            return state;
    }
}