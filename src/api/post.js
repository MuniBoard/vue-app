import { callAPI } from "./all";
import { BaseURL } from "./util"

export const getAllPosts = async (municipalityId) => {
    return await callAPI(undefined, 'GET', BaseURL + "municipality/" + municipalityId + "/post/");
};

export const createPost = async (municipalityId, postRequest) => {
    const raw = JSON.stringify(postRequest);
    return await callAPI(raw, 'POST', BaseURL + "municipality/" + municipalityId + "/post/");
}

export const getSpecificPost = async (municipalityId, id) => {
    return await callAPI(undefined, 'GET', BaseURL + "municipality/" + municipalityId + "/post/" + id);
}