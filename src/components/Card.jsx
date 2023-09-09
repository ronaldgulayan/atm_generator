import React from "react";
import { useState } from "react";

function Card({ isFlip, ownerName, cardNumber }) {
  return (
    <div
      data-flip={isFlip}
      id='inner'
      className='card shadow-xl data-[flip=true]:rotate-y-180 duration-1000 text-white w-[90%] sm:w-96 h-52 sm:h-56 transform-style-3d relative'
    >
      <div
        id='front'
        className='absolute backface-hidden flex flex-col justify-between overflow-hidden bg-[url(/bg/map.jpg)] bg-cover sm:px-9 sm:py-8 px-7 py-6 rounded-xl z-[2] w-full top-0 left-0 h-full'
      >
        <h1 className='sm:text-3xl text-2xl text-right font-bold font-[Number]'>
          YOUR BANK
        </h1>
        <div className=''>
          <img
            className='w-14 h-8 object-cover rounded-lg border border-slate-500 shadow-md'
            src='/icons/sim.png'
          />
        </div>
        <div className='w-full flex justify-justify'>
          <div className='flex leading-6 flex-col w-[78%]'>
            <h1 className='sm:text-[2rem] text-[1.7rem] font-bold font-[Number]'>
              {cardNumber ? cardNumber : "0123 4567 8901"}
            </h1>
            <h1 className='sm:text-[1rem] text-[0.8rem] text-slate-300 truncate font-poppins'>
              {ownerName ? ownerName : "CARDHOLDER NAME"}
            </h1>
          </div>

          <div className='w-[22%] flex items-center'>
            <img
              className='rounded-lg shadow-md saturate-200 h-9 object-cover sepia w-full'
              src='/bg/map.jpg'
            />
          </div>
        </div>
      </div>
      <div
        id='back'
        className='w-full h-full z-[3] rounded-xl overflow-hidden backface-hidden top-0 text-white absolute left-0 bg-blue-500 rotate-y-180 py-8 flex flex-col justify-between bg-[url(/bg/map.jpg)] bg-cover'
      >
        <div className='w-full h-11 bg-black'></div>
        <div className='w-full px-3'>
          <div className='w-full h-9 bg-gray-300 flex'>
            <div className='h-full w-[80%] flex items-center justify-center font-[Number] text-gray-400 text-opacity-20 select-none text-xl'>
              {ownerName}
            </div>
            <div className='w-[20%] h-full bg-white shadow-md flex items-center justify-center font-bold text-dark text-xl font-[Number]'>
              123
            </div>
          </div>
        </div>
        <div className='w-full flex justify-justify px-10'>
          <div className='flex flex-col w-[78%]'>
            <h1 className='sm:text-[2rem] text-[1.7rem] leading-7 font-bold font-[Number]'>
              {cardNumber ? cardNumber : "0123 4567 8901"}
            </h1>
            <h1 className='sm:text-[0.5rem] text-[0.3rem] text-slate-400 font-[Number] leading-[0.5rem]'>
              This ATM card is the property of{" "}
              {ownerName ? ownerName : "CARDHOLDER NAME"}. It is issued to the
              cardholder for the purpose of conducting transactions with{" "}
              {ownerName ? ownerName : "CARDHOLDER NAME"} only.
            </h1>
          </div>
          <div className='w-[22%] flex items-center'>
            <img
              className='rounded-lg shadow-md saturate-200 h-9 object-cover sepia w-full'
              src='/bg/map.jpg'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
