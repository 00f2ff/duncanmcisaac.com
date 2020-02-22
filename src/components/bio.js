import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SOCIAL from '../constants/social';
import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <div
      style={{
        // display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p style={{lineHeight: 0 }}>
        Trying to add a bit more stability to people's lives. Engineer @ <a href="https://www.kiva.org" target="_blank" rel="noopener noreferrer">kiva.org</a>.
      </p>
      <ul
      className="icon-row"
      style={{ marginBottom: rhythm(1) }}
      >
        {SOCIAL.map(s => (
          <li key={s.kind}>
            <a className="no-box-shadow" href={s.url} target="_blank" rel="noopener noreferrer"> 
              <FontAwesomeIcon
                icon={s.icon}
                color="black;" // todo: reference a var
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
