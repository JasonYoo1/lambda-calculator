import React, {useState} from "react";
import {specials} from '../../../data.js'
import {SpecialButton} from './SpecialButton';

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials);
  console.log(specialState)
  return (
    <div>
        {specialState.map((specialKey)=> {return <SpecialButton special = {specialKey} />})}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;