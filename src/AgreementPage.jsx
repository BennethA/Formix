import { useState } from 'react'
import AgreementFirstPage from './AgreementFirstPage'
import AgreementSecondPage from './AgreementSecondPage'
import AgreementThirdPage from './AgreementThirdPage'
import AgreementFourthPage from './AgreementFourthPage'
import Image from './assets/image.jpg'
import { FaCircle, FaStar } from 'react-icons/fa'

function AgreementPage() {
  const stars = Array(5).fill(null)
  const steps = Array(4).fill(null)
  const [data, setData] = useState({
    firstName: '',
    surname: '',
    email: '',
    country: '',
    region: '',
    number: ''
})
  const [agreementPage, setAgreementPage] = useState(1)

  const handleNextStep = () => {
    agreementPage === 4 ? "" : setAgreementPage(agreementPage + 1)
  }

  const handlePrevStep = () => {
    setAgreementPage(agreementPage - 1)
  }

  const handleFirstAgreementForm = () => {
    console.log(data);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-svh justify-center overflow-auto"> 
        <div className="bg-[#000000fb] min-h-svh text-white p-[54px] md:w-[39%]" >
          <div className="font-medium text-[27px] mb-[62px] mt-6 font-serif text-[#e6e6e6fb]">Formix.</div>
          <div className="text-5xl font-bold mb-7 leading-[66px]">Let's formalize your operating agreement</div>
          <div className="leading-7 mb-[98px] text-[22.5px] text-[#ebebeb]">
            The faster you finish the operating agreement process, the sooner customers can access your profile
          </div>
          <div className="bg-gradient-to-b from-[#5e607759] to-[#5e607738] p-5 rounded-lg">
            <div className="mb-4 flex">
              {stars.map((star, index) => <FaStar className='mr-3 text-[15px] text-[#ffffffc5]' key={index}/>)}
            </div>
            <div className="text-sm text-[#ffffffd8] leading-4">
              <em>The business product is seriously a game changer. It's got these awesome features that just make our daily grind so much easier, and it fits right into our workflow.</em>
            </div>
            <div className='flex mt-5 items-center flex-wrap'>
              <img src={Image} alt="" className=' w-[55px] h-[55px] rounded-full mr-3'/>
              <p className='text-[14px] font-semibold text-[#ffffff]'>David Gorrez</p>
            </div>
          </div>
        </div>
        <div className='py-[60px] md:pl-[36px] md:pr-[55px] px-[40px] md:w-[61%] min-h-svh'>
          <div className='flex justify-between items-center mt-9'>
            {
              steps.map((step, index) => <>
                <FaCircle className={`transition-all duration-300 border rounded-xl p-[3px] text-[22px] ${agreementPage > index  ? 'text-black border-black' : 'text-[#1f1f1f2a] border-[#1f1f1f2a]'}`} key={index}/>
                {index < steps.length - 1 && (
                  <div className='flex flex-1 h-full items-center'>
                    <hr className={`duration-200 transition-all w-full h-[3px] mx-3 ${agreementPage > index + 1 ? 'bg-black' : 'bg-[#1f1f1f2a]'}`}></hr>
                  </div>
                )}
              </>)
            }
          </div>
          {agreementPage === 1 && <AgreementFirstPage data={data} setData={setData} handleFirstAgreementForm={handleFirstAgreementForm}/>}
          {agreementPage === 2 && <AgreementSecondPage/>}
          {agreementPage === 3 && <AgreementThirdPage/>}
          {agreementPage === 4 && <AgreementFourthPage/>}
          <div className="flex justify-between flex-col md:flex-row flex-wrap px-2">
            {
              agreementPage > 1 
              ? <button className="py-[11px] text-[19px]  font-semibold font-sans px-8 hover:text-white hover:bg-gray-500 rounded-[30px] text-gray-700" onClick={handlePrevStep}>Previous step</button>
              : ''
            }
            <button className="py-[11px] text-[19px]  font-semibold font-sans px-8 hover:text-white hover:bg-gray-500 rounded-[30px] text-gray-700" onClick={handleNextStep}>Skip step</button>
            <button onClick={
              () => {
                if(agreementPage === 1) {
                  handleNextStep();
                  handleFirstAgreementForm();
                } else {
                  handleNextStep()
                }
              }} className="py-[11px] text-[19px] font-semibold font-sans bg-black text-white px-8 hover:bg-gray-500 rounded-[30px]">Next step</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgreementPage