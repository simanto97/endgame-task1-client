import { useEffect, useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center my-8">Slide to upper side to view reviews</h2>
      <div className="h-52 carousel carousel-vertical rounded-box w-1/2">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="carousel-item h-full flex flex-col justify-center items-center"
          >
            <h2>{review?.userName}</h2>
            <p>{review?.userEmail}</p>
            <p>{review?.rating}</p>
            <p>{review?.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
