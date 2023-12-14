// eslint-disable no-unused-vars
import { useEffect, useState } from 'react';
import { useRef } from 'react';


const useDebounce = (callback, time) => {
  
  const timeoutRef = useRef(null);

  const onDebounce = (...args) => {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      callback(...args)
    }, time);
  };

  return onDebounce;
};

const fetchAgeByName = (name) => {
  return fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json());
};

const useRenderCount = () => {
  const renderCountRef = useRef(0);
  useEffect(() => {
    renderCountRef.current += 1;
  })
  return renderCountRef;
}

const App = () => {
  const [result, setResult] = useState(null);

  const inputRef = useRef(null);

  const onSearch = useDebounce(() => {
    fetchAgeByName(inputRef.current.value).then((data) => {
      setResult(data);
    });
  }, 500);

  const renderCountRef = useRenderCount();

  return (
    <div>
      <input
        type="text"
        ref = {inputRef}
        placeholder="Search bar"
        onChange={() => {
          onSearch();
        }}
      />
      {result ? (
        <div style={{ padding: 16 }}>
          The age for <b>{result.name}</b> is <b>{result.age}</b> and there is{' '}
          <b>{result.count}</b> people with this name.
        </div>
      ) : null}
      <p>{renderCountRef.current}</p>
    </div>
  );
};

export default App;
