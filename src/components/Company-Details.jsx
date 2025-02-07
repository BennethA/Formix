/* eslint-disable react/prop-types */

import CompanyFormField from "./Company-Form-Field";

const CompanyDetails = ({ data, setData, handleInformation }) => {
  const fields = [
    {
      label: "Company Name",
      type: "text",
      value: data.companyName,
      onChange: (e) => setData({ ...data, companyName: e.target.value }),
    },
    {
      label: "Email",
      type: "email",
      value: data.companyEmail,
      onChange: (e) => setData({ ...data, companyEmail: e.target.value }),
    },
    {
      label: "Location",
      type: "text",
      value: data.companyLocation,
      onChange: (e) => setData({ ...data, companyLocation: e.target.value }),
    },
    {
      label: "Address",
      type: "text",
      value: data.companyAddress,
      onChange: (e) => setData({ ...data, companyAddress: e.target.value }),
    },
    {
      label: "Number",
      type: "number",
      value: data.companyNumber,
      onChange: (e) => setData({ ...data, companyNumber: e.target.value }),
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-[35px] font-serif mt-14 mb-8">
        Company Details
      </h1>
      <form onSubmit={handleInformation} className="flex flex-col gap-8">
        {fields.map((field, index) => (
          <CompanyFormField key={index} {...field} />
        ))}

        <button
          type="submit"
          className="py-[11px] w-full text-[19px] font-semibold font-sans bg-black text-white px-8 hover:bg-gray-500 rounded-[30px] transition-all duration-500"
        >
          Next step
        </button>
      </form>
    </div>
  );
};

export default CompanyDetails;
