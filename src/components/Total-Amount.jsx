/* eslint-disable react/prop-types */

const TotalAmount = ({ totalCost }) => {
  return (
    <div className="total-amount bg-[#eeeefcb9] flex justify-between font-bold p-2 items-center">
      <p>Total Amount:</p>
      <p className="text-2xl pr-[5%]">{totalCost}</p>
    </div>
  );
};

export default TotalAmount;
