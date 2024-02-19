import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Pagina from "../components/Pagina";
import Image from "next/image";
import logoskl from "../public/logoskl.png"

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/filmes');
    }, 3000);
  }, []);

  return (
    <>
      <Pagina>
        <div className="container mx-4 py-4">
          <div>
            <Image src={logoskl} alt="Logo do site" />
          </div>
          <p
            className="pt-4 text-3xl text-cyan-300 font-bold"
          >
            Esse é nosso site de entretenimento sobre filmes e series da atualidade. SEJAM BEM VINDOS!!
          </p>
        </div>
      </Pagina>
    </>
  )
}