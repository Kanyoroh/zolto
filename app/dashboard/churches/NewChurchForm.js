import React, { useState } from "react";
import NewChurch from "@soteriaapi/churches/NewChurch";

const NewChurchForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    church_name: "",
    church_contact: "",
    church_address: "",
    pastor_name: "",
    pastor_contact: "",
    church_category_id: "",
    email_address: "",
    church_logo_url: null,
    church_branch: "",
    church_location: "",
    status: "active",
    church_slogan: "",
    church_coordinates: "",
    initials: "",
    church_description: "",
    church_coordinates: "-1.2698253,36.8214169",
   // coverPhoto: null
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await NewChurch(formData);
      console.log(response);
      // Handle success - perhaps set a success message or perform other actions
      setSuccessMessage("Church created successfully!");
      onSubmit(response); // You can pass the response to the onSubmit function
    } catch (error) {
      // Handle error
      setError("Error creating church. Please try again."); // Set error message
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="lg:col-span-1">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Church Name
          </label>
          <input
            type="text"
            id="church_name"
            name="church_name"
            value={formData.church_name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter church name"
            required
          />
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Short Form
          </label>
          <input
            type="text"
            id="initials"
            name="initials"
            value={formData.initials}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Short form of church name"
            // required
          />
        </div>
        <div className="lg:col-span-1">
          <label htmlFor="pastorsName" className="block text-gray-700">
            Church Branch
          </label>
          <input
            type="text"
            id="church_branch"
            name="church_branch"
            value={formData.church_branch}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Branch e.g Main"
            required
          />
        </div>
        <div className=" lg:col-span-1">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Church email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16"
              >
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              name="email_address"
              id="email_address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formData.email_address}
              onChange={handleChange}
              placeholder="churchmail@soteriaapp.org"
              required
            />
          </div>
        </div>
        <div className="lg:col-span-1">
          <label htmlFor="pastorsName" className="block text-gray-700">
            Pastor's Name
          </label>
          <input
            type="text"
            id="pastor_name"
            name="pastor_name"
            value={formData.pastor_name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter pastor's name"
            required
          />
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="phone-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pastors Phone number:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </div>
            <input
              type="text"
              id="pastor_contact"
              name="pastor_contact"
              value={formData.pastor_contact}
              onChange={handleChange}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="+254 700 000 000"
              required
            />
          </div>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Select a phone number that matches the format.
          </p>
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="phone-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Church Phone number:
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </div>
            <input
              type="text"
              id="church_contact"
              name="church_contact"
              value={formData.church_contact}
              onChange={handleChange}
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="+254 705 035 022"
              required
            />
          </div>
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Select a phone number that matches the format.
          </p>
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Church Slogan
          </label>
          <input
            type="text"
            id="church_slogan"
            name="church_slogan"
            value={formData.church_slogan}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter church name"
            //required
          />
        </div>
        <div className="lg:col-span-1">
          <label htmlFor="pastorsName" className="block text-gray-700">
            Church Category
          </label>
          <input
            type="text"
            id="church_category_id"
            name="church_category_id"
            value={formData.church_category_id}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="DropDown Here"
            required
          />
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Church Location
          </label>
          <input
            type="text"
            id="church_location"
            name="church_location"
            value={formData.church_location}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter church Location from Map"
            required
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Paste Maps URL here after searching on maps.
          </p>
        </div>
        <div className="lg:col-span-1">
          <label
            htmlFor="base-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Church Address
          </label>
          <input
            type="text"
            id="church_address"
            name="church_address"
            value={formData.church_address}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter church Adress PO BOX 0000-0000"
            required
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            Post Office adress or Physical Adress.
          </p>
        </div>

        <div className="mb-4 lg:col-span-1 flex justify-between">
          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">
              Upload Cover Photo
            </span>
            <input
              type="file"
              className="hidden"
              name="coverPhoto"
              id="coverPhoto"
              onChange={e => {
                const file = e.target.files[0];
                // Logic to handle file upload and display here
                setFormData({ ...formData, coverPhoto: file });
              }}
            />
            {formData.coverPhoto &&
              <div className="lg:col-span-1 flex items-center">
                <span className="block w-full bg-gray-200 rounded overflow-hidden">
                  {/* Display uploaded file icon or preview */}
                  <img
                    src={URL.createObjectURL(formData.coverPhoto)}
                    alt="Uploaded File"
                  />
                </span>
              </div>}
          </label>

          <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
            <svg
              className="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            <span className="mt-2 text-base leading-normal">
              Upload Profile Photo
            </span>
            <input
              type="file"
              name="church_logo_url"
              id="church_logo_url"
              className="hidden"
              onChange={e => {
                const file = e.target.files[0];
                // Logic to handle file upload and display here
                setFormData({ ...formData, church_logo_url: file });
              }}
            />
            {formData.church_logo_url &&
              <div className="lg:col-span-1 flex items-center">
                <span className="block w-full bg-gray-200 rounded overflow-hidden">
                  {/* Display uploaded file icon or preview */}
                  <img
                    src={URL.createObjectURL(formData.church_logo_url)}
                    alt="Uploaded File"
                  />
                </span>
              </div>}
          </label>
        </div>
        <div className="mb-4 lg:col-span-1 flex justify-between">
          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 12 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"
                      />
                    </svg>
                    <span class="sr-only">Attach file</span>
                  </button>
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    <span class="sr-only">Embed map</span>
                  </button>
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                    <span class="sr-only">Upload image</span>
                  </button>
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                      <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                    </svg>
                    <span class="sr-only">Format code</span>
                  </button>
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z" />
                    </svg>
                    <span class="sr-only">Add emoji</span>
                  </button>
                </div>
                <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 21 18"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"
                      />
                    </svg>
                    <span class="sr-only">Add list</span>
                  </button>
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
                    </svg>
                    <span class="sr-only">Settings</span>
                  </button>
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                      <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                    </svg>
                    <span class="sr-only">Timeline</span>
                  </button>
                  <button
                    type="button"
                    class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                  >
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                      <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Download</span>
                  </button>
                </div>
              </div>
              <button
                type="button"
                data-tooltip-target="tooltip-fullscreen"
                class="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
              >
                <svg
                  class="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 19"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"
                  />
                </svg>
                <span class="sr-only">Full screen</span>
              </button>
              <div
                id="tooltip-fullscreen"
                role="tooltip"
                class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Show full screen
                <div class="tooltip-arrow" data-popper-arrow />
              </div>
            </div>
            <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
              <label for="editor" class="sr-only">
                Publish post
              </label>
              <textarea
                id="church_description"
                name = "church_description"
                value={formData.church_description}
                onChange={handleChange}
                rows="8"
                class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a church description here..."
                required
              />
            </div>
          </div>         
        </div>



        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none col-span-full"
        >
          Create Church
        </button>
      </form>
      {successMessage &&
        <div className="text-green-500">
          {successMessage}
        </div>}{" "}
      {/* Display success message */}
    </div>
  );
};

export default NewChurchForm;
