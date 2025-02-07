/* eslint-disable react/prop-types */

import CustomerFormField from "./Customer-Form-Field";

const CustomerDetails = ({ data, setData, handleInformation }) => {
  const fields = [
    {
      label: "Name",
      type: "text",
      value: data.customerName,
      onChange: (e) => setData({ ...data, customerName: e.target.value }),
    },
    {
      label: "Email",
      type: "email",
      value: data.customerEmail,
      onChange: (e) => setData({ ...data, customerEmail: e.target.value }),
    },
    {
      label: "Location",
      type: "text",
      value: data.customerLocation,
      onChange: (e) => setData({ ...data, customerLocation: e.target.value }),
    },
    {
      label: "Address",
      type: "text",
      value: data.customerAddress,
      onChange: (e) => setData({ ...data, customerAddress: e.target.value }),
    },
    {
      label: "Number",
      type: "number",
      value: data.customerNumber,
      onChange: (e) =>
        setData({ ...data, customerNumber: Number(e.target.value) }),
    },
  ];

  return (
    <div>
      <h1 className="font-semibold text-[35px] mt-14 font-serif mb-8">
        Customer Details
      </h1>
      <form
        onSubmit={handleInformation}
        className="mb-[20px] flex flex-col gap-8"
      >
        {fields.map((field, index) => (
          <CustomerFormField key={index} {...field} />
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

export default CustomerDetails;
