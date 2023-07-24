import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/college-cards`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-5xl font-bold">Top Colleges</h2>
      <div className="p-4 md:px-28">
        {colleges.map((college) => (
          <div
            key={college._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row mt-4"
          >
            <img
              src={college.collegeImage}
              alt={college.collegeName}
              className="md:w-1/3 h-auto object-cover"
            />
            <div className="p-4 flex-1">
              <h2 className="text-xl font-semibold">{college.collegeName}</h2>
              <p className="text-gray-600">Rating: {college.collegeRating}</p>
              <p className="text-gray-600">
                Admission Date: {college.admissionDate}
              </p>
              <p className="text-gray-600">
                Number of Research: {college.numOfResearch}
              </p>
              <Link to={`/college/${college._id}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
