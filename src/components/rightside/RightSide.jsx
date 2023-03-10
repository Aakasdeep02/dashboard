import React from 'react'
import CustomerReview from '../customerreview/CustomerReview'
import UpDates from '../updates/UpDates'
import "./RightSide.css"

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
            <h1>Updates</h1>
            <UpDates/>
        </div>
        <div>
            <h3>Customer Reviews</h3>
            <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide