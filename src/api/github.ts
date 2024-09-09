import type { ILang, IRepos } from "@/types/portfolio";
import { Octokit } from "octokit"

const octokit = new Octokit({ 
    auth: import.meta.env.VITE_API_KEY
});

export const getRepos = async (): Promise<IRepos[]> => {
    try {
        const fetchResponse = await octokit.request("GET /users/kozlova-ut/repos");
        const response = await fetchResponse.data;
        return response;
    } catch(err) {
        throw new Error('repos response was not ok');
    }
}

export const getLang = async (repos: string): Promise<ILang> => {
    try {
        const fetchResponse = await octokit.request(`GET /repos/kozlova-ut/${repos}/languages`);
        const response = await fetchResponse.data;
        return response;
    } catch(err) {
        throw new Error('lang response was not ok')
    }
}