import Duties from "./Duties";

const SingleJob = ({ job, currentItem, setCurrentItem }) => {
  const { company, dates, duties, title } = job[currentItem];
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default SingleJob;
