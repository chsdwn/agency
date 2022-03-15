import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getPortfolio } from 'api/portfolios'
import { portfolio as portfolioObj } from 'types/portfolio'

import CloseIcon from 'assets/img/close-icon.svg'

export const PortfolioModal = ({ id, onClose }) => {
  const navigate = useNavigate()

  const [portfolio, setPortfolio] = useState(portfolioObj)

  useEffect(() => {
    getPortfolio(id).then(setPortfolio)
  }, [id])

  const handleEditClick = () => {
    navigate('/edit/' + id)
  }

  return (
    <div className='portfolio-modal modal'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='close-modal' onClick={onClose}>
            <img src={CloseIcon} alt='Close modal' />
          </div>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8'>
                <div className='modal-body'>
                  <h2 className='text-uppercase'>{portfolio.projectName}</h2>
                  <p className='item-intro text-muted'>{portfolio.title}</p>
                  <img className='img-fluid d-block mx-auto' src={portfolio.imageUrl} alt='...' />
                  <p>{portfolio.description}</p>
                  <ul className='list-inline'>
                    <li>
                      <strong>Client:</strong>
                      {portfolio.client}
                    </li>
                    <li>
                      <strong>Category:</strong>
                      {portfolio.category}
                    </li>
                  </ul>
                  <button
                    className='btn btn-primary btn-xl text-uppercase'
                    type='button'
                    onClick={handleEditClick}
                  >
                    Edit Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

PortfolioModal.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func
}
