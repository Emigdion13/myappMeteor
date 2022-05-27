import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueMeteorTracker from 'vue-meteor-tracker';
import es from 'vuetify/es5/locale/es'; //Traer el idioma en espaniol
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);
Vue.use(VueMeteorTracker);

export default new Vuetify({
    theme: {
        options:{
            customProperties: true
        },
        themes:{
            light:{
                primary: colors.blue, // #E53935
                secondary: colors.blue.lighten1, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
                error: '#d64143',
                info: '#5bc0de',
                success: '#5cb85c',
                warning: '#f0ad4e',
            }
        }, icons:{
            iconfont: 'md'
        },
        lang:{
            locales:{
                //es
            },
            //current: 'es'
        }
    }
});