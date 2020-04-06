import React, { FC, Fragment } from 'react';
import Box from '@material-ui/core/Box';

import { MainPanel } from './MainPanel/MainPanel';
import { SidePanel } from './SidePanel/SidePanel';
import { SecondaryPanel } from './SecondaryPanel/SecondaryPanel';

import { useKeyboard } from '../../hooks/useKeyboard';

const Keyboard: FC = () => {
  const { secondary } = useKeyboard();
  return (
    <Box display="flex" overflow="auto">
      {secondary ? (
        <SecondaryPanel />
      ) : (
        <Fragment>
          <MainPanel />
          <SidePanel />
        </Fragment>
      )}
    </Box>
  );
};

export { Keyboard };
