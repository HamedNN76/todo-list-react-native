import { config } from './../../config';
import PostmanFetch from 'postman-fetch';
import * as postmanCollection from '../../todo-list.postman_collection.json';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

const postmanFetchOptions = {
  variables: {
    baseUrl: config.baseUrl,
    todoListId: '',
  },
  headers: {
    'Content-Type': 'application/json',
  },
  debug: true,
};
export const postmanFetch = new PostmanFetch(
  postmanCollection,
  postmanFetchOptions
);

export const setVariables = postmanFetch.setVariables;

export function fetch<Data>(
  postmanFetchKey: string,
  options: AxiosRequestConfig = {}
) {
  return new Promise<Data>((resolve, reject) => {
    console.log(postmanFetchKey, 'postman fetch key started');
    return postmanFetch
      .fetch(postmanFetchKey, options)
      .then((res: AxiosResponse) => {
        console.log(res.data, postmanFetchKey, 'data postmanFetchKey');
        if (res.status) {
          if (res.status === 200) {
            return resolve(res.data.data);
          } else {
            return reject(res.data);
          }
        } else {
          return reject({
            message: 'No Internet Connection',
          });
        }
      })
      .catch((e: any) => {
        console.log(e, postmanFetchKey, 'error postmanFetchKey');
        reject(e);
      });
  });
}
