import i18next from "i18next";

import en from "@/locales/en.json";
import es from '@/locales/es.json';
import fr from "@/locales/fr.json";

class Traductor {
    static async initTraductor() {
        i18next.init({
            lng: 'fr', // if you're using a language detector, do not define the lng option
            fallback: 'fr',
            debug: true,
            resources: {
                en: en,
                fr: fr,
                es: es
            }
        })    
    }
    static traduction(key) {
        console.log(key)
        return i18next.t(key)
       
    }
}

export default Traductor