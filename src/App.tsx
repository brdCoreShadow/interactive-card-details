import { useState } from "react";
import CardData from "./components/CardData/CardData";
import CardResult from "./components/CardResult/CardResult";
import ThanksComp from "./components/ThanksComp/ThanksComp";

export type CardDataType = {
  holderName: string;
  cardNumber: string | number;
  month: number;
  year: number;
  cvc: number;
};

function App() {
  const [cardData, setCardData] = useState<CardDataType | null>(null);

  const handleCardData = (data: CardDataType | null): void => {
    setCardData(data);
  };

const handleReset = ():void => setCardData(null)

  return (
    <div>
      <CardResult cardData={cardData} />
      {cardData ? <ThanksComp handleReset={handleReset}/> : <CardData handleCardData={handleCardData} />}
    </div>
  );
}

export default App;
