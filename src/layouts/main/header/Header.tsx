// @mui
import { useTheme } from '@mui/material/styles';
import { Stack, AppBar, Toolbar, IconButton } from '@mui/material';
//
import AccountPopover from './AccountPopover';


// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
};

const HEADER = {
  H_MOBILE: 65,
  H_MAIN_DESKTOP: 65,
  // H_MAIN_DESKTOP_OFFSET: 65 - 6,
};

export default function Header({ onOpenNav }: Props) {
  const theme = useTheme();
  const renderContent = (
    <>
      {/* <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
        <Iconify icon="eva:menu-2-fill" />
      </IconButton> */}

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1.5 }}
        sx={{ mr: 2 }}
      >
        <AccountPopover />
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
      }}
    >
      <Toolbar sx={{ px: { lg: 5 } }}>
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
