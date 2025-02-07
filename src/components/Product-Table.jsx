/* eslint-disable react/prop-types */

const ProductTable = ({ products, handleInputChange }) => {
  return (
    <table className="w-full mb-[5px]">
      <thead className="bg-[#eeeefcb9]">
        <tr className="border-b-2">
          <th className="py-4">Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      {products.map((info, index) => (
        <tbody className="font-semibold text-sm" key={index}>
          <tr className="border-b-2">
            <td className="max-w-[130px]">
              <input
                required
                type="text"
                name="name"
                value={products[index].name}
                className="py-3 px-2 w-full text-center"
                onChange={(event) => handleInputChange(index, event)}
              />
            </td>
            <td className="max-w-[1px]">
              <input
                min="0"
                required
                type="number"
                name="quantity"
                value={products[index].quantity}
                className="py-3 px-2 w-full text-center"
                onChange={(event) => handleInputChange(index, event)}
              />
            </td>
            <td className="max-w-[100px]">
              <input
                min="0"
                required
                name="price"
                type="number"
                value={products[index].price}
                className="py-3 px-2 w-full text-center"
                onChange={(event) => handleInputChange(index, event)}
              />
            </td>
            <td className="max-w-[100px]">
              <input
                min="0"
                required
                readOnly
                name="total"
                type="number"
                value={products[index].total}
                className="py-3 px-2 w-full text-center"
              />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ProductTable;


