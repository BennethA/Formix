import React from 'react'

const FirstPage = ({data, setData, handleFirstComponent}) => {
  return (
    <div>
      <div className="font-semibold text-[35px] mt-14 mb-5">Let's get started!</div>
      <div>
        <form onSubmit={handleFirstComponent}>
          <div className="mb-20">
            <div className="flex mb-4 justify-between">
              <div className="flex flex-col w-[49%]">
                <label htmlFor="firstName" className="text-[#818181] mb-2 text-[18px] font-semibold">
                  First Name
                </label> 
                <input type="text" 
                placeholder="firstname"
                className="py-2 px-4 border-gray-300 border-[2px] rounded-lg text-gray-800 font-medium text-[22px]"
                onChange={(e) => setData({...data, firstName: e.target.value})}/>
              </div>
              <div className="flex flex-col w-[49%]">
                <label htmlFor="surname" className="text-[#818181] mb-2 text-[18px] font-semibold">
                  Surname
                </label>
                <input 
                type="text" 
                placeholder="surname" className="py-2 px-4 border-gray-300 border-[2px] rounded-lg text-gray-800 font-medium text-[22px]"
                onChange={(e) => setData({...data, surname: e.target.value})}/>
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="email" className="text-[#818181] mb-2 text-[18px] font-semibold">
                Email
              </label>
              <input 
              type="email" 
              placeholder="email" 
              className="py-2 px-4 border-gray-300 border-[2px] rounded-lg text-gray-800 font-medium text-[22px]"
              onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div className="flex mb-4 justify-between">
              <div className="flex flex-col w-[49%]">
                <label htmlFor="country" className="text-[#818181] mb-2 text-[18px] font-semibold">
                  Country
                </label>
                <input 
                type="text" 
                placeholder="country" 
                className="py-2 px-4 border-gray-300 border-[2px] rounded-lg text-gray-800 font-medium text-[22px]"
                onChange={(e) => setData({...data, country: e.target.value})}/>
              </div>
              <div className="flex flex-col w-[49%]">
                <label htmlFor="region" className="text-[#818181] mb-2 text-[18px] font-semibold">
                  Region
                </label>
                <input 
                type="text" 
                placeholder="region" 
                className="py-2 px-4 border-gray-300 border-[2px] rounded-lg text-gray-800 font-medium text-[22px]"
                onChange={(e) => setData({...data, region: e.target.value})}/>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-[#818181] mb-2 text-[18px] font-semibold">
                Phone Number
              </label>
              <input 
              type="number" 
              placeholder="phone" 
              className="py-2 px-4 border-gray-300 border-[2px] rounded-lg text-gray-800 font-medium text-[22px]"
              onChange={(e) => setData({...data, number: e.target.value})}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FirstPage