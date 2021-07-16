export const password =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%!\-_?&*^])(?=\S+$).{8,}/;
export const toLocalStringRegex = /\B(?=(\d{3})+(?!\d))/g;
export const splitFourPartRegex = /.{1,4}/g;
export const camelCase = /([a-z0-9]|(?=[A-Z]))([A-Z])/g;
