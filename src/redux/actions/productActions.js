import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  FILTER_RESET,
  SEARCH_ITEMS,
} from '../constants/constants';

export const fetchProducts = (items) => ({
  type: FETCH_PRODUCTS,
  payload: items,
});

export const filterAction = (filters) => ({
  type: FILTER_PRODUCTS,
  payload: filters,
});

export const filterReset = () => ({
  type: FILTER_RESET
});

export const filterSearch = (term) => ({
  type: SEARCH_ITEMS,
  payload: term
});

