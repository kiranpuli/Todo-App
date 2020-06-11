import  axios from 'axios'

export const getItems = ()=>(dispatch)=>{
    dispatch(itemsLoading())
    axios
        .get("/api/items")
        .then(res=>
            dispatch({
                type:"GET_ITEMS",
                payload:res.data
            })
            )
}
export const addItems = (item)=>(dispatch)=>{
    axios
        .post("/api/items",item)
        .then(res=>dispatch({
            type:"ADD_ITEMS",
            payload:res.data
        }))
}

export const delItems = (id)=>(dispatch)=>{
    axios
        .delete(`/api/items/${id}`)
        .then(res=>dispatch({
            type:"DEL_ITEMS",
            payload:id
        }))
}

const itemsLoading = ()=>{
    return{
        type:"ITEMS_LOADING"
    }
}

