import {JobPosition} from './JobPosition';
import {addFilter} from '../filter/filter-slice';
import {useDispatch} from 'react-redux';
import {usePositions} from './use-positions';
import {useFetchPositions} from './use-fetch-positions';

const JobList = () => {
  useFetchPositions();
  const dispatch = useDispatch();
  const positions = usePositions();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };
  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export {JobList};
