import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ICharacter } from "../models/character.model";
import { getAll } from "../store/thunks/character.thunks";
import { useStylesBase } from "../styles/stylesBase";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Typography } from "@material-ui/core";
import AppCard from "../layout/Card";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function AllCharacters() {
  const classes = useStyles();
  const classesBase = useStylesBase();

  const { characterError, character, characterLoading } = useSelector(
    (state: any) => state.CharacterStore
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    // <div>
    //   <h1>All characters</h1>
    //   {character.map((c: ICharacter) => (
    //     <div>{c.name}</div>
    //   ))}
    // </div>
    <Container>
      <Grid
        container
        className={clsx(classes.root, classesBase.height)}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h1">All Characters</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={3}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {character.map((c: ICharacter) => (
            <Grid item xs={3}>
              <AppCard id={c.id} name={c.name} description={c.description} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}
