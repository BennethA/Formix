/* eslint-disable react/prop-types */

import ProductTable from "../components/Product-Table.jsx";
import TotalAmount from "./Total-Amount.jsx";

const ProductDetails = ({ data, setData, noProducts, handleInformation }) => {
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
      total: 0,
    });
    setData({ ...data, products: updatedProducts });
  };

  const handleRemoveProduct = () => {
    const updatedProducts = [...data.products];
    updatedProducts.pop();
    setData({ ...data, products: updatedProducts });
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    data.products.forEach((product) => {
      totalCost += parseFloat(product.total);
    });
    return Math.floor(totalCost);
  };

  return (
    <div>
      <h1 className="font-semibold text-[35px] mt-14 font-serif mb-8">
        Product Details
      </h1>
      <form
        onSubmit={handleInformation}
        className="mb-[20px] flex flex-col gap-8"
      >
        <ProductTable
          products={data.products}
          handleInputChange={handleInputChange}
        />
        <TotalAmount totalCost={calculateTotalCost()} />
        {noProducts ? <p className="text-red-700">No Products Added</p> : ""}

        <div className="flex sm:justify-between mb-4 flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleAddProduct}
            className="py-[11px] text-[19px] font-semibold font-sans bg-[green] text-white px-8 hover:bg-gray-500 rounded-[30px]"
          >
            Add Product
          </button>
          {data.products.length > 0 && (
            <p
              onClick={handleRemoveProduct}
              className="py-[11px] cursor-pointer text-[19px] font-semibold font-sans px-8 hover:bg-red-950 bg-red-500 text-white rounded-[30px]"
            >
              Remove Item
            </p>
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
