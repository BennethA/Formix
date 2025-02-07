/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import Steps from "../components/Steps";
import CompanyDetails from "../components/Company-Details";
import CustomerDetails from "../components/Customer-Details";
import ProductDetails from "../components/Product-Details";
import FinalizePurchase from "../components/Finalize-Purchase";

function AgreementPage() {
  const [noProducts, setNoProducts] = useState(false);

  const steps = Array(4).fill(null);

  const [agreementPage, setAgreementPage] = useState(1);

  const [data, setData] = useState({
    companyName: "Company Name",
    companyEmail: "company123@gmail.com",
    companyLocation: "Accra, Ghana",
    companyAddress: "01 Company Street, Suite 330",
    companyNumber: "0123456789",
    customerName: "",
    customerEmail: "",
    customerLocation: "",
    customerAddress: "",
    customerNumber: "",
    products: [
      {
        name: "",
        quantity: "",
        price: "",
        total: 0,
      },
    ],
    overall: 0,
  });

  const handlePrevAgreement = () => {
    setAgreementPage(agreementPage - 1);
  };

  const handleInformation = (e) => {
    e.preventDefault();
    if (agreementPage === 3 && data.products.length <= 0) {
      setNoProducts(true);
      return;
    } else {
      setAgreementPage(agreementPage + 1);
      console.log(data);
      setNoProducts(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-svh justify-center overflow-auto">
        <div className="bg-[#000000fb] min-h-sv text-white p-[54px] md:w-[39%] md:fixed md:left-0 md:h-full">
          <div className="font-medium text-[27px] mb-[62px] mt-6 font-serif text-[#e6e6e6fb]">
            Formix.
          </div>
          <div className="text-5xl font-bold mb-7 leading-[66px]">
            Let's formalize your purchase invoice.
          </div>
        </div>
        <div className="py-[60px] md:pl-[36px] md:pr-[55px] px-[40px] md:w-[61%] min-h-svh md:absolute md:right-0">
          <Steps agreementPage={agreementPage} steps={steps} />

          {agreementPage === 1 && (
            <CompanyDetails
              data={data}
              setData={setData}
              handleInformation={handleInformation}
            />
          )}
          {agreementPage === 2 && (
            <CustomerDetails
              data={data}
              setData={setData}
              handleInformation={handleInformation}
            />
          )}
          {agreementPage === 3 && (
            <ProductDetails
              data={data}
              setData={setData}
              noProducts={noProducts}
              handleInformation={handleInformation}
            />
          )}
          {agreementPage === 4 && <FinalizePurchase data={data} />}
          {agreementPage > 1 && (
            <button
              className="py-[11px] text-[19px] font-semibold font-sans hover:text-white hover:bg-gray-500 rounded-[30px] text-gray-700 w-full transition-all duration-500"
              onClick={handlePrevAgreement}
            >
              Previous step
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default AgreementPage;
