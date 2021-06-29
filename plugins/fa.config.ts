import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faCodepen } from '@fortawesome/free-brands-svg-icons/faCodepen'

library.add(faBars, faGithub, faTwitter, faCodepen)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

