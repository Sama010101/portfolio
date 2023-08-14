import Image from "next/image"

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Olá, sou o Samuel!👋</h1>
            <h2>Desenvolvedor Web &#128187;</h2>
          </div>
          <Image
            src="/me-image.jpeg"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}