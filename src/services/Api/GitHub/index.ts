import axios from "axios";

export abstract class GitHubApi{
    protected static _httpClient = axios.create({
        baseURL:  'https://api.github.com'
    })
}