import React, {useState}from "react";
import {OperatorButton} from './OperatorButton';
import {operators} from '../../../data';



//import any components needed

//Import your array data to from the provided data file


const Operators = () => {
  const [operatorState] = useState(operators);
  console.log('This is operator data: ', operatorState )
  return (
    <div>
      {operatorState.map((symbolKey)=> {return <OperatorButton symbol = {symbolKey.char} />})}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
  // STEP 2 - add the imported data to state
export default Operators;