import React from "react";
import Card from "./components/Card";
import { useState } from "react";
import TextBox from "./toolbox/TextBox";
import NameField from "./toolbox/NameField";
import CardNumberField from "./toolbox/CardNumberField";
import { MdRotate90DegreesCcw } from "react-icons/md";
import { RiAiGenerate } from "react-icons/ri";

function App() {
  const [isFlip, setIsFlip] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const fullName = (firstName + " " + lastName).trim();

  const generateEvent = () => {
    if (!firstName) {
      window.alert("Invalid first name, Please enter your first name first.");
      return;
    }

    if (!lastName) {
      window.alert("Invalid last name, Please enter your last name first.");
      return;
    }

    if (!cardNumber) {
      window.alert("Invalid card number, Please enter your card number first.");
      return;
    }

    if (cardNumber.length !== 14) {
      window.alert("Invalid card number, Please input a 14-digit number.");
      return;
    }

    window.alert("ATM Card Generator Sample.");
  };

  return (
    <div className='w-full gap-y-10 perspective-10 h-screen gap-x-5 bg-[#E1DACF] flex items-center justify-center flex-col lg:flex-row'>
      <div className='w-[90%] sm:w-96 flex flex-col gap-y-4'>
        <div className='flex gap-x-1'>
          <NameField
            label='First Name'
            placeholder='Enter your name here.'
            value={firstName}
            setValue={setFirstName}
          />
          <NameField
            label='Last Name'
            placeholder='Enter your name here.'
            value={lastName}
            setValue={setLastName}
          />
        </div>
        <CardNumberField
          label='Card Number'
          placeholder='Enter card number.'
          _value={cardNumber}
          setValue={setCardNumber}
        />
        <div className='flex justify-between gap-x-1'>
          <button
            onClick={() => setIsFlip(!isFlip)}
            className='select-none w-full gap-x-2 justify-center text-slate-600 bg-slate-100 hover:bg-slate-200 active:bg-slate-400 font-bold font-poppins text-lg py-2 border-2 flex items-center border-slate-500 rounded-md'
          >
            {!isFlip ? "Back" : "Front"}
            <MdRotate90DegreesCcw />
          </button>
          <button
            onClick={generateEvent}
            className='select-none w-full gap-x-2 justify-center text-white bg-green-500 hover:bg-green-600 active:bg-green-700 font-bold font-poppins text-lg py-2 border-2 flex items-center border-green-500 rounded-md'
          >
            Generate
            <RiAiGenerate />
          </button>
        </div>
      </div>
      <Card cardNumber={cardNumber} ownerName={fullName} isFlip={isFlip} />
    </div>
  );
}

export default App;
