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
  month: Yup.number().min(1).max(12).required("Can't be the blank field"),
  year: Yup.number().min(25).required("Can't be the blank field"),
  cvc: Yup.number().required("Can't be the blank field"),
});
