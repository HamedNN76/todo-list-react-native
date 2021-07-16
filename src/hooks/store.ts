import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TRootState, TAppDispatch } from '../types/types';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
