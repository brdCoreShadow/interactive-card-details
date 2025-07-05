import * as SC from "./CardDataStyled";

import { useFormik } from "formik";
import { validationCardSchema } from "@/utils/validation";
import { FormEvent } from "react";
import { CardDataType } from "@/App";

type Props = {
  handleCardData: (data: CardDataType | null) => void;
};

const CardData: React.FC<Props> = ({ handleCardData }) => {
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
    handleCardData(formik.values);
  };

  return (
    <SC.CardDataCon>
      <form action="submi" onSubmit={handleSubmit}>
        <div>
          <SC.HolderCon>
            <label htmlFor="holderName">
              <span>cardholder name</span>
              <input
                type="text"
                name="holderName"
                id="holderName"
                placeholder="e.g. Jane Appleseed"
                onChange={formik.handleChange}
              />
            </label>
          </SC.HolderCon>
          <SC.CardNumberCon>
            <label htmlFor="cardNumber">
              <span>card number</span>
              <input
                type="text"
                name="cardNumber"
                placeholder="e.g. 1234 5678 9123 0000"
                onChange={formik.handleChange}
              />
            </label>
          </SC.CardNumberCon>
          <SC.CardDataConFlex>
            <SC.MonthYearCon>
              <label htmlFor="month">
                <span>exp. date</span>
              </label>
              <input
                type="text"
                name="month"
                placeholder="MM"
                onChange={formik.handleChange}
              />
            </SC.MonthYearCon>
            <SC.MonthYearCon>
              <label htmlFor="year">
                <span>(mm/yy)</span>
                <input
                  type="text"
                  name="year"
                  placeholder="YY"
                  onChange={formik.handleChange}
                />
              </label>
            </SC.MonthYearCon>
            <SC.CVCCon>
              <label htmlFor="cvc">
                <span>cvc</span>
                <input
                  type="text"
                  name="cvc"
                  placeholder="e.g. 123"
                  onChange={formik.handleChange}
                />
              </label>
            </SC.CVCCon>
          </SC.CardDataConFlex>
        </div>
        <SC.SubmitBtn type="submit">Confirm</SC.SubmitBtn>
      </form>
    </SC.CardDataCon>
  );
};

export default CardData;
