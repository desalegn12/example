import * as Yup from "yup";
import { FormConfig, DataModelItem } from "./DynamicForm";

type YupValidator =
  | Yup.StringSchema
  | Yup.NumberSchema
  | Yup.DateSchema
  | Yup.ArraySchema<any[] | undefined, any, undefined, "">;

const generateValidationSchema = (
  config: FormConfig,
  dataModel?: DataModelItem[]
) => {
  return config.fields.reduce(function validate(acc: any, field): any {
    let validator: YupValidator;
    if (!Array.isArray(field)) {
      switch (field.dataType) {
        case "number":
          validator = Yup.number();
          break;
        case "date":
          validator = Yup.date();
          break;
        case "array":
          validator = Yup.array();
          break;
        default:
          validator = Yup.string();
          break;
      }

      if (field.validation) {
        for (const [condition, message] of Object.entries(field.validation)) {
          switch (condition) {
            case "required":
              validator = validator.required(message);
              break;
            case "email":
              if (validator instanceof Yup.StringSchema) {
                validator = validator.email(message);
              } else {
                throw new Error(
                  "Trying to apply email validation to a non-string field"
                );
              }
              break;
            case "dashboards":
            case "dimension":
            case "metric":
              if (dataModel) {
                const options = dataModel
                  ? dataModel
                      .filter((item) =>
                        item.type ? field.name.includes(item.type) : true
                      )
                      .map((item) => item.name)
                  : [];
                if (validator instanceof Yup.ArraySchema) {
                  // couldn't figure out the below type error with "validator" based on the "Yup.ArraySchema" type
                  // @ts-ignore
                  validator = validator.of(
                    Yup.string().oneOf(options, message)
                  );
                } else {
                  throw new Error(
                    `Trying to apply oneOf validation to a non-array field for condition: ${condition}`
                  );
                }
              }
              break;
            default:
              throw new Error(`Unknown validation condition: ${condition}`);
          }
        }
        acc[field.name] = validator;
      }
    } 
    else if(field.fieldType!="Lable") {
      
        const nestedValidators = field.map((element) => validate({}, element));
  
        acc= {
          ...acc,
          ...nestedValidators.reduce((merged, validatorObj) => {
            return { ...merged, ...validatorObj };
          }, {}),
        };

      }else{
        validate(acc, field)
      }
      
    return acc;
  }, {});
};

export default generateValidationSchema;
