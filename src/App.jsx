import { FaCircle, FaStar } from 'react-icons/fa'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import FourthPage from './FourthPage'
import Image from './assets/image.jpg'
import { useState } from 'react'
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
    setCurrentComponent(currentComponent + 1)
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
        <div className="bg-black min-h-svh text-white p-5 md:w-1/3" >
          <div className="font-extrabold text-lg mb-12 mt-10">Formix.</div>
          <div className="text-4xl font-bold leading-10 mb-7">Let's formalize your operating agreement</div>
          <div className="leading-6 mb-12">
            The faster you finish the operating agreement process, the sooner customers can access your profile
          </div>
          <div className="bg-gradient-to-b from-[#1f1f1f] to-[#050505] p-5 rounded-lg mt-10">
            <div className="mb-3 flex">
              {stars.map((star, index) => <FaStar className='mr-3' key={index}/>)}
            </div>
            <div className="text-sm">
              The business product is seriously a game change. It's got these awesome features that just make our daily grind so much easier, and it fits right into our qorkflow
            </div>
            <div className='flex mt-5 items-center flex-wrap'>
              <img src={Image} alt="" className='w-12 rounded-full mr-3'/>
              <p className='font-bold'>David Garrex</p>
            </div>
          </div>
        </div>
        <div className=' p-5 w-full min-h-svh'>
          <div className='flex justify-around mt-10'>
            {steps.map((step, index) => <FaCircleDot className={`${currentComponent === index + 1 ? 'text-black' : 'text-gray-400'}`} key={index}/>)}
          </div>
          {currentComponent === 1 && <FirstPage data={data} setData={setData} handleFirstComponent={handleFirstComponent}/>}
          {currentComponent === 2 && <SecondPage/>}
          {currentComponent === 3 && <ThirdPage/>}
          {currentComponent === 4 && <FourthPage/>}
          <div className="flex justify-between">
            {
              currentComponent > 1 
              ? <button className="font-bold p-2 px-5 hover:bg-gray-500 rounded-2xl" onClick={handlePrevStep}>Previous step</button>
              : ''
            }
            <button className="font-bold p-2 px-5 hover:bg-gray-500 rounded-2xl" onClick={handleNextStep}>Skip step</button>
            <button onClick={
              () => {
                if(currentComponent === 1) {
                  handleNextStep();
                  handleFirstComponent();
                } else if(currentComponent === 2 || currentComponent === 3) {
                  handleNextStep()
                }
              }} className="font-bold bg-black text-white p-2 px-5 hover:bg-gray-500 rounded-2xl">Next step</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
