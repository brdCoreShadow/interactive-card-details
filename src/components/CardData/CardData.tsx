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

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(formik.values);
  };

  return (
    <SC.CardDataCon>
      <form action="submi" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="holderName">
            <span>cardholder name</span>
            <input
              type="text"
              name="holderName"
              id="holderName"
              placeholder="e.g. Jane Appleseed"
            />
          </label>
          <div>
            <label htmlFor="cardNumber">
              <span>card number</span>
              <input
                type="text"
                name="cardNumber"
                placeholder="e.g. 1234 5678 9123 0000"
              />
            </label>
          </div>
          <div>
            <div>
                <label htmlFor="month"><span>exp. date</span></label>
                <input type="text" name="month" placeholder="MM"/>
            </div>
            <div>
                <label htmlFor="year">
                    <span>"(mm/yy)"</span>
                    <input type="text" name="year" placeholder="YY"/>
                </label>
            </div>
            <div>
                <label htmlFor="cvc">
                    <span>cvc</span>
                    <input type="text" name="cvc" placeholder="e.g. 123"/>
                </label>
            </div>
          </div>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </SC.CardDataCon>
  );
};

export default CardData;
