import CollegeCards from "../CollegeCards/CollegeCards";
import Gallery from "../Gallery/Gallery";
import ReviewSection from "../ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div className="px-4">
      <CollegeCards />
      <Gallery />
      <ReviewSection />
    </div>
  );
};

export default Home;
