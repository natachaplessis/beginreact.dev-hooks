import { useState } from "react";

const Name = ({name, checked}) => {
  if (!name) {
    return (<p>Write your name</p>)
  } else {
    return (<p>Hello {checked ? name.split('').reverse().join('') : name}</p>)
  }
}

const App = () => {
  const [name, setName] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setName(event.target.value)
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
    </div>
  );
};


export default App;
