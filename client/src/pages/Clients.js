import React from 'react'

import FacebookLogo from 'assets/img/logos/facebook.svg'
import GoogleLogo from 'assets/img/logos/google.svg'
import MicrosoftLogo from 'assets/img/logos/microsoft.svg'
import IbmLogo from 'assets/img/logos/ibm.svg'

export const Clients = () => {
  return (
    <div className='py-5'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-3 col-sm-6 my-3'>
            <a href='#!'><img className='img-fluid img-brand d-block mx-auto' src={GoogleLogo} alt='...' /></a>
          </div>
          <div className='col-md-3 col-sm-6 my-3'>
            <a href='#!'><img className='img-fluid img-brand d-block mx-auto' src={FacebookLogo} alt='...' /></a>
          </div>
          <div className='col-md-3 col-sm-6 my-3'>
            <a href='#!'><img className='img-fluid img-brand d-block mx-auto' src={MicrosoftLogo} alt='...' /></a>
          </div>
          <div className='col-md-3 col-sm-6 my-3'>
            <a href='#!'><img className='img-fluid img-brand d-block mx-auto' src={IbmLogo} alt='...' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
