import React from "react";
import "./QuestionLayout.css";
import check from './images/check.png'

const QuestionLayout = (props) => {
  return (
    <div className="h-96 flex flex-col items-center justify-center w-3/4 shadow-md m-4 rounded-lg border border-gray-300 bg-gray-100">
      <div className="subject">Subject: {props.subject}</div>
      <div className="question">
        Q{props.qnum + 1}. {props.question}
      </div>

      <div className="options mt-10 mb-30 w-80 mx-auto flex flex-col items-center justify-center">
        <div className="option">
          {props.option1}
          {props.answer.includes('A') ? <img className='check' src={check}/> : ""}
        </div>

        {props.option2 && props.option2.length > 0 &&
        <div className="option">
          {props.option2}
          {props.answer.includes('B') ? <img className='check' src={check}/> : ""}
        </div>}

        {props.option3 && props.option3.length > 0 &&
        <div className="option">
          {props.option3}
          {props.answer.includes('C') ? <img className='check' src={check}/> : ""}
        </div>}

        {props.option4 && props.option4.length > 0 &&
        <div className="option">
          {props.option4} 
          {props.answer.includes('D') ? <img className='check' src={check}/> : ""}
        </div>}

        {props.option5 && props.option5.length > 0 &&
        <div className="option">
          {props.option5}
          {props.answer.includes('E') ? <img className='check' src={check}/> : ""}
        </div>}
        {props.option6 && props.option6.length > 0 &&
        <div className="option">
          {props.option6}
          {props.answer.includes('F') ? <img className='check' src={check}/> : ""}
        </div>}
        {props.option7 && props.option7.length > 0 &&
        <div className="option">
          {props.option7}
          {props.answer.includes('G') ? <img className='check' src={check}/> : ""}
        </div>}
        {props.option8 && props.option8.length > 0 &&
        <div className="option">
          {props.option8}
          {props.answer.includes('H') ? <img className='check' src={check}/> : ""}
        </div>}
        
      </div>
      <div className="mt-10 w-90 flex justify-between space-x-96 ">
        <div className="sub-topic">Sub Topic: {props.subTopic}</div>
        <div className="difficulty-level ml-auto">Difficulty Level: {props.level}</div>
      </div>
      <div className="mt-10 w-90 flex justify-between space-x-96">
        <div className="q-type">Type: {props.qtype}</div>
        <div className="a-type">Answer Type: {props.atype}</div>
      </div>
    </div>
  );
};

export default QuestionLayout;
