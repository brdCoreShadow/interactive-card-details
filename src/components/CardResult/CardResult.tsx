import * as SC from "./CardResultStyled";

import cardLogo from "../../assets/images/card-logo.svg"

const CardResult: React.FC = () => {
  return (
    <SC.CardResultCon>
      <div>
        <SC.BackCard>
          <p>000</p>
        </SC.BackCard>
        <SC.FrontCard>
            <SC.CardThumbLogo>
                <img src={cardLogo} alt="cardLogo" />
            </SC.CardThumbLogo>
            <SC.CardNumberList>
                <li>0000</li>
                <li>0000</li>
                <li>0000</li>
                <li>0000</li>
            </SC.CardNumberList>
            <SC.CardDateAndOWnerCon>
                <p>JANE APPLESEED</p>
                <p>00/00</p>
            </SC.CardDateAndOWnerCon>
        </SC.FrontCard>
      </div>
    </SC.CardResultCon>
  );
};

export default CardResult;
