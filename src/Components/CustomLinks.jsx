import React, { useState } from "react";
const CustomLinks = ({ onFormChange }) => {
  const [forms, setForms] = useState([{ platform: "", link: "" }]);

  const createNewForm = () => {
    if (forms.length < 5) {
      setForms([...forms, { platform: "", link: "" }]);
    }
  };

  const removeForm = (index) => {
    const updatedForms = forms.filter((_, i) => i !== index);
    setForms(updatedForms);
    onFormChange(updatedForms);
  };

  const handleFormChange = (event, index, field) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = event.target.value;
    setForms(updatedForms);
    onFormChange(updatedForms);
  };

  const renderForms = () => {
    return forms.map((form, index) => (
      <div key={index} className="bg-empty mt-2 p-2 rounded-lg">
        <div className="flex justify-between mb-2">
          <p>Link #{index + 1}</p>
          <button onClick={() => removeForm(index)}>Remove</button>
        </div>
        <p>Platform</p>
        <select
          className="px-2 py-1 border border-gray-300 rounded-lg w-full"
          value={form.platform}
          onChange={(event) => handleFormChange(event, index, "platform")}
        >
          <option value="">Select a platform</option>
          <option value="github">GitHub</option>
          <option value="youtube">YouTube</option>
          <option value="linkedin">LinkedIn</option>
          <option value="facebook">Facebook</option>
          <option value="twitter">Twitter</option>
        </select>
        <p>Link</p>
        <input
          type="text"
          className="px-2 py-1 border border-gray-300 rounded-lg w-full"
          value={form.link}
          onChange={(event) => handleFormChange(event, index, "link")}
        />
      </div>
    ));
  };

  return (
    <section className="bg-white text-black text-left m-2 w-full rounded-lg p-4 links">
      <h2 className="text-lg font-bold">Customize your links</h2>
      <p className="mt-2">
        Add/edit/remove links below and then share all your profiles with the
        world
      </p>
      <div className="flex justify-center mt-2">
        <button className="btn-preview w-3/4" onClick={createNewForm}>
          + Add new link
        </button>
      </div>
      {renderForms()}
    </section>
  );
};

export default CustomLinks;