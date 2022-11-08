import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import JimButton from "./myStory/Jim-Button";
import ChakraButtonV2 from "./myStory/Chakra-Button-V2";
import TwitterLikeButton from "./myStory/Twitter-Like-Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider>
      <div className="App">
        <div className="flex flex-col gap-3 mb-5">
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="mx-auto" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="mx-auto" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="">
          <JimButton />
          <ChakraButtonV2 />
          <TwitterLikeButton canAnimate={true} />
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </ChakraProvider>
  );
}

export default App;
