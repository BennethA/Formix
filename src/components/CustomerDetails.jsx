/* eslint-disable react/prop-types */
const CustomerDetails = ({ data, setData, handleInformation }) => {
  return (
    <div>
      <h1 className="font-semibold text-[35px] mt-14 mb-8">Customer Details</h1>
      <form
        onSubmit={handleInformation}
        className="mb-[20px] flex flex-col gap-8"
      >
        <div className="flex flex-col">
          <label
            htmlFor="customerName"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Customer Name
          </label>
          <input
            required
            type="text"
            value={data.customerName}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) => setData({ ...data, customerName: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="customerEmail"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Email
          </label>
          <input
            required
            type="email"
            value={data.customerEmail}
            placeholder="customer123@gmail.com"
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, customerEmail: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="customerLocation"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Location
          </label>
          <input
            required
            type="text"
            value={data.customerLocation}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, customerLocation: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="customerAddress"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Address
          </label>
          <input
            required
            type="text"
            value={data.customerAddress}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, customerAddress: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="customerNumber"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Phone Number
          </label>
          <input
            required
            type="number"
            value={data.customerNumber}
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, customerNumber: Number(e.target.value) })
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

export default CustomerDetails;
