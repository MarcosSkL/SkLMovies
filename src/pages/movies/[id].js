import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiMovies from '../../services/apiMovies'
import Link from 'next/link'

const Detalhes = ({ filme, atores }) => {

    return (
        <Pagina titulo={filme.title}>
            <Row>
                <Col md={3}>
                    <Card.Img style={{ Width: '100%', height: '100%' }} variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />

                </Col>
                <Col md={9} className='text-slate-50'>
                    <h3>Sinopse</h3>
                    <p>{filme.overview}</p>
                    <p><strong>Data de Lançamento: </strong>{filme.release_date}</p>
                    <p><strong>Duração: </strong>{filme.runtime}min</p>
                    <p><strong>Nota: </strong>{filme.vote_average}</p>
                    <div>

                        <ul>
                            {filme.genres.map(item => (

                                <li>{item.name}</li>

                            ))}
                        </ul>
                    </div>

                </Col>
            </Row>


            <h3 className='pt-5 text-slate-50'>Atores</h3>

            <Row className='p-3 text-slate-50'>

                {atores.cast.map(item => (
                    <Col md={2}>


                        <img style={{ Width: '500px', height: '200px' }} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                        <Link href={'/actors/' + item.id} style={{ textDecoration: "none", color: "white"}} ><p><em>{item.name}</em></p></Link>
                    </Col>

                ))}



            </Row>
        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiMovies.get('/movie/' + id + '?language=pt-BR')
    const ator = await apiMovies.get('/movie/' + id + '/credits' + '?language=pt-BR')

    const filme = resultado.data
    const atores = ator.data

    return {
        props: { filme, atores }
    }
}