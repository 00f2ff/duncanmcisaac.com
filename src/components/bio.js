import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SOCIAL from '../constants/social';
import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <div
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        marginBottom: rhythm(1.75),
      }}
    >
      <p>
        Passion is ubiquitous. I help kids find theirs at @ <a className="curious-cardinals" href="https://www.curiouscardinals.com/" target="_blank" rel="noopener noreferrer">Curious Cardinals</a>. Opinions are my own.
      </p>
      <ul
      className="icon-row"
      style={{ marginBottom: rhythm(0.5) }}
      >
        {SOCIAL.map(s => (
          <li key={s.kind}>
            <a className="no-box-shadow icon" href={s.url} target="_blank" rel="noopener noreferrer"> 
              <FontAwesomeIcon
                icon={s.icon}
                color="var(--light-grey)"
                title={`${s.kind}`}
              />
            </a>
          </li>
        ))}
      </ul>
  </div>
  )
}

export default Bio
