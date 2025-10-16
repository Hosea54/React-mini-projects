import Question from "./Question";

const Questions = ({ question }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {question.map((question) => {
        console.log(question);

        return <Question key={question.id} {...question} />;
      })}
    </section>
  );
};
export default Questions;
