import { PropsItems } from "@/component/Items";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeDataProduct = {
    name: string,
    des?: string,
    url: []
}

type appState = {
    dataProduct: PropsItems[];
    dataProductProduct: TypeDataProduct[];
};

const initialState: appState = {
    dataProduct: [],
    dataProductProduct: [],
};

export const appStateSlice = createSlice({
    name: "productState",
    initialState,
    reducers: {
        setDataProduct: (state, action: PayloadAction<PropsItems[]>) => {
            state.dataProduct = action.payload;
        },
        setDataProductProduct: (state, action: PayloadAction<TypeDataProduct[]|any>) => {
            state.dataProductProduct = action.payload;
        },
    }
});

export const {
    setDataProduct,
    setDataProductProduct
} = appStateSlice.actions;

export default appStateSlice.reducer;