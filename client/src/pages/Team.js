import React from 'react'

import TeamPhoto from 'assets/img/team/1.jpg'
import TeamPhoto2 from 'assets/img/team/2.jpg'
import TeamPhoto3 from 'assets/img/team/3.jpg'

export const Team = () => {
  return (
    <section className='page-section bg-light' id='team'>
      <div className='container'>
        <div className='text-center'>
          <h2 className='section-heading text-uppercase'>Our Amazing Team</h2>
          <h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src={TeamPhoto} alt='...' />
              <h4>Parveen Anand</h4>
              <p className='text-muted'>Lead Designer</p>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-twitter' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-linkedin-in' /></a>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src={TeamPhoto2} alt='...' />
              <h4>Diana Petersen</h4>
              <p className='text-muted'>Lead Marketer</p>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-twitter' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-linkedin-in' /></a>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='team-member'>
              <img className='mx-auto rounded-circle' src={TeamPhoto3} alt='...' />
              <h4>Larry Parker</h4>
              <p className='text-muted'>Lead Developer</p>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-twitter' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-facebook-f' /></a>
              <a className='btn btn-dark btn-social mx-2' href='#!'><i className='fab fa-linkedin-in' /></a>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'><p className='large text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
        </div>
      </div>
    </section>
  )
}