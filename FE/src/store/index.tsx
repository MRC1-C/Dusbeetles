import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "@/store/features/appStateSlice";
import homeStateSlice from "./features/homeStateSlice";
import aboutStateSlice from "./features/aboutStateSlice";
import productStateSlice from "./features/productStateSlice";
import caseStateSlice from "./features/caseStateSlice";
import servicesStateSlice from "./features/servicesStateSlice";

export const store = configureStore({
  reducer: {
    appState: appStateSlice,
    homeState: homeStateSlice,
    aboutState: aboutStateSlice,
    productState: productStateSlice,
    caseState: caseStateSlice,
    servicesState: servicesStateSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;