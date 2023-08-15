import { Input } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <Input
        type="text"
        name="filter"
        onChange={({ target: { value } }) => dispatch(setFilter(value))}
        value={filter}
      />
    </>
  );
};
