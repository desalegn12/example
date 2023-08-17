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

const FormikMultiAutocomplete = ({
  parent,
  field,
  formik,
  dataModel,
}: Props) => {
  // If "type" exists in an item, filter by field.name that matches the "type".
  // If "type" does not exist in an item, include that item in the result.
  // Else, return all options.
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
          getOptionLabel={(option) => option.label}
          multiple
          onChange={(_, newValues) => {
            formik.setFieldValue(
              parent ? `${parent.name}.${field.name}` : field.name,
              newValues.map((value) => value.name)
            );
          }}
          value={(Array.isArray(
            formik.values[parent ? `${parent.name}.${field.name}` : field.name]
          )
            ? formik.values[
                parent ? `${parent.name}.${field.name}` : field.name
              ]
            : []
          ).map((value: string) =>
            options.find((option) => option.name === value)
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={field.label}
              onBlur={formik.handleBlur}
              error={
                formik.touched[
                  parent ? `${parent.name}.${field.name}` : field.name
                ] &&
                Boolean(
                  formik.errors[
                    parent ? `${parent.name}.${field.name}` : field.name
                  ]
                )
              }
              helperText={
                formik.touched[
                  parent ? `${parent.name}.${field.name}` : field.name
                ] &&
                formik.errors[
                  parent ? `${parent.name}.${field.name}` : field.name
                ]
              }
            />
          )}
        />
      </Grid>
    );
  }
  return null;
};

export default FormikMultiAutocomplete;
