import { addFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.filterLabel}>Find contacts by Name </label>
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter filter"
        onChange={event => dispatch(addFilter(event.target.value))}
      />
    </div>
  );
};
