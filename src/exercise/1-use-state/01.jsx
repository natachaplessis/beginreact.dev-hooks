import { useState } from "react";

const Name = ({name, checked}) => {
  if (!name) {
    return (<p>Write your name</p>)
  } else {
    return (<p>Hello {checked ? name.split('').reverse().join('') : name}</p>)
  }
}

const useStateHistory = () => {
  const [history, setHistory] = useState([]);

  const addHistory = (value = '-') => {
    setHistory(current => [...current, value]);
  }

  const deleteHistory = (index) => {
    setHistory(current => {
      current.splice(index,1);
      return [...current];
    })
  }

  return {history, deleteHistory, addHistory}

}


const App = () => {
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);
  const {history, addHistory, deleteHistory} = useStateHistory();

  const handleChange = (event) => {
    setName(event.target.value);
    addHistory(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input type="checkbox" checked={checked} onChange={(event) => (setChecked(event.target.checked))} />
      <Name name={name} checked={checked} />
      <ul>
          {history.map((name, i) => (
            <li key={i} onClick={() => deleteHistory(i)}>{name}</li>
          ))}
    </ul>
    </div>
  );
};


export default App;
