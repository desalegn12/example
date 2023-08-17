import React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { FieldConfig } from '../DynamicForm';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

type SchemaItemProps = {
    schemaItem: any;
    fieldPath: string;
    index: number;
    field: FieldConfig;
    formik: any;
    handleRemoveSchemaItem: (index: number) => void;
};

const SchemaItem = ({
    schemaItem,
    fieldPath,
    field,
    index,
    formik,
    handleRemoveSchemaItem
}: SchemaItemProps) => {
    return (
        <Stack direction="row" spacing={2} mb={2} alignItems="center">
            <IconButton
                aria-label="delete"
                onClick={() => handleRemoveSchemaItem(index)}
            >
                <DeleteIcon />
            </IconButton>

            <TextField
                label="Name"
                name={`${fieldPath}.name`}
                value={schemaItem.name || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ width: '100%' }}
                // need to add error handling
            />
            <TextField
                label="Label"
                name={`${fieldPath}.label`}
                value={schemaItem.label || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ width: '100%' }}
                // need to add error handling
            />
            <TextField
                label="Data Source"
                name={`${fieldPath}.source`}
                value={schemaItem.source || ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                sx={{ width: '100%' }}
                // need to add error handling
            />
            <Box sx={{ width: '100%' }}>
                <Autocomplete
                    value={schemaItem.type || ''}
                    options={["date", "string", "number"]}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Type"
                        />
                    )}
                    onChange={(event, newValue) => {
                        formik.setFieldValue(`${fieldPath}.type`, newValue);
                    }}
                    // need to add error handling
                />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Autocomplete
                    value={schemaItem.defaultAggregation || ''}
                    options={["count", "sum", "avg"]}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Default Aggregation" 
                        />
                    )}
                    onChange={(event, newValue) => {
                        formik.setFieldValue(`${field.name}.schema[${index}].defaultAggregation`, newValue);
                    }}
                    // need to add error handling
                />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Autocomplete
                    value={schemaItem.format || ''}
                    options={["YYYY-MM-DD", "YYYY-MM", "YYYY-WW", "number", "currency"]}
                    renderInput={(params) => (
                        <TextField 
                            {...params} 
                            label="Format"
                        />
                    )}
                    onChange={(event, newValue) => {
                        formik.setFieldValue(`${field.name}.schema[${index}].format`, newValue);
                    }}
                    // need to add error handling
                />
            </Box>
        </Stack>
    );
};


type Props = {
    field: FieldConfig;
    formik: any;
};

const FormikSchemaItems = ({ field, formik }: Props) => {
    const handleAddSchemaItem = () => {
        const newSchemaItem = {
            defaultAggregaton: '',
            name: '',
            label: '',
            type: '',
            format: '',
            description: '',
            source: ''
        };
        
        // Get the existing schemaList array or initialize it as an empty array
        const existingSchemaList = formik.values[field.name] || [];
        
        // Append the new schema item to the array
        const updatedSchema = [...existingSchemaList, newSchemaItem];

        // Set the updated schemaList array directly
        formik.setFieldValue(field.name, updatedSchema);
    };

    const handleRemoveSchemaItem = (index: number) => {
        const updatedSchema = [...formik.values[field.name]?.schema];
        updatedSchema.splice(index, 1);

        // Directly set the schemaList field value as an array
        formik.setFieldValue(field.name, updatedSchema);
    };

    // Add an empty schema item when the component loads
    const hasFirstItemBeenAdded = React.useRef(false);
    React.useEffect(() => {
        if (!hasFirstItemBeenAdded.current) {
            hasFirstItemBeenAdded.current = true;
            handleAddSchemaItem();
        }
    }, []);

    return (
        <Grid item xs={12}>
            <Stack direction="row" mb={2}>
                <Typography variant="h6">Schema Item List</Typography>
                <Box flexGrow={1} />
                <Button 
                    onClick={handleAddSchemaItem}
                    variant="contained"
                    color="primary"
                >
                    <AddCircleOutlineIcon sx={{ mr: 1 }} />
                    Add Schema Item
                </Button>
            </Stack>
            {(formik.values[field.name] || []).map((schemaItem: any, index: number) => (
                <SchemaItem
                    key={index}
                    schemaItem={schemaItem}
                    fieldPath={`${field.name}[${index}]`}
                    field={field}
                    index={index}
                    formik={formik}
                    handleRemoveSchemaItem={handleRemoveSchemaItem}
                />
            ))}
        </Grid>
    );
};

export default FormikSchemaItems;



