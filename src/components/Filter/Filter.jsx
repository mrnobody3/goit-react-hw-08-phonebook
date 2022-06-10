import { memo } from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl } from 'react-bootstrap';

const Filter = ({ handleChange, filter }) => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">
        Find contacts by name:
      </InputGroup.Text>
      <FormControl
        placeholder="Enter the name..."
        aria-label="Name"
        aria-describedby="basic-addon1"
        type="text"
        value={filter}
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
    </InputGroup>
  );
};

export default memo(Filter);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
