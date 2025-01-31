/* eslint-disable react/prop-types */
const ProductDetails = ({
  data,
  setData,
  handleInformation,
}) => {
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedProducts = [...data.products];
    updatedProducts[index][name] = value;

    if (name === "quantity" || name === "price") {
      const quantity = updatedProducts[index].quantity;
      const price = updatedProducts[index].price;
      updatedProducts[index].total = quantity * price;
    }

    setData({ ...data, products: updatedProducts });
  };

  const handleAddProduct = () => {
    const updatedProducts = [...data.products];
    updatedProducts.push({
      name: "",
      quantity: "",
      price: "",
      total: "",
    });
    setData({ ...data, products: updatedProducts });
  };

  const handleRemoveProduct = () => {
    const updatedProducts = [...data.products];
    updatedProducts.pop();
    setData({ ...data, products: updatedProducts });
  };

  const calculateTotalCost = () => {
    const totalCost = data.products.reduce((acc, current) => {
      return acc + parseFloat(current.total);
    }, 0);
    return Math.floor(totalCost);
  };

  return (
    <div>
      <h1 className="font-semibold text-[35px] mt-14 mb-8">Product Details</h1>
      <form
        onSubmit={handleInformation}
        className="mb-[20px] flex flex-col gap-8"
      >
        <table className="w-full mb-[5px]">
          <thead className="bg-[#eeeefcb9]">
            <tr className="border-b-2">
              <th className="py-4">Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          {data.products.map((info, index) => (
            <tbody className="font-semibold text-sm" key={index}>
              <tr className="border-b-2">
                <td className="max-w-[130px]">
                  <input
                    required
                    type="text"
                    name="name"
                    value={data.products[index].name}
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
                    value={data.products[index].quantity}
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
                    value={data.products[index].price}
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
                    value={data.products[index].total}
                    className="py-3 px-2 w-full text-center"
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="bg-[#eeeefcb9] flex justify-between pr-[10%] font-bold p-2 mb-4 items-center">
          <p>Total Amount:</p>
          <p className="text-2xl">
            {calculateTotalCost() > 0 && calculateTotalCost()}
          </p>
        </div>
        <div className="flex sm:justify-between mb-4 flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleAddProduct}
            className="py-[11px] text-[19px] font-semibold font-sans bg-[green] text-white px-8 hover:bg-gray-500 rounded-[30px]"
          >
            Add Product
          </button>
          {data.products.length > 0 && (
            <button
              onClick={handleRemoveProduct}
              className="py-[11px] text-[19px] font-semibold font-sans px-8 hover:bg-red-950 bg-red-500 text-white rounded-[30px]"
            >
              Remove Item
            </button>
          )}
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

export default ProductDetails;
