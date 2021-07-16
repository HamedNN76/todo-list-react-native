import * as React from 'react';

export const navigationRef: React.RefObject<any> = React.createRef();
export const isReadyRef: React.RefObject<any> = React.createRef();

export function navigate(name: string, params?: any) {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}
