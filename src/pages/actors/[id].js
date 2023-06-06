import React from "react";
import Pagina from "../../components/Pagina";
import apiMovies from "../../services/apiMovies";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";

const Actors = ({ filmesAtores, infAtores, imgAtores, series }) => {
    return (
        <Pagina titulo={infAtores.name}>
            <Row>
                <Col md={3}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + infAtores.profile_path} />

                </Col>
                <Col md={9}>
                    <h3>Biografia</h3>
                    <p>{infAtores.biography}</p>
                    <p><strong>Data de Nascimento: </strong>{infAtores.birthday}</p>
                    <p><strong>Nascido em: </strong>{infAtores.place_of_birth}</p>
                    <p><strong>Departamento: </strong>{infAtores.known_for_department}</p>

                </Col>
            </Row>

            <h2 className="pt-3">Imagens</h2>

            <Row className="my-3">
                {imgAtores.profiles.map((item) => (
                    <Col md={2} key={item.id} className="m-3">

                       <Link href={'https://image.tmdb.org/t/p/w500/' + item.file_path}>
                       <img style={{ Width: 'auto', height: 'auto' }} src={'https://image.tmdb.org/t/p/w500/' + item.file_path} />
                       </Link> 

                    </Col>
                ))}
            </Row>

            <h2>Filmes</h2>

            <Row className="my-3">
                {filmesAtores.cast.map((item) => (
                    <Col key={item.id} className="my-3">
                        <Link href={'../movies/' + item.id} style={{ textDecoration: "none" }} className="text-black">
                            <Card style={{ width: "12rem" }}>
                                <Card.Img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} variant="top" />
                                <Card.Title className="p-2">{item.title}</Card.Title>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>

            <h2>Series</h2>

            <Row className="my-3">
                {series.cast.map((item) => (
                    <Col key={item.id} className="my-3">
                    <Link href={'../series/' + item.id} style={{ textDecoration: "none" }} className="text-black">
                        <Card style={{ width: "12rem" }}>
                            <Card.Img src={'https://image.tmdb.org/t/p/w500/' + item.poster_path} variant="top" />
                            <Card.Title className="p-2">{item.name}</Card.Title>
                        </Card>
                    </Link>
                </Col>
                ))}
            </Row>
        </Pagina>
    );
};

export default Actors;

export async function getServerSideProps(context) {

    const id = context.params.id

    const infAtor = await apiMovies.get('/person/' + id + '?language=pt-BR')
    const ImgAtor = await apiMovies.get('/person/' + id + '/images?language=pt-BR')
    const AtorFilmes = await apiMovies.get('/person/' + id + '/movie_credits?language=pt-BR')
    const seriesAtor = await apiMovies.get('/person/' + id + '/tv_credits?language=pt-BR')
   

    const filmesAtores = AtorFilmes.data
    const infAtores = infAtor.data
    const imgAtores = ImgAtor.data
    const series = seriesAtor.data

    return {
        props: { filmesAtores, infAtores, imgAtores, series },
    }
}