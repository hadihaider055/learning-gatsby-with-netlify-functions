import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [data, setData] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(".netlify/functions/hello");
      const body = await response.json();
      setData(body.message);
    })();

    (async () => {
      const response = await fetch(".netlify/functions/useLibrary");
      const body = await response.json();
      setName(body.message);
    })();
  }, []);

  return (
    <>
      <div>Hello</div>
      <div>{data}</div>
      <div>{name}</div>
    </>
  );
};

export default IndexPage;
