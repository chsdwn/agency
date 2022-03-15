import React from 'react'
import { Route, Routes as RRRoutes } from 'react-router-dom'
import App from '../App'
import { AddPortfolio, NotFound } from 'pages'

export const Routes = () => {
  return (
    <RRRoutes>
      <Route path='/' element={<App />} />
      <Route path='add' element={<AddPortfolio />} />
      <Route path='edit/:id' element={<AddPortfolio />} />
      <Route path='*' element={<NotFound />} />
    </RRRoutes>
  )
}

export default Routes
