import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStylesBase = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    overrides: {
      "& .MuiTypography-h1": {
        fontSize: 23,
      },
    },
    height: {
      height: "100vh",
    },
  })
);
