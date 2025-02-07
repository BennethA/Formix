/* eslint-disable react/prop-types */

import { useState } from "react";
import FinalizeTable from "./Finalize-Table";
import TotalAmount from "./Total-Amount.jsx";
import { useEffect } from "react";

const FinalizePurchase = ({ data }) => {
  const calculateTotalCost = () => {
    let totalCost = 0;
    data.products.forEach((product) => {
      totalCost += parseFloat(product.total);
    });
    return totalCost;
  };

  const printDocument = () => {
    const printableArea = document.getElementById("printableArea").innerHTML;
    const printWindow = window.open("", "", "height=500,width=800");
    const styles = `@media print {
  * {
    font-family: Arial, sans-serif;
    color: #000;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background-color: #eeeefcb9;
    -webkit-print-color-adjust: exact;
  }

  th, td {
    padding: 6pt;
    text-align: center;
    border: 1pt solid #eeeefcb9;
    -webkit-print-color-adjust: exact;
  }

  .total-amount {
    display: flex;
    margin-top: 12pt;
    background-color: #eeeefcb9;
    justify-content: space-between;
    -webkit-print-color-adjust: exact;
  }

  .total-amount p {
    font-size: 18pt;
    font-weight: bold;
  }

  .names {
    text-decoration: underline dashed;
  }
}

`;
    printWindow.document.write(`
      <html>
        <head>
          <title>Finalize Purchase</title>
          <style>${styles}</style>
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

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();

    setCurrentDate(date.toLocaleDateString());
  }, []);

  return (
    <div className="mb-[20px]">
      <div>
        <h1 className="font-semibold text-[35px] mt-14 font-serif mb-8">
          Finalize Purchase
        </h1>
        <div id="printableArea" className="mb-[20px] flex flex-col gap-8">
          <div>
            <p className="flex items-center justify-between gap-7">
              <span className="text-xl">Date: </span>
              <span className=" w-full text-end font-bold py-1">
                {currentDate}
              </span>
            </p>
            <p className="text-xl flex items-center justify-between gap-7">
              <span>From: </span>
              <span className="names border-b-black border-b border-dashed w-full text-end font-bold font-serif py-1">
                {data.companyName}
              </span>
            </p>
            <p className="text-xl flex items-center justify-between gap-7">
              <span>To: </span>
              <span className="names border-b-black border-b border-dashed w-full text-end font-bold font-serif py-1">
                {data.customerName}
              </span>
            </p>
            <p className="text-xl flex items-center justify-between gap-7">
              <span className="w-full">Company number: </span>
              <span className="names w-full text-end py-1 text-gray-700">
                {data.companyNumber}
              </span>
            </p>
          </div>
          <FinalizeTable products={data.products} />
          <TotalAmount totalCost={calculateTotalCost()} />
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
