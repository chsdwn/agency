import React, { useEffect } from 'react'
import { Footer, Header, Navigation } from 'components'
import { About, Clients, Contact, Portfolios, Services, Team } from 'pages'

const navbarEvent = () => {
  // Navbar shrink function
  const navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
  )
  responsiveNavItems.map((responsiveNavItem) => {
    responsiveNavItem.addEventListener('click', () => {
      if (window.getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.click()
      }
    })
  })
}

function App () {
  useEffect(() => {
    window.addEventListener('DOMContentLoaded', navbarEvent)
    return () => {
      window.removeEventListener('DOMContentLoaded', navbarEvent)
    }
  })

  return (
    <>
      <Navigation />
      <Header />

      <Services />
      <Portfolios />
      <About />
      <Team />
      <Clients />
      <Contact />

      <Footer />

    </>
  )
}

export default App
