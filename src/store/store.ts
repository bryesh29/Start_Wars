import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import CharacterStore from "./stores/character.store";

const reducer = {
  CharacterStore,
};

const store = configureStore({
  reducer,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
