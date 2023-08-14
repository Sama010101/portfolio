import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experiências"/>
          <p>Experiências acadêmicas com Desenvolvimento Web e Back End, atuei como estágiario de Desenvolvimento por 1 mês.</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={1} years="1 ano"/>
            <Skill image="/html.png" measure={2} years="2 anos"/>
            <Skill image="/js.png" measure={2} years="2 anos"/>
            <Skill image="/css3.png" measure={2} years="2 anos"/>
            <Skill image="/java.png" measure={1} years="1 anos"/>
          </div>
        </div>
    )
}