import CollegeCards from "../CollegeCards/CollegeCards";
import Gallery from "../Gallery/Gallery";
import ResearchSection from "../ResearchSection/ResearchSection";
import ReviewSection from "../ReviewSection/ReviewSection";

const Home = () => {
  return (
    <div className="px-4">
      <CollegeCards />
      <Gallery />
      <ReviewSection />
      <ResearchSection />
    </div>
  );
};

export default Home;
