/* eslint-disable react/prop-types */
const CustomerDetails = ({ data, setData, handleInformation }) => {
  return (
    <div>
      <h1 className="font-semibold text-[35px] mt-14 mb-8">Customer Details</h1>
      <form
        onSubmit={handleInformation}
        className="mb-[60px] flex flex-col gap-8"
      >
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Customer Name
          </label>
          <input
            type="email"
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) => setData({ ...data, customerName: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            placeholder="johndoe123@gmail.com"
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, customerEmail: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="location"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Location
          </label>
          <input
            type="text"
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, customerLocation: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="address"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Address
          </label>
          <input
            type="text"
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, customerAddress: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phoneNumber"
            className="text-[#818181] mb-2 text-[17px] font-semibold"
          >
            Phone Number
          </label>
          <input
            type="number"
            placeholder="0123456789"
            className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
            onChange={(e) =>
              setData({ ...data, customerNumber: Number(e.target.value) })
            }
          />
        </div>
      </form>
    </div>
  );
};

export default CustomerDetails