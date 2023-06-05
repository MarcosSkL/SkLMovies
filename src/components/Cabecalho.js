import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className='container mx-5'>
          <Navbar.Brand href="/"><strong className='text-2xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-3'>SkL Movies</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/movies">Filmes</Nav.Link>
            <Nav.Link href="/series">Series</Nav.Link>
   
          </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default Cabecalho