import {toast} from "react-toastify";
import backendURL from "./urls";
import config from "@/data/config";
import {ToastMassages} from "@/common/massages";

/////////////////////// GET //////////////////////////////

/**
 * Получает atms
 */
export const getAtms = async () : Promise<any | null> => {
    try {
        const response = await fetch(backendURL.GET_ATMS_URL);
        const data = await response.json()
        console.log(`api| getAtms`, data)
        return data
    } catch (error) {
        console.log(`api| getAtms`, error)
        return null
    }
}

/**
 * Получает offices
 */
export const getOffices = async () : Promise<any | null> => {
    try {
        const response = await fetch(backendURL.GET_OFFICES_URL);
        const data = await response.json()
        console.log(`api| getOffices`, data)
        return data
    } catch (error) {
        console.log(`api| getOffices`, error)
        return null
    }
}
