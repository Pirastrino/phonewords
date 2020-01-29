import React, { FC } from 'react';
import Tab from '@material-ui/core/Tab';
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

interface WordTabProps {
  label: string;
}

const WordTab = withStyles((theme: Theme) =>
  createStyles({ root: { color: theme.palette.text.primary } })
)((props: WordTabProps) => <Tab disableRipple {...props} />);

export { WordTab };
