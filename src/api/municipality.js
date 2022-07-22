import { callAPI } from "./all";
import { BaseURL } from "./util"

export const getAllMunicipalities = async () => {
    return await callAPI(undefined, 'GET', BaseURL + "municipality/");
};

export const createMunicipality = async (municipalityRequest) => {
    const raw = JSON.stringify(municipalityRequest);
    return await callAPI(raw, 'POST', BaseURL + "municipality/");
}

export const getSpecificMunicipality = async (id) => {
    return await callAPI(undefined, 'GET', BaseURL + "municipality/" + id);
}