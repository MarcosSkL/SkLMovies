import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";
import Image from "next/image";
import logoskl from "../public/logoskl.png"


export default function Home() {
  return (
<>
    <Pagina>
      <div className="container mx-4 py-4">
        <div>
          <Image src={logoskl} alt="Logo do site" />
        </div>
        <p className="pt-4 bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Loren LorenLoren Loren Loren Loren Loren LorenvLoren
          LorenLoren LorenLoren LLoren LorenLoren LorenLoren Loren
          Loren LorenLoren LorenLoren LorenLoren LorenLoren Loren
          Loren LorenLoren LorenLoren LorenLoren Lorenoren</p>
      </div>
    </Pagina>
</>
  )
}