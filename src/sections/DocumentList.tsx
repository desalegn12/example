import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFirestoreQuery from '../hooks/useFirestoreQuery';
import { GridColDef } from '@mui/x-data-grid';
import { GridStyledComponent } from '../components/styled-grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { FIRESTORE_OPTIONS } from './config';
import { DocumentType } from '../@types';

type DataObject = { [key: string]: any };


const getColDefs = (data: DataObject[], docType: DocumentType, navigate: any): GridColDef[] => {
    if (!data || data.length === 0) return [];

    const sampleObject = data[0];  // take the first item to get the keys

    const generatedCols: GridColDef[] = Object.keys(sampleObject).map(key => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        headerAlign: 'center',
        align: 'center',
        width: 200  
    }));

    generatedCols.unshift({
        field: 'edit',
        headerName: '',
        renderCell: (params) => (
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => navigate(`/${docType}/edit/${params.id}`)}
                sx={{ width: 125, '&:hover': { boxShadow: 'none' } }}
            >
                Edit
            </Button>
        ),
        sortable: false,
        width: 250,
        headerAlign: 'center',
        align: 'center',
    });

    return generatedCols;
};

const DocumentList = () => {
    const [selectedCollection, setSelectedCollection] = useState<DocumentType>(FIRESTORE_OPTIONS[0].value);
    const { firestoreData } = useFirestoreQuery({ collectionId: selectedCollection });
    const navigate = useNavigate();

    const columns: GridColDef[] = getColDefs(firestoreData, selectedCollection, navigate);

    // remove "s" from the end of the selected collection
    const cleanSelectedCollection = selectedCollection.slice(0, -1);


    return (
        <Card sx={{ p: 4, my: 4 }}>
            <Typography variant="h3" component="h3">
                SEO Dashboard Admin
            </Typography>
            <Stack direction="row" spacing={2} sx={{ my: 2 }} alignItems="center">
                <Autocomplete
                    options={FIRESTORE_OPTIONS}
                    getOptionLabel={(option) => option.label}
                    defaultValue={FIRESTORE_OPTIONS[0]}
                    onChange={(event, newValue) => setSelectedCollection(newValue?.value || FIRESTORE_OPTIONS[0].value)}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Firestore Collection" 
                            variant="outlined"
                            sx={{ width: 250 }}
                            size="small"
                        />
                    )}
                />
                <Box sx={{ flexGrow: 1 }} />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => navigate(`/${selectedCollection}/new`)}
                    sx={{ width: 250, height: 40, '&:hover': { boxShadow: 'none' } }}
                >
                    New {cleanSelectedCollection}
                </Button>
            </Stack>
            <Box sx={{ height: 400, width: '100%' }}>
                <GridStyledComponent 
                    rows={firestoreData ? firestoreData : []}
                    columns={columns}
                    pageSize={25}
                    rowsPerPageOptions={[5, 25, 50, 100]}
                />
            </Box>
        </Card>
    );
}

export default DocumentList;
