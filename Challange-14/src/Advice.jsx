import React from 'react'
import dice from "./assets/images/icon-dice.svg"
import patternDivider from "./assets/images/pattern-divider-mobile.svg"
const Advice = ({advice, setClick}) => {

  console.log("comp",advice)

  const clickHandler = () => {
    setClick((prev) => !prev);
    console.log(advice);
  };

  return (
    <div className='font-Manrope text-center max-w-lg p-6 text-white rounded-xl bg-[#323a49]'>
      <h1 className='text-[#52ffa8] text-sm tracking-widest py-3'>ADVICE #{advice?.slip?.id}</h1>
      <h1 className='text-2xl py-3' >"{advice?.slip?.advice}"</h1> 
      <img className='w-full' src={patternDivider} />        
      <button className='bg-[#52ffa8] rounded-full p-4 mt-3' onClick={() => clickHandler()}><img src={dice}></img></button>
    </div>

  )
}

export default Advice