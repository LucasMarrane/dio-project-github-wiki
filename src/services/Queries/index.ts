import { QueryCache, QueryObserver, useInfiniteQuery, UseInfiniteQueryOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { queryClient } from '../../main';

interface IUseQueryWithToast {
    options: UseQueryOptions | UseInfiniteQueryOptions;
    errorMessage?: string;
    isInfinity?: boolean;
}

function useQueryWithToastOnError<T = {}>({ options, errorMessage, isInfinity }: IUseQueryWithToast) {
    if (!options) {
        options = {} as any;
    }

    if (errorMessage) {
        options!.throwOnError = (error, query) => {
            if (error) {
                toast.error(errorMessage, {toastId: `${query?.queryHash}-${query.state.errorUpdatedAt}`});
            }
            return false;
        };
    }

    const query = isInfinity ? useInfiniteQuery<T>(options as any) : useQuery<T>(options as unknown as UseQueryOptions<T>);
    return query;
}

export interface IUseFetch extends IUseQueryWithToast {
    params?: object;
    mountFetchFunction?: (params) => any;
}

export function useFetch<T = {}>({
    errorMessage,
    isInfinity,
    mountFetchFunction = (params) => {
        return { ...params };
    },
    options,
    params,
}: IUseFetch) {
    const key = [Object.entries(params ?? {})];
    return useQueryWithToastOnError<T>({
        options: {
            ...options,
            queryKey: key,
            queryFn: (opt) => {
                if (opt.signal?.aborted) {
                    return Promise.reject('Request was rejected');
                }
                let transfomedParams = {};

                const createdParams = mountFetchFunction({ ...transfomedParams, ...params });
                return (options as any).queryFn(createdParams);
            },
        },
        errorMessage,
        isInfinity,
    });
}
