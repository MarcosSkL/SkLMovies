import axios from "axios";

const apiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTU4OWQ4OWM0MzNmZDFkZDdiMTg5MThhYWY0NmY1MyIsInN1YiI6IjY0MzVlMGU1OTQ1ZDM2MDBkZmM4MGFjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RBFfbTrd_eOpww-WkdbmEqT4vtZQ1_iS6pTgJfvGU88"
    }
})

export default apiMovies