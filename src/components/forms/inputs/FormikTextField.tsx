import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { FieldConfig } from "../DynamicForm";
import { findLast } from "lodash";

type Props = {
  field: FieldConfig;
  formik: any;
};

const FormikTextField = ({ field, formik }: Props) => {
    const names = field.name.split(".");
    let fieldValue = formik.values;
    
    if (formik.values) {
      if (names.length > 0) {
        names.forEach((element) => {
          if (fieldValue && fieldValue[element] !== undefined) {
            fieldValue = fieldValue[element];
          } else {
            fieldValue = undefined;
          }
        });
      }
    }

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        name={field.name}
        label={field.label}
        value={formik.values[field.name]??fieldValue}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={(formik.values[field.name]??fieldValue)?false:Boolean(formik.errors[`${field.name}`])}
        helperText={formik.values[field.name]??fieldValue?'':formik.errors[`${field.name}`]}
        fullWidth
      />
    </Grid>
  );
};

export default FormikTextField;
