import axios from "axios";
import { BASE_URL, API_KEY } from "@/libs/consts";
/**
 * @class
 * @classdesc - Service for csv page
 */
class CsvService {

    /**
     * Service to send the list to the api, and receive the pdf list to download
     * @async
     * @param {object[]} csvList - the list that we want to send
     * @return Promise<Object>
     */
    //!!!!!!!!!!!!! jsonList (A inserer dans le paramètre plus tard (sendJsonList))!!!!!!!!!!!!!!!!!!!!!
    static async sendJsonList(){
        // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!(Crée une erreur pour le moment)!!!!!!!!!!!!!!!!!!!!!
        
        try{
            console.log('[Service][CsvService][sendCsvList] Called sendCsvList with params', 
            
            // csvList !!!!!!!!!!!!!!! A décommenté plus tard (csvList) et remettre après la virgule après params
            // (Crée une erreur pour le moment)
            )
            const response = await axios.post(BASE_URL + 'lien html à placer' + API_KEY, {})
            return response
        }catch(e){
            console.error('[Service][CsvService][sendCsvList] An error has occured when sending the list to the api', e)
            throw new Error(e)
        }
    }
}

export default CsvService