import React from 'react'
import PropTypes from 'prop-types'

export const Portfolio = ({ image, client, category, onClick }) => {
  return (
    <div className='col-lg-4 col-sm-6 mb-4'>
      <div className='portfolio-item'>
        <a className='portfolio-link' onClick={onClick}>
          <div className='portfolio-hover'>
            <div className='portfolio-hover-content'><i className='fas fa-plus fa-3x' /></div>
          </div>
          <img className='img-fluid' src={image} alt='...' />
        </a>
        <div className='portfolio-caption'>
          <div className='portfolio-caption-heading'>{client}</div>
          <div className='portfolio-caption-subheading text-muted'>{category}</div>
        </div>
      </div>
    </div>
  )
}

Portfolio.propTypes = {
  image: PropTypes.string,
  client: PropTypes.string,
  category: PropTypes.string,
  onClick: PropTypes.func
}
PropTypes.defaultProps = {
  onClick: () => {}
}
