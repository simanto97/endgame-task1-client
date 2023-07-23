import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useParams } from "react-router-dom";

const AdmissionForm = () => {
  const [college, setCollege] = useState([]);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_HOSTING_URL}/college-cards/${id}`)
      .then((res) => res.json())
      .then((data) => setCollege(...data));
  }, [id]);
  console.log(college);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    // const candidateEmail = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const dateOfBirth = form.dateOfBirth.value;
    const image = form.image.value;

    const candidateInfo = {
      collegeName: college.collegeName,
      name,
      subject,
      candidateEmail: user?.email,
      phone,
      address,
      dateOfBirth,
      image,
    };
    fetch(`${import.meta.env.VITE_HOSTING_URL}/admission`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(candidateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("admitted successfully");
        }
      });
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-center">
        Candidate Information
      </h2>
      <form onSubmit={handleSubmit} className="md:w-1/2 mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium mb-1">
            Candidate Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block font-medium mb-1">
            Candidate Email
          </label>
          <input
            defaultValue={user?.email}
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded py-2 px-3"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block font-medium mb-1">
            Candidate Phone Number
          </label>
          <input
            type="text"
            name="phone"
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block font-medium mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block font-medium mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            className="w-full border border-gray-300 rounded py-2 px-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
