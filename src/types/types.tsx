import { store } from '../../App';

export type ChildrenProp = any;

export type Store = typeof store;

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
