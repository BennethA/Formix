import { useState } from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import Image from './assets/image.jpg'
import { FaCircle, FaStar } from 'react-icons/fa'
import { FaCircleDot } from 'react-icons/fa6'

function App() {
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
  const [currentComponent, setCurrentComponent] = useState(1)

  const handleNextStep = () => {
    currentComponent === 4 ? "" : setCurrentComponent(currentComponent + 1)
  }

  const handlePrevStep = () => {
    setCurrentComponent(currentComponent - 1)
  }

  const handleFirstComponent = () => {
    console.log(data);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-svh justify-center overflow-auto"> 
        <div className="bg-[#080808fb] min-h-svh text-white p-[60px] md:w-[39%]" >
          <div className="font-medium text-3xl mb-[55px] mt-10 font-serif">Formix.</div>
          <div className="text-5xl font-bold mb-12 leading-[60px]">Let's formalize your operating agreement</div>
          <div className="leading-7 mb-[110px] text-2xl font-semibold text-gray-300">
            The faster you finish the operating agreement process, the sooner customers can access your profile
          </div>
          <div className="bg-gradient-to-b from-[#3a4644b0] to-[#222726b0] p-5 rounded-lg mt-10">
            <div className="mb-4 flex">
              {stars.map((star, index) => <FaStar className='mr-3' key={index}/>)}
            </div>
            <div className="text-sm">
              <em>The business product is seriously a game change. It's got these awesome features that just make our daily grind so much easier, and it fits right into our workflow</em>
            </div>
            <div className='flex mt-7 items-center flex-wrap'>
              <img src={Image} alt="" className='w-[60px] rounded-full mr-3'/>
              <p className='font-normal'>David Gorrex</p>
            </div>
          </div>
        </div>
        <div className='py-[60px] px-[40px] pr-[65px] w-full md:w-[61%] min-h-svh'>
          <div className='flex justify-between mt-10'>
            {
              steps.map((step, index) => <>
                <FaCircle className={`transition-all border-[2.23px] rounded-xl p-[3px] text-2xl ${currentComponent > index  ? 'text-black border-black' : 'text-gray-300 border-gray-300 '}`} key={index}/>
                {index < steps.length - 1 && (
                  <hr className={` transition-all flex-1 h-1 m-2 ${currentComponent > index + 1 ? 'bg-black' : 'bg-gray-500'}`}></hr>
                )}
              </>)
            }
          </div>
          {currentComponent === 1 && <FirstPage data={data} setData={setData} handleFirstComponent={handleFirstComponent}/>}
          {currentComponent === 2 && <SecondPage/>}
          {currentComponent === 3 && <ThirdPage/>}
          {currentComponent === 4 && <FourthPage/>}
          <div className="flex justify-between">
            {
              currentComponent > 1 
              ? <button className=" font-semibold p-2 hover:bg-gray-500 hover:text-white text-xl font-sans text-gray-700 py-3 px-10 rounded-3xl" onClick={handlePrevStep}>Previous step</button>
              : ''
            }
            <button className="p-2 font-semibold hover:bg-gray-500 hover:text-white text-xl font-sans text-gray-700 py-3 px-10 rounded-3xl" onClick={handleNextStep}>Skip step</button>
            <button onClick={
              () => {
                if(currentComponent === 1) {
                  handleNextStep();
                  handleFirstComponent();
                } else {
                  handleNextStep()
                }
              }} className="text-xl  font-semibold font-sans bg-black text-white py-3 px-10 hover:bg-gray-500 rounded-3xl">Next step</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
