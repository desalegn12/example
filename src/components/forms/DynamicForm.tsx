import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import generateValidationSchema from "./generateValidationSchema";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  FormikDatePicker,
  FormikAutocomplete,
  FormikTextField,
  FormikMultiAutocomplete,
  FormikSchemaItems,
} from "./inputs";
import FormikCheckBox from "./inputs/FormikCheckBox";
import { Typography } from "@mui/material";

type ValidationConfig = {
  required?: string;
  email?: string;
  dimension?: string;
  metric?: string;
};

type FieldTypes =
  | "TextField"
  | "Autocomplete"
  | "MultiAutocomplete"
  | "DatePicker"
  | "SchemaItems"
  | "Checkbox"
  | "Lable"
  | "hidden";
  

export type FieldConfig = {
  name: string;
  label: string;
  dataType: "string" | "number" | "date" | "array";
  fieldType: FieldTypes;
  validation?: ValidationConfig;
  source?: string; // This will be the filename (without .json) containing the options for Autocomplete fields
  defaultValue?: string;
};

export type FormConfig = {
  fields: FieldConfig[];
};

export type DataModelItem = {
  type: "dimension" | "metric" | string;
  name: string;
};

type DynamicFormProps = {
  config: FormConfig;
  onSubmit: (values: Record<string, string>) => void;
  dataModel?: DataModelItem[];
  // below items are only passed if "Edit" mode
  initialValues?: Record<string, string> | undefined;
  isEditMode?: boolean | undefined;
};

const DynamicForm = ({
  config,
  dataModel,
  onSubmit,
  initialValues,
  isEditMode,
}: DynamicFormProps): JSX.Element => {
  const validationSchema = generateValidationSchema(config, dataModel);
  // set select default values as needed
  config.fields.forEach((field) => {
    if (field.name === "createdAt") {
      field.defaultValue = new Date().toISOString();
    }
  });
  // function test(config, initial = {}) {
  //   let initialValues;
  //   initialValues = config.fields.reduce((acc, field) => {
  //     if (Array.isArray(field)) {
  //       config.fields = field;
  //       return test(config, acc);
  //     }
  //     return { ...acc, [field.name]: field.defaultValue || "" };
  //   }, initial);
  //   return initialValues;
  // }

  const formik = useFormik({
    initialValues:
      initialValues || // Use provided initial values, or fallback to default
      config.fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: field.defaultValue || "" }),
        {}
      ),
    validationSchema: Yup.object().shape(validationSchema),
    onSubmit,
  });
  console.log(Yup.object().shape(validationSchema).isValidSync(formik.values))

  // console.log('Yup - validation schema:', validationSchema); // Logging the validation schema from Yup:
  // console.log('formik: ', formik); // Logging the entire formik object:
   console.log('formik.values: ', formik.values); // Values: The current values of all the fields in the form.
   console.log('formik.errors: ', formik.errors); // Errors: The current validation errors for each field.
  // console.log('formik.touched: ', formik.touched); // Touched: Tracks which fields have been touched/visited.
  // console.log('formik.isSubmitting: ', formik.isSubmitting);  // isSubmitting: A boolean indicating if the form is currently being submitted.

  return (
    <Card sx={{ p: 4 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {config.fields.map(function getElement(field): any {
            if (!Array.isArray(field)) {
              const finalDataModel =
                field.source !== undefined ? dataModel : undefined;

              switch (field.fieldType) {
                
                case "TextField":
                  return (
                    <FormikTextField
                      field={field}
                      formik={formik}
                      key={field.name}
                    />
                  );
                case "MultiAutocomplete":
                  return (
                    <FormikMultiAutocomplete
                      field={field}
                      formik={formik}
                      dataModel={finalDataModel}
                      key={field.name}
                    />
                  );
                case "Autocomplete":
                  return (
                    <FormikAutocomplete
                      field={field}
                      formik={formik}
                      dataModel={finalDataModel}
                      key={field.name}
                    />
                  );
                case "DatePicker":
                  return (
                    <FormikDatePicker
                      field={field}
                      formik={formik}
                      key={field.name}
                    />
                  );
                case "SchemaItems":
                  return (
                    <FormikSchemaItems
                      field={field}
                      formik={formik}
                      key={field.name}
                    />
                  );
                case "Checkbox":
                  return (
                    <FormikCheckBox
                      field={field}
                      formik={formik}
                      key={field.name}
                    />
                  );

                case "Lable":
                  return (
                    <Grid item xs={12} sm={12}>
                    <Typography component="h5" variant="h5">
                      {field.label}
                    </Typography>
                    </Grid>
                  )
                default:
                  return null;
              }
            } else {
              return <div>
                <Button 
                    onClick={()=>console.log("add implement")}
                    variant="contained"
                    color="primary"
                >
                    <AddCircleOutlineIcon sx={{ mr: 1 }} />
                    Add Schema Item
                </Button>
                <IconButton
                aria-label="delete"
                onClick={() => console.log("some delete")}
            >
                <DeleteIcon />
            </IconButton>
                {
                  field.map((element) => {
                    return getElement(element);
                  })
                }
              </div>
            }
          })}
        </Grid>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          disabled={formik.isSubmitting}
          sx={{ px: 10, py: 1.5 }}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default DynamicForm;
