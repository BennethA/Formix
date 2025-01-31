/* eslint-disable react/prop-types */
const FinalizePurchase = ({ data }) => {
  const calculateTotalCost = () => {
    const totalCost = data.products.reduce((acc, current) => {
      return acc + parseFloat(current.total);
    }, 0);
    return totalCost;
  };

  const printDocument = () => {
    const printableArea = document.getElementById('printableArea').innerHTML;
    const printWindow = window.open('', '', 'height=500,width=800');
    printWindow.document.write(`
      <html>
        <head>
          <title>Finalize Purchase</title>
        </head>
        <body>
          ${printableArea}
        </body>
      </html>
    `);
    printWindow.print();
    printWindow.close();
  };

  // const downloadData = () => {
  //   const jsonData = JSON.stringify(data);
  //   const blob = new Blob([jsonData], { type: 'application/json' });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'purchase-data.json';
  //   a.click();
  // };

  return (
    <div className="mb-[20px]">
      <div id="printableArea">
        <h1 className="font-semibold text-[35px] mt-14 mb-8">Finalize Purchase</h1>
        <div className="mb-[20px] flex flex-col gap-8">
          <div>
            <p className="text-xl flex items-center justify-between gap-7">
              <span>From:</span>
              <span className="border-b-black border-b border-dashed w-full text-end font-bold py-1">
                {data.companyName}
              </span>
            </p>
            <p className="text-xl flex items-center justify-between gap-7">
              <span>To:</span>
              <span className="border-b-black border-b border-dashed w-full text-end font-bold py-1">
                {data.customerName}
              </span>
            </p>
            <p className="text-xl flex items-center justify-between gap-7">
              <span className="w-full">Company number</span>
              <span className="w-full text-end py-1 text-gray-700">
                {data.companyNumber}
              </span>
            </p>
          </div>
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
            {data.products.map((info, index) => (
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
          <div className="bg-[#eeeefcb9] flex justify-between pr-[6%] font-bold p-2 items-center">
            <p>Total Amount:</p>
            <p className="text-2xl">
              {calculateTotalCost() && calculateTotalCost()}
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="py-[11px] w-full text-[19px] font-semibold font-sans bg-black text-white px-8 hover:bg-gray-500 rounded-[30px] transition-all duration-500"
        onClick={() => {
          printDocument();
          // downloadData();
        }}
      >
        Print and Download
      </button>
    </div>
  );
};

export default FinalizePurchase;
