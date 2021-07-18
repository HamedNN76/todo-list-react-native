import { useCallback, useEffect, useState } from 'react';
import { toast } from '../utils/alert';
import { fetch } from '../utils/fetch';

export type TUseFetchState<Form, Data, Error> = {
  loading: boolean;
  data: Data | null;
  error: Error | null;
  form: Form | null;
};

export type TUseFetchOptions<Data> = {
  didMount?: boolean;
  showAlert?: boolean;
  form?: any;
  afterSuccess?: (data: Data) => void;
};

export function useFetch<Form, Data, Error>(
  name: string,
  options: TUseFetchOptions<Data> = {}
): [
  TUseFetchState<Form, Data, Error>,
  (fetchOptions?: TUseFetchOptions<Data>) => void,
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
    async (fetchOptions: TUseFetchOptions<Data> = {}) => {
      const { showAlert = true, form, afterSuccess } = fetchOptions;
      try {
        setState({
          ...state,
          loading: true,
          form,
        });
        const res = await fetch<Data>(name, { data: form });
        setState({
          ...state,
          data: res,
          loading: false,
        });
        afterSuccess?.(res);
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
