import React from "react";
import Image from "next/image";
import { SQLResponse, TMessage, TQuestions } from "@/helpers/types";
import { v4 as uuidv4 } from "uuid";
import { MESSAGE_TYPES } from "@/helpers/enums";
import { useRoot } from "@/context/ContextProvider";
import "../styles/chatscreen.css";
import { HiOutlineArrowCircleUp } from "react-icons/hi";

type HomescreenProps = {
  questions: TQuestions;
  generateSQL: (question: string) => Promise<SQLResponse>;
  loading: boolean;
};
const Homescreen = (props: HomescreenProps) => {
  const { questions, generateSQL, loading } = props;

  const { handleChangeMessageHistory } = useRoot();

  const fixedQuestions = [
    "Top 10 users who have engaged the most in season 5.",
    "Which are the trending projects in season 5?",
    "List all users who have posted more than 10 times on a single topic in season 5.",
    "Top 10 users who have engaged the most in season 4.",
  ];

  const handleSelectQuestion = async (value: string) => {
    try {
      let newMessage: TMessage = {
        ai: "",
        user: value,
        messageId: uuidv4(),
        type: MESSAGE_TYPES.user,
      };
      handleChangeMessageHistory(newMessage);

      let SQL = await generateSQL(value);

      const { text } = SQL;
      newMessage = {
        ai: text,
        user: "",
        messageId: uuidv4(),
        type: MESSAGE_TYPES.sql,
      };

      handleChangeMessageHistory(newMessage);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="m-auto flex flex-col w-full h-[100vh] items-center justify-center">
      <div className="flex w-[80%] h-auto flex-col items-start m-3">
        <h3 className="hello-text">Hello,</h3>
        <p className="text-[white] paragraph">How can I help you today?</p>
      </div>
      <div className="flex flex-row justify-start items-start max-h-[40vh] w-[80%]">
        {!loading &&
          fixedQuestions.map((ques: string) => {
            return (
              <div
                key={uuidv4()}
                className="question-div border border-1 rounded-md py-3 px-4 m-3 text-white flex flex-col justify-between items-center max-h-[140px]"
              >
                <p className="text-[1vw]">{ques}</p>
                {/* <button
                  className="chat-button"
                  key={uuidv4()}
                  onClick={() => handleSelectQuestion(ques)}
                >
                  <HiOutlineArrowCircleUp className="text-[2.8vw] pt-4" />
                </button> */}
              </div>
            );
          })}
        {loading && <div className="text-white">Loading....</div>}
      </div>
    </div>
  );
};

export default Homescreen;
