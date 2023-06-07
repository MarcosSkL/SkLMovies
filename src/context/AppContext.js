import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"


export const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState(null)
    const [myList, setMyList] = useState([])

    useEffect(() => {
      onAuthStateChanged(auth,(user) => {
        if (user) {
            setCurrentUser(user)
        } else{
            setCurrentUser(null)
            router.push('/login')
        }
      })
    }, [auth])

    const addToList = (movie) => {
      if(myList.find((listMovie) => movie.id === listMovie.id)){
        return;
      }
      const newMovies = [...myList, movie]
      setMyList(newMovies)

    }

    const removeFromList = (movie) => {
      const newMovies = myList.filter((listMovie) => listMovie.id !== movie.id)
      setMyList(newMovies)
    }
    

    return (
      <AppContext.Provider value={{currentUser, addToList,removeFromList, myList}}>{children}</AppContext.Provider>
    )
  }
  
  export default AppProvider;
