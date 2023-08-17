import React from 'react';
import Grid from '@mui/material/Grid';
import { FieldConfig } from '../DynamicForm';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateValidationError } from '@mui/x-date-pickers/models';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
type Props = {
    field: FieldConfig;
    formik: any;
    parent?:FieldConfig;
};

const FormikDatePicker = ({parent, field, formik }: Props) => {
    const [dateError, setDateError] = React.useState<DateValidationError | null>(null);

    const handleDateChange = (date: any) => {
        const dateString = date.toISOString();
        formik.setFieldValue(parent ? `${parent.name}.${field.name}` : field.name, dateString);
        formik.setFieldTouched(parent ? `${parent.name}.${field.name}` : field.name, true);
    };

    return (
        <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label={field.label}
                
                value={formik.values[parent ? `${parent.name}.${field.name}` : field.name]}
                onChange={handleDateChange}
                onError={(newError) => setDateError(newError)}
                slotProps={{
                    textField: {
                        helperText: dateError && formik.touched[parent ? `${parent.name}.${field.name}` : field.name] && formik.errors[parent ? `${parent.name}.${field.name}` : field.name]
                            ? "Date field is required."
                            : null,
                    },
                }}
            />
            </LocalizationProvider>
        </Grid>
    );
}


export default FormikDatePicker;
