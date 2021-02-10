import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import AppPrimaryButton from "../AppComponents/buttons/AppPrimaryButton";
import { ICharacter } from "../models/character.model";
import { IParams } from "../models/params.model";
import { useSelector } from "react-redux";

export default function Character() {
  const { id }: IParams = useParams();

  const { characterError, character, characterLoading } = useSelector(
    (state: any) => state.CharacterStore
  );

  console.log("id: ", id);

  return (
    <>
      <Paper>
        {character.map((d: ICharacter) => {
          if (d.id === id) {
            return (
              <div>
                <Typography variant="h1">{d.name}</Typography>
                <Typography variant="body1">{d.description}</Typography>
              </div>
            );
          }
        })}
      </Paper>
      <AppPrimaryButton to="/">Back</AppPrimaryButton>
    </>
  );
}
