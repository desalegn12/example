import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, MenuItem } from '@mui/material';
// react-router-dom
import { useNavigate } from 'react-router-dom';
// auth
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useLogout } from "../../../hooks/useLogout";
// components
import { CustomAvatar } from './custom-avatar';
import MenuPopover from './menu-popover';
import IconButton from '@mui/material/IconButton';


export default function AccountPopover() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const [openPopover, setOpenPopover] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setOpenPopover(event.currentTarget);
  };

  const handleClosePopover = () => {
    setOpenPopover(null);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      handleClosePopover();
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <IconButton
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          ...(openPopover && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <CustomAvatar 
          src={user?.photoURL} 
          alt={user?.displayName} 
          name={user?.displayName} 
          sx={{ width: 38, height: 38 }} 
        />
      </IconButton>

      <MenuPopover open={openPopover} onClose={handleClosePopover} sx={{ width: 200, p: 0 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
