import React from 'react'

const FirstPage = ({data, setData, handleFirstComponent}) => {
  return (
    <div>
      <div className="font-semibold text-[35px] mt-14 mb-8">Let's get started!</div>
      <div>
        <form onSubmit={handleFirstComponent}>
          <div className="mb-[60px]">
            <div className="flex mb-6 justify-between">
              <div className="flex flex-col w-[48.5%]">
                <label htmlFor="firstName" className="text-[#818181] mb-2 text-[17px] font-semibold">
                  First Name
                </label> 
                <input type="text" 
                placeholder="firstname"
                className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
                onChange={(e) => setData({...data, firstName: e.target.value})}/>
              </div>
              <div className="flex flex-col w-[48.5%]">
                <label htmlFor="surname" className="text-[#818181] mb-2 text-[17px] font-semibold">
                  Surname
                </label>
                <input 
                type="text" 
                placeholder="surname" className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
                onChange={(e) => setData({...data, surname: e.target.value})}/>
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <label htmlFor="email" className="text-[#818181] mb-2 text-[17px] font-semibold">
                Email
              </label>
              <input 
              type="email" 
              placeholder="email" 
              className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
              onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div className="flex mb-6 justify-between">
              <div className="flex flex-col w-[48.5%]">
                <label htmlFor="country" className="text-[#818181] mb-2 text-[17px] font-semibold">
                  Country
                </label>
                <input 
                type="text" 
                placeholder="country" 
                className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
                onChange={(e) => setData({...data, country: e.target.value})}/>
              </div>
              <div className="flex flex-col w-[48.5%]">
                <label htmlFor="region" className="text-[#818181] mb-2 text-[17px] font-semibold">
                  Region
                </label>
                <input 
                type="text" 
                placeholder="region" 
                className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
                onChange={(e) => setData({...data, region: e.target.value})}/>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-[#818181] mb-2 text-[17px] font-semibold">
                Phone Number
              </label>
              <input 
              type="number" 
              placeholder="phone" 
              className="py-[10px] px-[20px] border-[#b9b9b9c2] border-[1.5px] rounded-lg text-[#4d3e3e] font-medium text-[20px]"
              onChange={(e) => setData({...data, number: e.target.value})}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FirstPage