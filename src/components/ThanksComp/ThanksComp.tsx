import * as SC from "./ThankCompStyled"

import okeyIcon from "../../assets/images/icon-complete.svg"

type Props = {
    handleReset: () => void;
}

const ThanksComp: React.FC<Props> = ({handleReset}) => {
  return (
    <SC.ThankCon>
      <SC.ThankIconThumb>
        <img src={okeyIcon} alt="okey" />
      </SC.ThankIconThumb>
      <SC.ThankContentCon>
        <h3>thank you!</h3>
        <p>We’ve added your card details</p>
      </SC.ThankContentCon>
      <SC.ThanksBtn type="submit" onClick={handleReset}>Continue</SC.ThanksBtn>
    </SC.ThankCon>
  );
};

export default ThanksComp;
