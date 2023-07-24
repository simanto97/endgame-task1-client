import { useEffect, useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="text-center text-3xl mb-7 font-bold text-blue-800 uppercase border-b-2 pb-8">
        Reviews
      </h1>
      <h2 className="text-center font-medium text-xl my-4">
        Slide to upper side to view Reviews
      </h2>
      <div className="h-52 carousel carousel-vertical rounded-box w-3/4 bg-slate-100 shadow-lg">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="carousel-item h-full flex flex-col justify-center items-center gap-2 p-4 rounded-md bg-white shadow-md"
          >
            <h2 className="text-2xl font-bold text-purple-600">
              {review?.userName}
            </h2>
            <p className="font-serif text-gray-600">
              Email: {review?.userEmail}
            </p>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              <p className="ml-1 text-yellow-500">{review?.rating}</p>
            </div>
            <p className="font-medium text-lg text-gray-800">
              <q>{review?.review}</q>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
