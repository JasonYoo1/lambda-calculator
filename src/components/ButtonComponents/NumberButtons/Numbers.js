import React, {useState} from "react";
import {numbers} from '../../../data.js'
import {NumberButton} from './NumberButton'
//import any components needed



const Numbers = () => {
  // STEP 2 - add the imported data to state
  //Import your array data to from the provided data file
  const [numberState] = useState(numbers);
  console.log('This is the array data to state:', numberState);

  return (
    <div>
      {numberState.map((calculator)=> {return <NumberButton number = {calculator} />})}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;