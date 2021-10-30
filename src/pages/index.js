import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(".netlify/functions/hello");
      const body = await response.json();
      setData(body.message);
    })();
  }, []);

  return (
    <>
      <div>Hello</div>
      <div>{data}</div>
    </>
  );
};

export default IndexPage;
