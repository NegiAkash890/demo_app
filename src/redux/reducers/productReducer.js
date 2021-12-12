import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS,
  FILTER_RESET,
  SEARCH_ITEMS,
} from '../constants/constants';

const initialState = {
  items: [],
  filtered: [],
};

const brandMap = new Map();

brandMap.set('Denim', 0);
brandMap.set('Levi', 1);
brandMap.set('H&M', 2);

const colorMap = new Map();
colorMap.set('white', 0);
colorMap.set('blue', 1);
colorMap.set('grey', 2);

export default function productReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case FETCH_PRODUCTS:
      return { filtered: [...payload], items: [...payload] };
    case FILTER_PRODUCTS:
      const [gender, colors, brands] = payload;
      const dummyState = [...state.items];
      const newFilteredState = dummyState.filter(
        (item) =>
          item.Gender === gender &&
          brands[brandMap.get(item.Brand)] &&
          colors[colorMap.get(item.Color)]
      );
      return { ...state, filtered: [...newFilteredState] };
    case FILTER_RESET:
      return { ...state, filtered: [...state.items] };
    case SEARCH_ITEMS:
      const dummyStateValues = [...state.items];
      const newFilteredStateValues = dummyStateValues.filter((item) =>
        item.Title.toLowerCase().includes(payload.toLowerCase())
      );
      return { ...state, filtered: [...newFilteredStateValues] };
    default:
      return state;
  }
}
