import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiMovies from '../../services/apiMovies'

const index = ({filmes}) => {

    return (

        <Pagina titulo="Filmes">

            <Row className="px-1 mx-1">
                {filmes.map(item => (
                    <Col key={item.id} md={3} className="mb-4" >
                        <Card>
                            <Card.Img style={{ Width: '100%', height: '100%' }} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} alt={item.title} />
                            <Card.Body className='bg-secondary text-white'>
                                <Card.Title>{item.title}</Card.Title>
                                <p className='textwhite'>Lançamento: <strong>{item.release_date}</strong></p>
                                <div className="d-flex flex-column align-items-end">
                                    <Link href={'/movies/' + item.id} className='btn btn-info text-white'>Detalhes</Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiMovies.get("/movie/popular/?language=pt-BR")
    const filmes = resultado.data.results

    return {
      props: {filmes}
    }
  }