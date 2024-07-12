import { useState } from 'react';
import axios from 'axios';
import { Sequelize, Model, DataTypes } from 'sequelize';

import mariadb from 'mariadb';

const props = [
  {
    fields: [],
  },
];

const sequelize = new Sequelize('sqlite::memory:');
// export default connection;

function App() {
  const [count, setCount] = useState(0);
  console.log(props);
  let data = [
    {
      id: 1,
      address: [{}],
    },
  ];

  return (
    <>
      <div>data</div>
    </>
  );
}

export default App;
