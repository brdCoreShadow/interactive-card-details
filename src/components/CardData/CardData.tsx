import * as SC from "./CardDataStyled";

import { useFormik } from "formik";
import { validationCardSchema } from "@/utils/validation";
import { FormEvent } from "react";

const CardData: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      holderName: "gop vsevolodych",
      cardNumber: "000000000000",
      month: 7,
      year: 26,
      cvc: 888,
    },
    validationSchema: validationCardSchema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  const handleSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(formik.values);
  };

  return <SC.CardDataCon>
    <form action="submi" onSubmit={handleSubmit}>
        
    </form>
  </SC.CardDataCon>;
};

export default CardData;
