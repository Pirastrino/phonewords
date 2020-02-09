import React, { FC, ChangeEvent } from 'react';
import Tab from '@material-ui/core/Tab';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

// import { useMessage } from '../../hooks/useMessage';

interface WordTabProps {
  label: string;
  value: string;
  onActive?: any;
}

const WordTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'none',
      minWidth: 'max-content',
      padding: `0 0.5rem`,
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  })
)((props: WordTabProps) => <Tab disableRipple {...props} />);

export { WordTab };
