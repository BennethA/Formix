/* eslint-disable react/prop-types */

const FinalizeTable = ({ products }) => {
  return (
    <table className="w-full">
      <thead className="bg-[#eeeefcb9]">
        <tr className="border-b-2">
          <th className="py-4 border-r">No.</th>
          <th className="py-4">Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      {products.map((info, index) => (
        <tbody className="font-semibold text-sm" key={index}>
          <tr className="border-b-2">
            <td className="py-3 text-center border-r">{index + 1}</td>
            <td className="py-3 text-center">{info.name}</td>
            <td className="py-3 text-center">{info.quantity}</td>
            <td className="py-3 text-center">{info.price}</td>
            <td className="py-3 text-center">{info.total}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default FinalizeTable;

