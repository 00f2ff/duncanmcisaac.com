import {
  faGithub,
  faLinkedin,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

import {
	faFile
} from '@fortawesome/free-solid-svg-icons';

import resume from './../pdfs/duncan_mcisaac_sept_2021_em_resume.pdf';

export default [
	{
		kind: 'Resume',
		icon: faFile,
		url: resume,
	},
  {
    kind: 'GitHub',
    icon: faGithub,
    url: 'https://github.com/00f2ff',
  },
  {
    kind: 'LinkedIn',
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/dmcisaac/',
  },
  {
    kind: 'My lame Twitter',
    icon: faTwitter,
    url: 'https://twitter.com/hi_im_duncan',
  }
];