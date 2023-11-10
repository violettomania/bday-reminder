import { useState } from 'react';

import Person from './Person';
import { data } from '../data';

function App() {
  const [people, setPeople] = useState(data);

  const handleClick = () => (people.length ? setPeople([]) : setPeople(data));

  return (
    <main>
      <div className='container'>
        <h2>{`${people.length} Birthdays Today`}</h2>
        {people.map((person) => (
          <Person key={person.id} {...person} />
        ))}
        <button onClick={handleClick}>
          {people.length ? 'clear all' : 'reload'}
        </button>
      </div>
    </main>
  );
}

export default App;
