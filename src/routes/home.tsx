import { firstComicLoader } from "./comic";



const Home = () => {
  const {comics} = firstComicLoader();

  console.log({comics});

  return <div>Home</div>
}

export default Home;