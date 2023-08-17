import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FieldConfig } from "../DynamicForm";

type Props = {
  field: FieldConfig;
  formik: any;
  dataModel: any[] | undefined;
  parent?: FieldConfig;
};

const FormikAutocomplete = ({ parent, field, formik, dataModel }: Props) => {
  // If "type" exists in an item, filter by field.name that matches the "type".
  // If "type" does not exist in an item, include that item in the result.
  // Else, return all options.

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
  let options: any[];
  if (Array.isArray(dataModel)) {
    options = dataModel
      ? dataModel.filter((item) =>
          item.type ? field.name.includes(item.type) : true
        )
      : [];
  } else {
    options = [];
    dataModel as unknown as Object;
    options = dataModel
      ? (dataModel[field.source!] as any[]).filter((item) =>
          item.type ? field.name.includes(item.type) : true
        )
      : [];
  }
  if (options) {
    return (
      <Grid item xs={12} md={6}>
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.label ?? ""}
          onChange={(_, newValue) =>
            formik.setFieldValue(field.name, newValue?.name || "")
          }
          isOptionEqualToValue={(option, value) => option.name === value}
          value={
            (Array.isArray(formik.values[field.name])
              ? formik.values[field.name]
              : [fieldValue] ?? [options[0].name]
            ).map((value: string) => {
              const val = options.find((option) => option.name === value);
              return val ? val : options[0]; // Return val directly, not val[0]
            })[0] || options[0]
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label={field.label}
              onBlur={formik.handleBlur}
              error={formik.touched[`${field.name}`] && Boolean(formik.errors[`${field.name}`])}
              helperText={formik.touched[`${field.name}`] && formik.errors[`${field.name}`]}
            />
          )}
        />
      </Grid>
    );
  }
  return null;
};

export default FormikAutocomplete;
