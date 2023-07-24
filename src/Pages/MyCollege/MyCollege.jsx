import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [myCollege, setMyCollege] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/admission?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCollege(data));
  }, [user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const review = event.target.review.value;
    const rating = parseFloat(event.target.rating.value);
    const reviewInfo = {
      userEmail: user.email,
      userName: user.displayName,
      review,
      rating,
    };
    fetch(`${import.meta.env.VITE_HOSTING_URL}/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review added Successfully");
        }
      });
  };
  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-center text-4xl font-bold">My College</h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {myCollege.map(
          (
            {
              collegeName,
              subject,
              candidateEmail,
              phone,
              address,
              dateOfBirth,
            },
            i
          ) => (
            <div
              key={i}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{collegeName}</div>
                {/* <p className="text-gray-700 text-base mb-2">Name: {name}</p> */}
                <p className="text-gray-700 text-base mb-2">
                  Subject: {subject}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  Email: {candidateEmail}
                </p>
                <p className="text-gray-700 text-base mb-2">Phone: {phone}</p>
                <p className="text-gray-700 text-base mb-2">
                  Address: {address}
                </p>
                <p className="text-gray-700 text-base mb-2">
                  Date of Birth: {dateOfBirth}
                </p>

                <form onSubmit={handleSubmit} className="">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Review:</span>
                    </label>
                    <input
                      type="text"
                      name="review"
                      placeholder="Review"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Rating:</span>
                    </label>
                    <input
                      type="text"
                      name="rating"
                      placeholder="Rating"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-2">
                    <input
                      type="submit"
                      value="Add"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MyCollege;
