const initState = {
    items:[],
    loading:false
}

const itemReducer = (state=initState,{type,payload})=>{
    switch(type){
        case "GET_ITEMS":
            return{
                ...state,
                items:payload,
                loading:false
            }
        case "ADD_ITEMS":
            let newItems = state.items
            newItems.push(payload)
            return{
                ...state,
                items:newItems
            }
        case "DEL_ITEMS":
            let newItems1=state.items.filter(i=>i._id!==payload)
            return{
                ...state,
                items:newItems1
            }
        case "ITEMS_LOADING":
            return{
                ...state,
                loading:true
            }
        default:
            return state
    }
}

export default itemReducer