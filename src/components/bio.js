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
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Trying to add more stability to people's lives. Engineer @ <a className="kiva" href="https://www.kiva.org" target="_blank" rel="noopener noreferrer">kiva.org</a>. Opinions are my own.
      </p>
      <ul
      className="icon-row"
      style={{ marginBottom: rhythm(1) }}
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
