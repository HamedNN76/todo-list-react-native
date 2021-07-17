import { useCallback, useEffect, useState } from 'react';
import { toast } from '../utils/alert';
import { fetch } from '../utils/fetch';

export type TUseFetchState<Form, Data, Error> = {
  loading: boolean;
  data: Data | null;
  error: Error | null;
  form: Form | null;
};

export type TUseFetchOptions = {
  didMount?: boolean;
  showAlert?: boolean;
  form?: any;
};

export function useFetch<Form, Data, Error>(
  name: string,
  options: TUseFetchOptions = {}
): [
  TUseFetchState<Form, Data, Error>,
  (fetchOptions: TUseFetchOptions) => void,
  (state: TUseFetchState<Form, Data, Error>) => void
] {
  const initialState: TUseFetchState<Form, Data, Error> = {
    loading: false,
    data: null,
    error: null,
    form: null,
  };
  const [state, setState] =
    useState<TUseFetchState<Form, Data, Error>>(initialState);

  const doFetch = useCallback(
    async (fetchOptions: TUseFetchOptions) => {
      console.log('started');
      const { showAlert = true, form } = fetchOptions;
      try {
        setState({
          ...state,
          loading: true,
          form,
        });
        const res = await fetch<Data, Error>(name);
        setState({
          ...state,
          data: res,
          loading: false,
        });
      } catch (e) {
        setState({
          ...state,
          error: e,
          loading: false,
        });
        if (showAlert) {
          toast(e.message);
        }
      }
    },
    [name, state]
  );

  useEffect(() => {
    const { didMount } = options;
    if (didMount) {
      doFetch(options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state, doFetch, setState];
}
