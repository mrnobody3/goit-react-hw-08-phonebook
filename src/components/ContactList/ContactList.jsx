import PropTypes from 'prop-types';

import { ListGroup, CloseButton } from 'react-bootstrap';

const ContactList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(({ name, number, id }) => (
    <ListGroup.Item
      as="li"
      key={id}
      className="d-flex justify-content-between align-items-start"
    >
      <p>
        {name}: {number}
      </p>
      <CloseButton onClick={() => deleteContact(id)} />
    </ListGroup.Item>
  ));
  return (
    <ListGroup as="ol" numbered className="">
      {elements}
    </ListGroup>
  );
};

export default ContactList;

ContactList.defaultProps = {
  contacts: [],
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
