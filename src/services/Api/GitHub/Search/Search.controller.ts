import { GitHubApi } from "..";

export interface ISearchRepos{
  q: string;
  per_page?: number;
  page?: number;
}

export interface ISearchReposReturn{
  items: any[];
}

export class SearchController extends GitHubApi {
  static async getRepos(params: ISearchRepos) : Promise<ISearchReposReturn>{
    const { data } = await GitHubApi._httpClient.get(`search/repositories`, {params});
   
    return data;
  }
}
