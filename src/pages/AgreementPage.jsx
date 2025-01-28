/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import CompanyDetails from "../components/CompanyDetails";
import CustomerDetails from "../components/CustomerDetails";
import ProductDetails from "../components/ProductDetails";
import FinalizePurchase from "../components/FinalizePurchase";

function AgreementPage() {
  const steps = Array(4).fill(null);
  const [data, setData] = useState({
    companyName: "Company Name",
    companyEmail: "compMail@gmail.com",
    companyLocation: "Accra, Ghana",
    companyAddress: "01 Company Street, Suite 330",
    companyNumber: "0123456789",
    customerName: "",
    customerEmail: "",
    customerLocation: "",
    customerAddress: "",
    customerNumber: "",
    products: [],
    overall: "",
  });

  const [filled, setFilled] = useState(false);
  const [agreementPage, setAgreementPage] = useState(1);

  const handleNextAgreement = () => {
    if (
      !data.companyName ||
      !data.companyEmail ||
      !data.companyLocation === "" ||
      !data.companyAddress === "" ||
      !data.companyNumber === "" ||
      (agreementPage === 2
        ? !data.customerName === "" ||
          !data.customerEmail === "" ||
          !data.customerLocation === "" ||
          !data.customerAddress === "" ||
          !data.customerNumber === "" ||
          !!data.products.every(
            (product) =>
              !product.name === "" ||
              !product.quantity === "" ||
              !product.price === "" ||
              !product.total === ""
          )
        : "")
    ) {
      setFilled(true);
      return;
    } else {
      setFilled(false);
    }
    agreementPage === 4 ? "" : setAgreementPage(agreementPage + 1);
  };

  const handlePrevAgreement = () => {
    setAgreementPage(agreementPage - 1);
  };

  const handleInformation = () => {
    console.log(data);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-svh justify-center overflow-auto">
        <div className="bg-[#000000fb] min-h-sv text-white p-[54px] md:w-[39%]">
          <div className="font-medium text-[27px] mb-[62px] mt-6 font-serif text-[#e6e6e6fb]">
            Formix.
          </div>
          <div className="text-5xl font-bold mb-7 leading-[66px]">
            Let's formalize your purchase invoice.
          </div>
        </div>
        <div className="py-[60px] md:pl-[36px] md:pr-[55px] px-[40px] md:w-[61%] min-h-svh">
          <div className="flex justify-between items-center mt-9">
            {steps.map((step, index) => (
              <FaCircle
                className={`transition-all duration-300 border rounded-xl p-[3px] text-[22px] ${
                  agreementPage > index
                    ? "text-black border-black"
                    : "text-[#1f1f1f2a] border-[#1f1f1f2a]"
                }`}
                key={index}
              />
              /* {index < steps.length - 1 && (
                  <div className="flex flex-1 h-full items-center">
                    <hr
                      className={`duration-200 transition-all w-full h-[3px] mx-3 ${
                        agreementPage > index + 1
                          ? "bg-black"
                          : "bg-[#1f1f1f2a]"
                      }`}
                    />
                  </div>
                )} */
            ))}
          </div>
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
            <ProductDetails data={data} setData={setData} />
          )}
          {agreementPage === 4 && <FinalizePurchase data={data} />}
          {filled ? <div className="text-red-800">Fill all inputs</div> : ""}
          <div className="flex justify-between flex-col md:flex-row flex-wrap px-2 gap-2">
            {agreementPage > 1 ? (
              <button
                className="py-[11px] text-[19px]  font-semibold font-sans px-8 hover:text-white hover:bg-gray-500 rounded-[30px] text-gray-700"
                onClick={handlePrevAgreement}
              >
                Previous step
              </button>
            ) : (
              ""
            )}
            <button
              onClick={() => {
                handleNextAgreement();
                handleInformation();
              }}
              className="py-[11px] text-[19px] font-semibold font-sans bg-black text-white px-8 hover:bg-gray-500 rounded-[30px]"
            >
              Next step
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgreementPage;
