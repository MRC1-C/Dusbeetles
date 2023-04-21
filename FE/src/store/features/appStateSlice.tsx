import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type appState = {
  appState: string;
  headerState: string[];
  currentHeader: string;
  headerProductState: string[];
  currentHeaderProduct: string;
};

const initialState: appState = {
  appState: "home",
  headerState: [],
  currentHeader: "",
  headerProductState: [],
  currentHeaderProduct: ""
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
    setHeaderState: (state, action: PayloadAction<string[]>) => {
      state.headerState = action.payload;
    },
    setHeaderProductState: (state, action: PayloadAction<string[]>) => {
      state.headerProductState = action.payload;
    },
    setCurrentHeaderState: (state, action: PayloadAction<string>) =>{
      state.currentHeader = action.payload
    },
    setCurrentHeaderProductState: (state, action: PayloadAction<string>) =>{
      state.currentHeaderProduct = action.payload
    }

  }
});

export const {
  setAppState,
  setHeaderState,
  setHeaderProductState,
  setCurrentHeaderState,
  setCurrentHeaderProductState
} = appStateSlice.actions;

export default appStateSlice.reducer;