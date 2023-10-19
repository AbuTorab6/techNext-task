import { useGetRocket } from "./dataAccess/useGetRocket";

import RocketPage from "./components/Rocket";
function App() {
  const { data } = useGetRocket({});

  console.log(data);
  return (
    <>
      <RocketPage />
    </>
  );
}

export default App;
