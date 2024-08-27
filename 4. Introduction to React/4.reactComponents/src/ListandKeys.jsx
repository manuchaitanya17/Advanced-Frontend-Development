import React from 'react';

const ListAndKeys = () => {
  const ids = [1, 2, 3, 4, 5];

  const listItems = ids.map((id) => (
    <li key={id.toString()}>
      {id}
    </li>
  ));

  return (
    <div>
      <h2>List of IDs</h2>
      <ul>
        {listItems}
      </ul>
    </div>
  );
};

export default ListAndKeys;