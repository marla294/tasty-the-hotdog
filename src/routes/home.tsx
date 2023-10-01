import { allComicLoader } from "./comic";



const Home = () => {
  const {comics} = allComicLoader();

  console.log({comics});

  return <div>Home</div>
}

export default Home;