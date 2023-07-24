const ResearchSection = () => {
  const images = [
    {
      image:
        "https://i1.rgstatic.net/publication/332277664_Undergraduate_research_writing_for_fourth_year_university_students_of_English/links/5cab9a83299bf118c4bcf476/largepreview.png",
      link: "https://www.researchgate.net/publication/332277664_Undergraduate_research_writing_for_fourth_year_university_students_of_English",
    },
    {
      image:
        "https://i1.rgstatic.net/publication/315743605_Faculty_Production_of_Research_Papers_Challenges_and_Recommendations/links/58e142f7a6fdcc41bf944c5b/largepreview.png",
      link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F315743605_Faculty_Production_of_Research_Papers_Challenges_and_Recommendations&psig=AOvVaw2zsdQHaaNojhKNn24NSRpf&ust=1690265324683000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC76fXopoADFQAAAAAdAAAAABA_",
    },
    {
      image: "https://www.pdffiller.com/preview/5/468/5468776.png",
      link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pdffiller.com%2Fen%2Fcatalog%2Fcollege-research-paper-example-45116.htm&psig=AOvVaw2zsdQHaaNojhKNn24NSRpf&ust=1690265324683000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC76fXopoADFQAAAAAdAAAAABBH",
    },
    {
      image:
        "https://i1.rgstatic.net/publication/283806418_An_Effective_Academic_Research_Papers_Recommendation_for_Non-profiled_Users/links/571f567708aed056fa23408d/largepreview.png",
      link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Fpublication%2F283806418_An_Effective_Academic_Research_Papers_Recommendation_for_Non-profiled_Users&psig=AOvVaw2zsdQHaaNojhKNn24NSRpf&ust=1690265324683000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC76fXopoADFQAAAAAdAAAAABBP",
    },
  ];
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-center text-3xl mb-7 font-bold text-blue-800 uppercase border-b-2 pb-8">
        Research Papers
      </h1>
      <h2 className="text-center font-medium text-xl my-4">
        Slide to left side to view Research Papers
      </h2>
      <div className="carousel carousel-center max-w-xl p-8 space-x-4 bg-white rounded-box">
        {images.map((image, i) => (
          <div key={i} className="carousel-item w-48 relative">
            <img src={image.image} className="rounded-box" />
            <a
              className="absolute text-blue-700 bottom-0 left-1/2 underline"
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchSection;
