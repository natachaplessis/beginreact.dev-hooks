import { useReducer } from 'react';

const REDUCER_ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
};

const reducer = (state, {action, value = 1}) => {
  switch (action) {
    case REDUCER_ACTIONS.INCREMENT:
    return state+value;
    case REDUCER_ACTIONS.DECREMENT:
      return state-value;
    case REDUCER_ACTIONS.RESET:
      return 0;
    default : {
      throw new Error('Unknown action.');
    }
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <button onClick={()=>dispatch({action : REDUCER_ACTIONS.DECREMENT, value : 5})}>-5</button>
      <button onClick={()=>dispatch({action : REDUCER_ACTIONS.DECREMENT})}>-</button>
      <button>{count}</button>
      <button onClick={()=>dispatch({action : REDUCER_ACTIONS.INCREMENT})}>+</button>
      <button onClick={()=>dispatch({action : REDUCER_ACTIONS.IN
        CREMENT, value : 5})}>+5</button>
      <br/>
      <button onClick={()=>dispatch({action : REDUCER_ACTIONS.RESET})}>Reset</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
