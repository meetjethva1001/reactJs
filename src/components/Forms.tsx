import { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    education: ""
  });

  const [submittedData, setSubmittedData] = useState<any>(null);

  function handleChange(e : any ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e:any ) {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", surname: "", age: "", education: "" });
  }

  return (
    <div className="flex flex-col items-center justify-center w-full mt-5">
      <form
        className="bg-gray-300 p-3 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border border-gray-400 rounded p-1 mb-2"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          className="border border-gray-400 rounded p-1 mb-2"
          onChange={handleChange}
          value={formData.surname}
        />
        <br />
        <input
          type="text"
          name="age"
          placeholder="Age"
          className="border border-gray-400 rounded p-1 mb-2"
          onChange={handleChange}
          value={formData.age}
        />
        <br />
        <input
          type="text"
          name="education"
          placeholder="Education"
          className="border border-gray-400 rounded p-1 mb-2"
          onChange={handleChange}
          value={formData.education}
        />
        <br />
        <input 
          type="submit"
          value="Submit"
          className="bg-gray-700 text-gray-300 px-2 py-1 rounded mt-3 mx-auto cursor-pointer"
        />
      </form>

      {submittedData && (
        <div className="mt-5 bg-gray-100 p-3 rounded w-1/3">
          <h3 className="font-bold mb-2">Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Surname:</strong> {submittedData.surname}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
          <p><strong>Education:</strong> {submittedData.education}</p>
        </div>
      )}
    </div>
  );
}