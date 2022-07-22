import { BaseURL } from "./util"

export const healthCheck = async () => {
    try {
        await fetch(BaseURL);
        return true;
    }
    catch (e) {
        return false;
    }
}