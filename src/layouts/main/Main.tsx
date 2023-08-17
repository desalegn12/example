// @mui
import { Box, BoxProps } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';


export const HEADER = {
  H_MOBILE: 65,
  H_MAIN_DESKTOP: 65,
  // H_MAIN_DESKTOP_OFFSET: 65 - 6,
};

export const NAV = {
  W_BASE: 260,
  W_MAIN: 225,
  W_MAIN_MINI: 90,
  //
  H_NAV_ITEM: 48,
  H_NAV_ITEM_SUB: 36,
  //
  H_ITEM_HORIZONTAL: 32,
};

const SPACING = 2;

export default function Main({ children, sx, ...other }: BoxProps) {
  // const { themeLayout } = useSettingsContext();
  // const isNavMini = themeLayout === 'mini';
  const isDesktop = useResponsive('up', 'lg');

  const styles = {
    flexGrow: 1,
    py: `${HEADER.H_MOBILE + SPACING}px`,
    ...(isDesktop && {
      px: 2,
      py: `${HEADER.H_MAIN_DESKTOP + SPACING}px`,
      width: `calc(100% - ${NAV.W_MAIN}px)`,
      // ...(isNavMini && {
      //   width: `calc(100% - ${NAV.W_MAIN_MINI}px)`,
      // }),
    }),
    ...sx,
  }

  return (
    <Box
      component="main"
      sx={styles}
      {...other}
    >
      {children}
    </Box>
  );
}
