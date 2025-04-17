import { useDispatch } from 'react-redux';
import type { Dispatch } from 'redux';
import type { AppActions } from '@/store/actions/actions';

export const useAppDispatch = () => useDispatch<Dispatch<AppActions>>();
