/* eslint-disable react/prop-types */
const CompanyDetails = ({ data, setData, handleInformation }) => {
  return (
    <div>
      <h1 className="font-semibold text-[35px] mt-14 mb-8">Company Details</h1>
      <form onSubmit={handleInformation} className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label
            htmlFor="companyName"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Company Name
          </label>
          <input
            required
            type="text"
            value={data.companyName}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) => setData({ ...data, companyName: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="companyEmail"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Email
          </label>
          <input
            required
            type="email"
            value={data.companyEmail}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) => setData({ ...data, companyEmail: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="companyLocation"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Location
          </label>
          <input
            required
            type="text"
            value={data.companyLocation}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, companyLocation: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="companyAddress"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Address
          </label>
          <input
            required
            type="text"
            value={data.companyAddress}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, companyAddress: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="companyNumber"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Phone Number
          </label>
          <input
            required
            type="number"
            value={data.companyNumber}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, companyNumber: e.target.value })
            }
          />
        </div>
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
