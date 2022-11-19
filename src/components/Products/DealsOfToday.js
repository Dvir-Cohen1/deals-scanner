import React, { useEffect, useState } from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import sendRequest from '../../services/TodayDealsAPI'
import DealsOfTodayItem from './DealsOfTodayItem'

function DealsOfToday() {

  const [todayDeals, setTodayDeals] = useState([])

  useEffect(() => {
    sendRequest()
      .then(setTodayDeals)
  }, [])

  // todayDeals.deal_docs.map(item => console.log(item))

  return (
    <section className="mt-12 max-w-screen-xl w-full mx-auto px-4">
      <div className='flex'>
        <h1 className="text-gray-800 text-2xl font-semibold mb-5">
          <AttachMoneyIcon fontSize='medium' />Today Deals
        </h1>
        <button
          onClick={() => sendRequest()}
          className="mx-5 mb-5 px-5 py-2.5 text-white bg-blue-600 rounded-md duration-150 hover:bg-blue-700 active:shadow-lg">
          Send Request
        </button>
      </div>
      <DealsOfTodayItem DealsOfTodayItem={DealsOfTodayItem} />
    </section>
  )
}

export default DealsOfToday