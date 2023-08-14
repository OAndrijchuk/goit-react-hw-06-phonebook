import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { filterChanged } from 'redax/actions';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onCheangedFilter = ({ target: { value } }) => {
    dispatch(filterChanged(value));
  };
  return (
    <>
      <Input
        type="text"
        name="filter"
        onChange={onCheangedFilter}
        value={filter}
      />
    </>
  );
};
