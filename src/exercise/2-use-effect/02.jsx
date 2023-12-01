import { useState, useEffect } from 'react';

const NAME_KEY = 'name';

const getInitialName = (key, defaultValue) => {
  const storedItem = localStorage.getItem(key);

  if(!storedItem) {
    return defaultValue
  }

  try {
    return JSON.parse(storedItem);
  } catch(e) {
    localStorage.removeItem(key);
    return defaultValue;
  }
}

const useStickyState = ({key, defaultValue}) => {
  
  const [name, setName] = useState(() => getInitialName(key, defaultValue)) ;

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(name));
  }, [key, name])

  return [name, setName];

}


const NameInput = ({ defaultValue }) => {

  const [name, setName] = useStickyState(NAME_KEY, defaultValue);

  return (
    <label className="textfield">
      Name
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </label>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    if (!checked) return;

    const handleResize = () => {
      setCounter((curr) => curr+1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [checked]);

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <input type='checkbox' checked={checked} onChange={e => setChecked(e.target.checked)}></input>
      {console.log(checked?'oui':'non')}
    </>
  )
}

const App = () => {
  

  return (
    <div className="vertical-stack">
      <Counter/>
      <NameInput defaultValue="" />
    </div>
  );
};

export default App;
