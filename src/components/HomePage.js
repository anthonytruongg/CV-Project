import React from 'react'
import GeneralInformation from './GeneralInformation'
import Educational from './Educational'

import Modal from './Modal'
import Submit from './Submit'

function HomePage() {
  return (
    <div className='text-center'>
        <GeneralInformation />
        <Educational />
    </div>
  )
}

export default HomePage