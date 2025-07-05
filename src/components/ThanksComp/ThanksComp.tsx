import * as SC from "./ThankCompStyled"

import okeyIcon from "../../assets/images/icon-complete.svg"

const ThanksComp: React.FC = () => {
  return (
    <SC.ThankCon>
      <SC.ThankIconThumb>
        <img src={okeyIcon} alt="okey" />
      </SC.ThankIconThumb>
      <div>
        <h3>thank you!</h3>
        <p>We’ve added your card details</p>
      </div>
      <button type="submit">Continue</button>
    </SC.ThankCon>
  );
};

export default ThanksComp;
