import PropTypes from 'prop-types';
import { InputLable, InputBox } from './Filter.styled';

export const Filter = () => {
  return (
    <InputLable>
      Find contacts by name
      <InputBox type="text" name="filter" />
    </InputLable>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
  filter: PropTypes.string,
};
