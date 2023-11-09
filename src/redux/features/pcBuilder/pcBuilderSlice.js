const { createSlice } = require("@reduxjs/toolkit");



export const pcBuilderSlice = createSlice({
    name:"pcBuilder",
    initialState:{
        itemCategories:[],
        sum: 0,
        fullFill: 0
        
    },
    reducers:{
        setCategories:(state,action) =>{
            const categories = action.payload.categories;
            const itemCategories = state.itemCategories;
            console.log(itemCategories);
            if(itemCategories.length==0){
                for(let i=0;i<categories.length;i++){
                    categories[i].productImage = "",
                    categories[i].productName = "",
                    categories[i].price = ""
                    categories[i].productId = "" 
                }
                state.itemCategories = categories
            }

        },
       addProduct:(state,action)=>{
        console.log(action.payload);
        const data = action.payload;
        const preData = state.itemCategories;
        let full = 0
        let sum = 0
            const newData = preData.map((item,index)=>{
                if (item.path === data?.category) {
                    item.productName = data?.productName;
                    item.price = data?.price;
                    item.productImage = data?.productImage;
                    item.productId = data?.productId;
                    sum = item.price;
                    if (index + 1 < 7) {
                        full = 1
                    }
                    return item
                }
                else {
                    return item
                }
            })
            state.fullFill = state.fullFill + full;
            state.sum = Number(Number(state.sum) + Number(Number(sum).toFixed(2))).toFixed(2);
            state.itemCategories = newData
       } ,
       removeProduct: (state, action) => {
        const data = action.payload;
        const preData = state.itemCategories;
        let full = 0
        let sum = 0
        const newData = preData.map((item, index) => {
            if (item.path === data?.category) {
                item.productName = "";
                sum = item.price
                item.price = "";
                item.productImage = "";
                item.productId = ""
                if (index + 1 < 7) {
                    full = 1
                }
                return item
            }
            else {
                return item
            }
        })

        state.fullFill = state.fullFill - full;
        state.sum = Number(Number(state.sum) - Number(Number(sum).toFixed(2))).toFixed(2);
        state.itemCategories = newData
    },
       resetCategories: (state) => {
        state.itemCategories = []
        state.sum = 0
        state.fullFill = 0
    }
    }
})

export const {setCategories,addProduct,resetCategories,removeProduct} = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;