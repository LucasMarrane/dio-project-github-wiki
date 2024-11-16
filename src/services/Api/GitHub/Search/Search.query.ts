import { UseQueryResult } from '@tanstack/react-query';
import { useFetch } from '../../../Queries';
import { ISearchRepos, ISearchReposReturn, SearchController } from './Search.controller';

export const useGetGithubRepository = (params: ISearchRepos) => {
    return useFetch({
        params,
        options: { queryFn: SearchController.getRepos } as any,
        mountFetchFunction: (params) => params,
        errorMessage: 'Repository not found.',
        
    }) as UseQueryResult<ISearchReposReturn>;
};
