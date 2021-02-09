import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ICharacter } from "../../models/character.model";

export const getAll = createAsyncThunk(
  "Character/get",
  async (): Promise<ICharacter[]> => {
    const endpoint = `${process.env.PUBLIC_URL}/data/characters.json`;

    const response: AxiosResponse<ICharacter[]> = await axios.get(endpoint);

    return response.data;
  }
);
