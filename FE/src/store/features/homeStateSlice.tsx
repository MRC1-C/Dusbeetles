import { PropsItems } from "@/component/Items";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeDataProduct = {
    name: string,
    des: string,
    url: []
}

type appState = {
    dataHome: PropsItems[];
    dataProductHome: TypeDataProduct[];
};

const initialState: appState = {
    dataHome: [],
    dataProductHome: [],
};

export const appStateSlice = createSlice({
    name: "homeState",
    initialState,
    reducers: {
        setDataHome: (state, action: PayloadAction<PropsItems[]>) => {
            state.dataHome = action.payload;
        },
        setDataProductHome: (state, action: PayloadAction<TypeDataProduct[]| any>) => {
            state.dataProductHome = action.payload;
        },
    }
});

export const {
    setDataHome,
    setDataProductHome
} = appStateSlice.actions;

export default appStateSlice.reducer;