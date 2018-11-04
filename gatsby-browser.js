import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import netlifyIdentity from 'netlify-identity-widget'
import 'leaflet/dist/leaflet.css'

window.netlifyIdentity = netlifyIdentity

library.add(faCheck, faTimes)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Buefy)
