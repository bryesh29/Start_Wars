import React from 'react';
import { createStyles, Theme, makeStyles, fade } from '@material-ui/core/styles';
import { Button, SvgIconProps } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.primary,
      height: 40,
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.dark, 0.5),
      },
    },
  })
);

interface AppSecondaryButton {
  className?: string;
  icon?: React.ReactElement<SvgIconProps>;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
  children: React.ReactNode;
}

export default function SecondaryButton({ className, icon, type, onClick, children }: AppSecondaryButton) {
  const classes = useStyles();

  return (
    <Button
      disableElevation
      type="submit"
      fullWidth
      onClick={onClick}
      variant="contained"
      className={clsx(classes.button, className)}
    >
      {children}
    </Button>
  );
}
