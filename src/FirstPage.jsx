import React from 'react'

const FirstPage = ({data, setData, handleFirstComponent}) => {
  return (
    <div>
      <div className="font-bold text-lg mt-10 mb-5">Let's get started!</div>
      <div>
        <form onSubmit={handleFirstComponent}>
          <div className="mb-20">
            <div className="flex mb-4 justify-between space-x-4">
              <div className="flex flex-col flex-grow">
                <label htmlFor="firstName" className="text-gray-500">
                  First Name
                </label> 
                <input type="text" 
                placeholder="firstname" 
                className="border-2 border-gray-500 p-1 rounded-lg"
                onChange={(e) => setData({...data, firstName: e.target.value})}/>
              </div>
              <div className="flex flex-col flex-grow">
                <label htmlFor="surname" className="text-gray-500">
                  Surname
                </label>
                <input 
                type="text" 
                placeholder="surname" className="border-2 border-gray-500 p-1 rounded-lg"
                onChange={(e) => setData({...data, surname: e.target.value})}/>
              </div>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-gray-500">
                Email
              </label>
              <input 
              type="email" 
              placeholder="email" 
              className="border-2 border-gray-500 p-1 rounded-lg"
              onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div className="flex mb-4 justify-between space-x-4">
              <div className="flex flex-col flex-grow">
                <label htmlFor="country" className="text-gray-500">
                  Country
                </label>
                <input 
                type="text" 
                placeholder="country" 
                className="border-2 border-gray-500 p-1 rounded-lg"
                onChange={(e) => setData({...data, country: e.target.value})}/>
              </div>
              <div className="flex flex-col flex-grow">
                <label htmlFor="region" className="text-gray-500">
                  Region
                </label>
                <input 
                type="text" 
                placeholder="region" 
                className="border-2 border-gray-500 p-1 rounded-lg"
                onChange={(e) => setData({...data, region: e.target.value})}/>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="phoneNumber" className="text-gray-500">
                Phone Number
              </label>
              <input 
              type="number" 
              placeholder="phone" 
              className="border-2 border-gray-500 p-1 rounded-lg"
              onChange={(e) => setData({...data, number: e.target.value})}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FirstPage