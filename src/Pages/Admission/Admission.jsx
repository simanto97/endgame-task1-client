import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/college-cards`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div>
      <h2 className="text-center text-5xl font-bold">Top Colleges</h2>
      <div className="overflow-x-auto md:max-w-screen-lg mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>College Name</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {colleges.map(({ _id, collegeName, collegeRating }, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{collegeName}</td>
                <td>{collegeRating}</td>
                <td>
                  <Link to={`/admission-form/${_id}`}>
                    <button>Admit</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
