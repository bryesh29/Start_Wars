import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter, ICharacterState } from "../../models/character.model";
import { getAll } from "../thunks/character.thunks";

const characterInitialState: ICharacterState = {
  characterLoading: false,
  character: [],
  characterError: false,
};

const CharacterSlice = createSlice({
  name: "character",
  initialState: characterInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.rejected, (state: ICharacterState) => {
      state.characterLoading = false;
      state.characterError = true;
    });
    builder.addCase(getAll.pending, (state: ICharacterState) => {
      state.characterLoading = true;
      state.characterError = false;
    });
    builder.addCase(
      getAll.fulfilled,
      (state: ICharacterState, { payload }: PayloadAction<ICharacter[]>) => {
        state.characterLoading = false;
        state.character = payload;
      }
    );
  },
});

export default CharacterSlice.reducer;
