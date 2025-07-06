import * as Yup from "yup";

export const validationCardSchema = Yup.object().shape({
  holderName: Yup.string()
    .min(2, "Too short")
    .required("Can't be the blank field"),
  cardNumber: Yup.string()
    .transform((value) => value.replace(/\s+/g, ""))
    .matches(/^\d+$/, "Wrong format, numbers only")
    .length(16, "Card number must be exactly 16 digits")
    .required("Can't be the blank field"),
month: Yup.number()
  .transform((value, originalValue) =>
    originalValue === "" ? undefined : value
  )
  .typeError("Must be a number")
  .min(1, "Month must be between 1 and 12")
  .max(12, "Month must be between 1 and 12")
  .required("Can't be blank"),


  year: Yup.number()
  .transform((value, originalValue) => (originalValue === "" ? undefined : value))
  .typeError("Must be a number")
  .min(25, "Year must be 25 or later")
  .required("Can't be blank"),

cvc: Yup.number()
  .transform((value, originalValue) => (originalValue === "" ? undefined : value))
  .typeError("Must be a number")
  .required("Can't be blank"),

});
