import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Intermediário</span>
          <span>🇧🇷 PT-BR - Ligua Nativa</span>
        </div>
        <SectionTitle text="Formação"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Ciências da Computação (Em andamento) - Universidade Paulista UNIP</span>
        </div>
      </div>
    )
}