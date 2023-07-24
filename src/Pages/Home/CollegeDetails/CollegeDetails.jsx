import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  console.log(college);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/college-cards/${id}`)
      .then((res) => res.json())
      .then((data) => setCollege(...data));
  }, [id]);
  return (
    <div className="p-4 lg:p-0">
      <div className="md:flex justify-between gap-3">
        <img className="md:w-2/3" src={college?.collegeImage} alt="" />
        <div className="md:w-1/3">
          {" "}
          <h2 className="text-center text-4xl font-bold my-6">
            {college?.collegeName}
          </h2>
          <div className="mb-3">
            <h2 className="text-xl font-bold">Research Works: </h2>
            {college?.researchWorks.map((item, i) => (
              <div className="mt-2" key={i}>
                <p className="font-semibold text-lg">{item?.title}</p>
                <p>Author: {item?.author}</p>
                <p>Year: {item?.publishedYear}</p>
                <p>Details: {item?.description}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-bold">Admission Processes: </h2>
            {college?.admissionProcess.map((item, i) => (
              <li className="mt-1" key={i}>
                {item}
              </li>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:px-28 py-12">
        <div className="md:flex justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold">Event Details: </h2>
            {college?.events.map((item, i) => (
              <div className="mt-1" key={i}>
                <p className="font-semibold text-lg">{item?.name}</p>
                <p>Date: {item?.date}</p>
                <p>Details: {item?.description}</p>
              </div>
            ))}
          </div>
          <div className="">
            <h2 className="text-xl font-bold">Sports: </h2>
            {college?.sports.map((item, i) => (
              <div className="mt-1" key={i}>
                <p className="font-semibold text-lg">{item?.category}</p>
                <p>Coach: {item?.coach}</p>
                <p>Practice Schedule: {item?.practiceSchedule}</p>
                <p>{item?.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between"></div>
      </div>
    </div>
  );
};

export default CollegeDetails;
