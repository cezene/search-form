import React, { useState, useEffect } from "react";

const Form = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = () => {
      fetch(
        `https://api.staging.purplemetrics.com.br/api/v1/list-questions/5c56a367-a16d-47c2-b369-076b7595903c/cezene?fields=theme`
      )
        .then((response) => response.json())
        .then((json) => setQuestions(json));
    };
    getQuestions();
  }, []);
  console.log(questions)
  return (
    <div>
      <h1>Formulário</h1>
    </div>
  );
};

export default Form;
