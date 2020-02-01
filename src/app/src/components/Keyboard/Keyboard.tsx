import React, { FC } from 'react';
import Box from '@material-ui/core/Box';

// import { useKeyboard } from '../../hooks/useKeyboard';
import { MainPanel } from './MainPanel/MainPanel';
import { SidePanel } from './SidePanel/SidePanel';

const Keyboard: FC = () => {
  return (
    <Box display="flex">
      <MainPanel />
      <SidePanel />
    </Box>
  );
};

export { Keyboard };
