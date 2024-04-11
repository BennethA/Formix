import React from 'react'

const FirstPage = ({data, setData, handleFirstComponent}) => {
  return (
    <div>
      <div className="font-bold text-2xl mt-10 mb-5">Let's get started!</div>
      <div>
        <form onSubmit={handleFirstComponent}>
          <div className="mb-20">
            <div className="flex mb-4 justify-between">
              <div className="flex flex-col w-1/2 pr-4">
                <label htmlFor="firstName" className="text-gray-700 mb-2">
                  First Name
                </label> 
                <input type="text" 
                placeholder="firstname" 
                className="p-3 border-[0.5px] border-gray-500 rounded-lg text-gray-950 font-semibold"
                onChange={(e) => setData({...data, firstName: e.target.value})}/>
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="surname" className="text-gray-700 mb-2">
                  Surname
                </label>
                <input 
                type="text" 
                placeholder="surname" className="p-3 border-[0.5px] border-gray-500 rounded-lg text-gray-950 font-semibold"
                onChange={(e) => setData({...data, surname: e.target.value})}/>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-gray-700 mb-2">
                Email
              </label>
              <input 
              type="email" 
              placeholder="email" 
              className="p-3 border-[0.5px] border-gray-500 rounded-lg text-gray-950 font-semibold"
              onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div className="flex mb-4 justify-between">
              <div className="flex flex-col w-1/2 pr-4">
                <label htmlFor="country" className="text-gray-700 mb-2">
                  Country
                </label>
                <input 
                type="text" 
                placeholder="country" 
                className="p-3 border-[0.5px] border-gray-500 rounded-lg text-gray-950 font-semibold"
                onChange={(e) => setData({...data, country: e.target.value})}/>
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="region" className="text-gray-700 mb-2">
                  Region
                </label>
                <input 
                type="text" 
                placeholder="region" 
                className="p-3 border-[0.5px] border-gray-500 rounded-lg text-gray-950 font-semibold"
                onChange={(e) => setData({...data, region: e.target.value})}/>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-gray-700 mb-2">
                Phone Number
              </label>
              <input 
              type="number" 
              placeholder="phone" 
              className="p-3 border-[0.5px] border-gray-500 rounded-lg text-gray-950 font-semibold"
              onChange={(e) => setData({...data, number: e.target.value})}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FirstPage