/* eslint-disable react/prop-types */

const CustomerFormField = ({ label, type, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={label}
        className="text-[#818181] mb-2 text-[17px] font-semibold"
      >
        {label}
      </label>
      <input
        required
        type={type}
        value={value}
        onChange={onChange}
        className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
      />
    </div>
  );
};

export default CustomerFormField;
