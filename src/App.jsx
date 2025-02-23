import UserInput from "./components/UserInput";
import { useState } from "react";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults } from './util/investment';
function App() {

  const [initial, setInitial] = useState('');
  const [annual, setAnnual] = useState('');
  const [expectedReturn, setExpectedReturn] = useState('');
  const [duration, setDuration] = useState('');
  const [isComplete, setIsComplete] = useState(false);
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
  let resultObject = {};
  if (initial && annual && expectedReturn && duration) {
    resultObject = calculateInvestmentResults({ initial, annual, expectedReturn, duration });
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
        initial && annual && expectedReturn && duration && (
          < ResultTable result={resultObject} />
        )
      }
    </>
  );

}

export default App
