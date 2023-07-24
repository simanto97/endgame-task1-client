import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://img.freepik.com/premium-photo/theyve-reached-end-their-academic-years-shot-group-university-students-throwing-their-hats-air-graduation-day_590464-9807.jpg?size=626&ext=jpg&ga=GA1.1.1725280489.1677588971&semt=ais",
  "https://img.freepik.com/premium-photo/students-university-people-wearing-mantles-group-students_115086-788.jpg?size=626&ext=jpg&ga=GA1.1.1725280489.1677588971&semt=ais",
  "https://img.freepik.com/free-photo/graduation-concept-with-girls-taking-selfie_23-2148201825.jpg?size=626&ext=jpg&ga=GA1.1.1725280489.1677588971&semt=ais",
  "https://img.freepik.com/free-photo/graduate-students-wearing-cap-gown_23-2148950539.jpg?size=626&ext=jpg&ga=GA1.1.1725280489.1677588971&semt=sph",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://img.freepik.com/premium-photo/happy-students-with-diplomas-outdoors-graduation-ceremony_495423-58230.jpg?size=626&ext=jpg&ga=GA1.2.1725280489.1677588971&semt=sph",
  "https://img.freepik.com/premium-photo/grodno-belarus-june-2018-happy-foreign-african-medical-students-square-academic-graduation-caps-black-raincoats-during-commencement-with-diploms-after-finishing-studies_97694-1550.jpg?size=626&ext=jpg&ga=GA1.2.1725280489.1677588971&semt=sph",
  "https://img.freepik.com/free-photo/group-students-celebrating-graduation-together-wearing-face-masks_1303-27693.jpg?size=626&ext=jpg&ga=GA1.2.1725280489.1677588971&semt=ais",
];

const Gallery = () => {
  return (
    <div className="my-12">
      <h2 className="text-center text-3xl mb-7 font-bold text-blue-800 uppercase border-b-2 pb-8">
        Graduation snaps
      </h2>{" "}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}>
        <Masonry gutter="15px">
          {images.map((image, i) => (
            <img
              data-aos="flip-left"
              data-aos-duration="500"
              key={i}
              src={image}
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
              alt=""
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Gallery;
