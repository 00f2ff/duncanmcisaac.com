import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import {
	faFile
} from '@fortawesome/free-solid-svg-icons';

import resume from './../pdfs/duncan_mcisaac_may19_resume.pdf';

export default [
	{
		kind: 'Resume',
		icon: faFile,
		url: resume,
	},
  {
    kind: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/duncan93',
  },
  {
    kind: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/dmcisaac/',
  },
];