import * as SC from "./CardResultStyled";

import cardLogo from "../../assets/images/card-logo.svg";
import { CardDataType } from "@/App";

type Props = {
  cardData: CardDataType | null;
};

const CardResult: React.FC<Props> = ({ cardData }) => {

  const {
  holderName = "JANE APPLESEED",
  cardNumber = "0000000000000000",
  month = "00",
  year = "00",
  cvc = "000"
} = cardData || {};


const cardNumberGroups =
    String(cardNumber).padEnd(16, "0").match(/.{1,4}/g) || ["0000", "0000", "0000", "0000"];
  

  return (
    <SC.CardResultCon>
      <div>
        <SC.BackCard>
          <p>{cvc ? cvc : "000"}</p>
        </SC.BackCard>
        <SC.FrontCard>
          <SC.CardThumbLogo>
            <img src={cardLogo} alt="cardLogo" />
          </SC.CardThumbLogo>
          <SC.CardNumberList>
           {cardNumberGroups.map((group, index) => (
              <li key={index}>{group}</li>
            ))}
          </SC.CardNumberList>
          <SC.CardDateAndOWnerCon>
            <p>{holderName ?holderName : "JANE APPLESEED"}</p>
            <p>
              {month ? month: "00"}/{year ? year : "00"}
            </p>
          </SC.CardDateAndOWnerCon>
        </SC.FrontCard>
      </div>
    </SC.CardResultCon>
  );
};

export default CardResult;
