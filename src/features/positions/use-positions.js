import {selectVisiblePositions} from './position-slice';

import {useSelector} from 'react-redux';
import {selectFilters} from 'features/filter/filter-slice';

export const usePositions = () => {
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters),
  );

  return positions;
};
