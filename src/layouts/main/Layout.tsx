import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
//
import Main from './Main';
import Header from './header';

import { GlobalStateProvider } from '../../zustand-stores/GlobalStateProvider';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Header onOpenNav={handleOpen} />
      
      <Box
        sx={{
          display: { lg: 'flex' },
          maxWidth: 1700,
          margin: 'auto',
          mt: 1,
          minHeight: { lg: 1 }, // lg: 1 - means 100% height
        }}
      >
        <Main>{children}</Main>
      </Box>

    </>
  );
}
