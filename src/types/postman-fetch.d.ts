declare module 'postman-fetch' {
  export default class PostmanFetch {
    constructor(postmanCollection: any, options: any);
    fetch: (postmanFetchKey: string, options: any) => any;
    setVariables: (vars: object) => void;
  }
}
