import React from 'react'
import ProjectNavStyles from './ProjectsNavStyles'
import { Link } from '../../i18n'
import Fontp from '../../styles/fontsStyles/Fontp'
import { withTranslation, i18n } from "../../i18n";

function ProjectsNav(props) {
  const { backLink, nextLink, color, t } = props;
  return (
    <ProjectNavStyles color={color}>
      <Link href={backLink}>
        <a><Fontp color={color}>{i18n.language === 'es' || !i18n.language ? "← Atrás" :  "← Previous"}</Fontp></a>
      </Link>
      <Link href={nextLink}>
        
        <a><Fontp color={color}>{i18n.language === 'es' || !i18n.language ? "Siguiente →" :  "Next →"}</Fontp></a>
      </Link>
    </ProjectNavStyles>
  )
}

export default withTranslation()(ProjectsNav)