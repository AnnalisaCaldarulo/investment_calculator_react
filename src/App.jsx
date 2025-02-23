import UserInput from "./components/UserInput";
import { useState } from "react";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults } from './util/investment';

function App() {
  // stringhe per gli stati iniziali
  const [initial, setInitial] = useState("1000");
  const [annual, setAnnual] = useState("1200");
  const [expectedReturn, setExpectedReturn] = useState("6");
  const [duration, setDuration] = useState("10");

  function handleChangeInitial(e) {
    setInitial(e.target.value);
  }

  function handleChangeAnnual(e) {
    setAnnual(e.target.value);
  }

  function handleChangeExpectedReturn(e) {
    setExpectedReturn(e.target.value);
  }

  function handleChangeDuration(e) {
    setDuration(e.target.value);
  }

  // conversione dei valori in numeri per evitare errori con Nan 
  const initialNumber = parseFloat(initial);
  const annualNumber = parseFloat(annual);
  const expectedReturnNumber = parseFloat(expectedReturn);
  const durationNumber = parseFloat(duration);


  const isValid = durationNumber >= 1;

  let resultData = [];
  if (initialNumber && annualNumber && expectedReturnNumber && durationNumber && isValid ) {
    resultData = calculateInvestmentResults({
      initialInvestment: initialNumber,
      annualInvestment: annualNumber,
      expectedReturn: expectedReturnNumber,
      duration: durationNumber,
    });
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <UserInput value={initial} setValue={handleChangeInitial} name="initial investment" />
          <UserInput value={annual} setValue={handleChangeAnnual} name='annual investment' />
        </div>
        <div className="input-group">
          <UserInput value={expectedReturn} setValue={handleChangeExpectedReturn} name="expected return" />
          <UserInput value={duration} setValue={handleChangeDuration} name='duration' />
        </div>
      </div>
      {
        initialNumber && annualNumber && expectedReturnNumber && durationNumber && isValid ?
          <ResultTable resultData={resultData} />
          : null
      }
      {!isValid && (<p id='text-danger'>Invalid input</p>) }
    </>
  );
}

export default App;