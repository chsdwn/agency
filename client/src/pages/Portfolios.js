import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPortfolios } from 'api/portfolios'
import { Portfolio, PortfolioModal } from 'components'

export const Portfolios = () => {
  const navigate = useNavigate()

  const [portfolioId, setPortfolioId] = useState(null)
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    getPortfolios().then(setPortfolios)
  }, [])

  const handlePortfolioModalClose = () => {
    setPortfolioId(null)
  }

  const handlePortfolioClick = (id) => {
    return () => {
      setPortfolioId(id)
    }
  }

  return (
    <>
      {portfolioId && (<PortfolioModal id={portfolioId} onClose={handlePortfolioModalClose} />)}

      <section className='page-section bg-light' id='portfolio'>
        <div className='container'>
          <div className='text-center'>
            <h2 className='section-heading text-uppercase'>Portfolio</h2>
            <h3 className='section-subheading text-muted'>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>

          <div className='row'>
            {portfolios.map((portfolio) => (
              <Portfolio
                key={`portfolio-${portfolio._id}`}
                image={portfolio.imageUrl}
                client={portfolio.client}
                category={portfolio.category}
                onClick={handlePortfolioClick(portfolio._id)}
              />
            ))}
          </div>
        </div>
        <div className='text-center'>
          <button
            className='btn btn-primary btn-xl text-uppercase'
            type='submit'
            onClick={() => navigate('/add')}
          >
            Add Portfolio
          </button>
        </div>
      </section>
    </>
  )
}
