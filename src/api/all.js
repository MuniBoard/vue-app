import { BaseURL } from "./util";

export const callAPI = async (body = undefined, method = 'GET', url = BaseURL) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const response = await fetch(url, {
        method,
        headers,
        body
    });
    if (response.ok)
        return response.json();
    else 
        throw new Error(response.status);
}