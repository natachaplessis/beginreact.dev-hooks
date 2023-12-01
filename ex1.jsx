import React, { useState, useEffect } from "react";
import useSWRImmutable from "swr/immutable";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Renard = () => {
  
  const { data, isLoading, mutate, isValidating } = useSWRImmutable(
    "https://randomfox.ca/floof",
    fetcher
  );
  
  if (isLoading) return <div>loading...</div>;
  
  return (
    <img
      src={data.image}
      key={data.img}
      alt="image de renard"
      style={{ width: "100%" }}
    />
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Random Fox</h1>
      <Renard />
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
}
