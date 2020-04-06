import React, { FC, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

interface WordTabProps {
  label: string;
  value: string;
  onActive?: any;
}

const WordTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: theme.typography.pxToRem(54),
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'none',
      minWidth: 'max-content',
      padding: '0 .75em',
    },
  })
)((props: WordTabProps) => <Tab disableRipple {...props} />);

export { WordTab };
