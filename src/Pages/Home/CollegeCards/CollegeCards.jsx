import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeCards = () => {
  const [collegeCards, setCollegeCards] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/college-cards`)
      .then((res) => res.json())
      .then((data) => setCollegeCards(data));
  }, []);

  const handleSearch = () => {
    fetch(
      `${
        import.meta.env.VITE_HOSTING_URL
      }/collegeSearchByCollegeName/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCollegeCards(data);
      });
  };
  return (
    <div>
      <div className="mx-auto w-1/3 my-4">
        <input
          className="input input-bordered md:w-72 rounded-r-none"
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          placeholder="Search"
          name=""
          id=""
        />
        <button
          onClick={handleSearch}
          className="btn btn-primary rounded-l-none capitalize"
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3">
        {collegeCards.map((collegeCard) => (
          <div
            key={collegeCard._id}
            className="card w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={collegeCard?.collegeImage} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{collegeCard?.collegeName}</h2>
              <p>Admission Date: {collegeCard?.admissionDate}</p>
              <div className="flex">
                <p>
                  Events:{" "}
                  {collegeCard?.events.map((item, i) => (
                    <li key={i}>{item?.name}</li>
                  ))}
                </p>
                <p>
                  Sports:{" "}
                  {collegeCard?.sports.map((item, i) => (
                    <li key={i}>{item?.category}</li>
                  ))}
                </p>
              </div>
              <p>
                Research Works:{" "}
                {collegeCard?.researchWorks.map((item, i) => (
                  <li key={i}>{item?.title}</li>
                ))}
              </p>

              <div className="card-actions justify-center">
                <Link to={`/college/${collegeCard._id}`}>
                  <button className="btn btn-primary capitalize">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeCards;
