import React from "react";
import Grid from "@mui/material/Grid";
import { FieldConfig } from "../DynamicForm";
import { Field } from "formik";
import { Checkbox, FormControl, FormControlLabel } from "@mui/material";

type Props = {
  field: FieldConfig;
  formik: any;
  parent?: FieldConfig;
};

const FormikCheckBox = ({ field, formik }: Props) => {
  const names = field.name.split(".");
  let fieldValue = formik.values;

  if (formik.values) {
    if (names.length > 0) {
      names.forEach((element) => {
        if (fieldValue && fieldValue[element] !== undefined) {
          fieldValue = fieldValue[element];
        } else {
          fieldValue = false;
        }
      });
    }
  }
  return (
    <Grid item xs={6} sm={3}>
      <FormControlLabel
        label={field.label}
        control={
          <Checkbox
            defaultChecked={false}
            name={field.name}
            value={formik.values[field.name] == "on" ?? fieldValue}
            onChange={formik.handleChange}
            checked={formik.values[field.name] ?? fieldValue}
          />
        }
      />
    </Grid>
  );
};

export default FormikCheckBox;
