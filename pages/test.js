import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useState } from "react";

const TestPage = () => {
  const [hello, setHello] = useState({});
  const fetchHello = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    console.log(data);
    setHello(data);
  };

  const [authData, setAuthData] = useState({});
  const fetchAuthJWT = async () => {
    const response = await fetch("/api/getAuth0Session");
    const data = await response.json();
    console.log(data);
    setAuthData(data);
  };

  return (
    <>
      <h1>Test Page</h1>
      <button onClick={fetchHello}>Say Hello</button>
      <p>{JSON.stringify(hello)}</p>

      <button onClick={fetchAuthJWT}>Get Auth0 JWT</button>
      <p>{JSON.stringify(authData)}</p>
    </>
  );
};

export default withPageAuthRequired(TestPage);
