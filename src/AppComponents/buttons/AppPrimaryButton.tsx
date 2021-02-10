import React from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  fade,
} from "@material-ui/core/styles";
import { Button, SvgIconProps } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
      height: 40,
      "&:hover": {
        backgroundColor: fade(theme.palette.primary.main, 0.5),
      },
    },
  })
);

interface AppPrimaryButtonProps {
  className?: string;
  icon?: React.ReactElement<SvgIconProps>;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  to?: string;
  children: React.ReactNode;
}

export default function AppPrimaryButton({
  className,
  icon,
  type,
  onClick,
  to,
  children,
}: AppPrimaryButtonProps) {
  const classes = useStyles();

  return (
    <Button
      disableElevation
      type={type}
      fullWidth
      variant="contained"
      className={clsx(classes.button, className)}
      startIcon={icon}
      onClick={onClick}
      component={to ? Link : Button}
      to={to}
    >
      {children}
    </Button>
  );
}
