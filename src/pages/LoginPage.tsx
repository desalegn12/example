import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginWithGoogle } from "../hooks/useLoginWithGoogle";
import { useAuthContext } from "../hooks/useAuthContext";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";


const THEME_PRIMARY = '#4285f4'
const THEME_ERROR = '#fde7e9'

const StyledSubHeading = styled(Typography)(({ theme }) => ({
  color: THEME_ERROR,
  textAlign: "center",
  margin: "0 auto",
  maxWidth: "700px",
  marginBottom: "1rem",
  marginTop: "1rem",
}));


const hrTextWrapper = {
  backgroundColor: "transparent !important",  
  maxWidth: 900,
  marginBottom: "1.5rem !important",
  margin: '0 auto'
};

const StyledButton = styled(Button)(({ theme }) => ({
  width: "100%",
  border: `1px solid ${THEME_PRIMARY}`,
  color: THEME_PRIMARY,
  textTransform: "none",
  '&:hover': {
    // backgroundColor: alpha(theme.palette.primary, 0.1),
    backgroundColor: alpha(THEME_PRIMARY, 0.1),
  },
  height: "40px",
  borderRadius: "25px",
  fontSize: "16px",
  fontWeight: "500",
  lineHeight: "25px",
  margin: '0 auto'
}));


export default function LoginPage() {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { error, isPending, loginWithGoogle } = useLoginWithGoogle();
  // const theme = useTheme();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    loginWithGoogle();
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" sx={{ minHeight: '100%' }}>
      <Box sx={{ width: '80%', py: 12 }} >
        <Box component="div" sx={hrTextWrapper}>
          <Divider sx={{ backgroundColor: "transparent" }}>
            <Chip label="Sign in." />
          </Divider>
        </Box>
        <Box component="div" sx={{maxWidth: 900, margin: '0 auto'}}>
          {!isPending && (
            <StyledButton onClick={handleSubmit} variant="outlined" sx={{ border: `1px solid ${THEME_PRIMARY}`}}>
              <Box sx={{ width: "18px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* <GoogleIcon sx={{color: theme.palette.primary.main }} /> */}
              </Box> 
              <Box sx={{ml: '10px !important', color: THEME_PRIMARY }}>
                Sign in with Google 
              </Box>
            </StyledButton>
          )}
          {isPending && (
            <StyledButton variant="outlined"  disabled>
              <Box sx={{ width: "18px", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* <GoogleIcon /> */}
              </Box>             
              <Box sx={{ml: '10px !important'}}>
                  Signing in with Google... 
              </Box>
            </StyledButton>
          )}
          {error && <StyledSubHeading>*{error}</StyledSubHeading>}
        </Box>
      </Box>
    </Stack>
  );
}
