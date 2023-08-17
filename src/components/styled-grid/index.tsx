import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

export const StyledGrid = styled(DataGrid)(({ theme }: { theme: Theme }) => ({
  '& ::-webkit-scrollbar': {
    width: '10px',
    height: '10px'
  },
  '& ::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.grey[100]
  },
  '& ::-webkit-scrollbar-track:hover': {
    backgroundColor: theme.palette.grey[300]
  },
  '& ::-webkit-scrollbar-thumb': {
    borderRadius: '10px',
    boxShadow: 'inset 0 0 10px rgba(0,0,0,.5)',
    backgroundColor: theme.palette.grey[100]
  },
  // OTHER
  borderRadius: '10px',
  borderBottom: '2.5px solid #E5E5E5',
  // make pagination at bottom of grid height smaller
  '& .MuiDataGrid-footerContainer': {
    display: 'flex',
    minHeight: '50px !important',
    maxHeight: '50px !important'
  },
  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: theme.palette.primary.main,
    '&:hover': { backgroundColor: theme.palette.primary.light },
    color: theme.palette.primary.contrastText,
    fontSize: '15px',
    fontWeight: 'bold',
    // remove padding at top and bottom of grid
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      paddingTop: '0px !important',
      paddingBottom: '0px !important',
      marginTop: '0px !important'
    },
    marginBottom: '0px !important'
  },
  '& .MuiDataGrid-root': {
    border: '1px solid',
    borderColor: theme.palette.primary.light,
    borderRadius: '4px'
  },
  '& .MuiDataGrid-cellContent': {
    fontSize: '15px',
    color: theme.palette.text.secondary
  }
}));


export const GridStyledComponent = (props: any) => {
  return <StyledGrid {...props} />;
};