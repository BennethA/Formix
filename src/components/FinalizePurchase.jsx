/* eslint-disable react/prop-types */
const FinalizePurchase = ({ data }) => {
  const calculateTotalCost = () => {
    const totalCost = data.products.reduce((acc, current) => {
      return acc + parseFloat(current.total);
    }, 0);
    return totalCost;
  };
  return (
    <div>
      <h1 className="font-semibold text-[35px] mt-14 mb-8">
        Finalize Purchase
      </h1>
      <div>
        <p className="text-xl">
          From: <span className="border-b-black border-b border-dashed">{data.companyName}</span>
        </p>
        <p className="text-2xl">From: {data.customerName}</p>
      </div>
      <table className="w-full mb-[5px]">
        <thead className="bg-[#eeeefcb9]">
          <tr className="border-b-2">
            <th className="py-4">No.</th>
            <th className="py-4">Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        {data.products.map((info, index) => (
          <tbody className="font-semibold text-sm" key={index}>
            <tr className="border-b-2">
              <td className="py-3 text-center">{index + 1}</td>
              <td className="py-3 text-center">{info.name}</td>
              <td className="py-3 text-center">{info.quantity}</td>
              <td className="py-3 text-center">{info.price}</td>
              <td className="py-3 text-center">{info.total}</td>
            </tr>
          </tbody>
        ))}
      </table>
      <div className="bg-[#eeeefcb9] flex justify-between pr-[10%] font-bold p-2 mb-4 items-center">
        <p>Total Amount:</p>
        <p className="text-2xl">
          {calculateTotalCost() && calculateTotalCost()}
        </p>
      </div>
    </div>
  );
};

export default FinalizePurchase;
