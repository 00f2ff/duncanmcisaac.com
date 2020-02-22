// custom typefaces

import "prismjs/themes/prism.css"

// reload when serviceworker updates (thanks poteto!) - https://github.com/gatsbyjs/gatsby/issues/9087#issuecomment-459105021
export const onServiceWorkerUpdateReady = () => window.location.reload(true);