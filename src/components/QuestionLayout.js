import React from "react";
import "./QuestionLayout.css";
import check from './images/check.png'

const QuestionLayout = (props) => {
  return (
    <div className="question-cont   h-auto m-10 w-auto flex flex-col items-center justify-center w-3/4 shadow-md m-4 rounded-lg border border-gray-300 bg-gray-100">
      <div className="subject">Subject: {props.subject}</div>
      <div className="question">
        Q{props.qnum + 1}. {props.question}
      </div>

      <div className="mt-10 mb-10  w-80 h-auto mx-auto flex flex-col items-center justify-center flex items-center">
      <div className="option flex items-center">
  <span className="mr-1">{props.option1}</span>
  {props.answer.includes('A') && <img className="h-5 w-5" src={check} alt="Check mark" />}
</div>


        {props.option2 && props.option2.length > 0 && (
  <div className="option flex items-center">
    <span className="mr-1">{props.option2}</span>
    {props.answer.includes('B') && <img className="h-5 w-5" src={check} alt="Check mark" />}
  </div>
)}


{props.option3 && props.option3.length > 0 && (
  <div className="option flex items-center">
    <span className="mr-1">{props.option3}</span>
    {props.answer.includes('C') && <img className="h-5 w-5" src={check} alt="Check mark" />}
  </div>
)}


{props.option4 && props.option4.length > 0 && (
  <div className="option flex items-center">
    <span className="mr-1">{props.option4}</span>
    {props.answer.includes('D') && <img className="h-5 w-5" src={check} alt="Check mark" />}
  </div>
)}


{props.option5 && props.option5.length > 0 && (
  <div className="option flex items-center">
    <span className="mr-1">{props.option5}</span>
    {props.answer.includes('E') && <img className="h-5 w-5" src={check} alt="Check mark" />}
  </div>
)}

{props.option6 && props.option6.length > 0 && (
  <div className="option flex items-center">
    <span className="mr-1">{props.option6}</span>
    {props.answer.includes('F') && <img className="h-5 w-5" src={check} alt="Check mark" />}
  </div>
)}

{props.option7 && props.option7.length > 0 && (
  <div className="option flex items-center">
    <span className="mr-1">{props.option7}</span>
    {props.answer.includes('G') && <img className="h-5 w-5" src={check} alt="Check mark" />}
  </div>
)}

{props.option8 && props.option8.length > 0 && (
  <div className="option flex items-center">
    <span className="mr-1">{props.option8}</span>
    {props.answer.includes('H') && <img className="h-5 w-5" src={check} alt="Check mark" />}
  </div>
)}

        
      </div>
      <div className="mt-10 w-90 flex justify-between space-x-96">
  <div className="sub-topic">Sub Topic: {props.subTopic}</div>
  <div className="difficulty-level ml-auto">Difficulty Level: {props.level}</div>
</div>

      <div className="mt-10 w-90 mb-10 flex justify-between space-x-96">
        <div className="q-type">Type: {props.qtype}</div>
        <div className="a-type">Answer Type: {props.atype}</div>
      </div>
    </div>
  );
};

export default QuestionLayout;
