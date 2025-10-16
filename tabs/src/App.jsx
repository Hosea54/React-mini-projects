const url = "https://www.course-api.com/react-tabs-project";
import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";
import BtnContainer from "./BtnContainer";

const App = () => {
  const [job, setJob] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, setCurrentItem] = useState(1);

  const fetchdata = async () => {
    const response = await fetch(url);
    const newjob = await response.json();
    console.log(newjob);

    setJob(newjob);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <BtnContainer
        job={job}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />

      <SingleJob
        job={job}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </section>
  );
};
export default App;
