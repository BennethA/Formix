import { useState } from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import Image from './assets/image.jpg'
import { FaCircle, FaStar } from 'react-icons/fa'

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
                <FaCircle className={`transition-all border rounded-xl p-[3px] text-[22px] ${currentComponent > index  ? 'text-black border-black' : 'text-[#1f1f1f2a] border-[#1f1f1f2a]'}`} key={index}/>
                {index < steps.length - 1 && (
                  <div className='flex flex-1 h-full items-center'>
                    <hr className={` transition-all w-full h-[3px] mx-3 ${currentComponent > index + 1 ? 'bg-black' : 'bg-[#1f1f1f2a]'}`}></hr>
                  </div>
                )}
              </>)
            }
          </div>
          {currentComponent === 1 && <FirstPage data={data} setData={setData} handleFirstComponent={handleFirstComponent}/>}
          {currentComponent === 2 && <SecondPage/>}
          {currentComponent === 3 && <ThirdPage/>}
          {currentComponent === 4 && <FourthPage/>}
          <div className="flex justify-between flex-col md:flex-row flex-wrap px-2">
            {
              currentComponent > 1 
              ? <button className="py-[11px] text-[19px]  font-semibold font-sans px-8 hover:text-white hover:bg-gray-500 rounded-[30px] text-gray-700" onClick={handlePrevStep}>Previous step</button>
              : ''
            }
            <button className="py-[11px] text-[19px]  font-semibold font-sans px-8 hover:text-white hover:bg-gray-500 rounded-[30px] text-gray-700" onClick={handleNextStep}>Skip step</button>
            <button onClick={
              () => {
                if(currentComponent === 1) {
                  handleNextStep();
                  handleFirstComponent();
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

export default App
