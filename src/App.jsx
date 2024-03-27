import Avatar from "./components/Avatar.jsx";

// Je n'arrive pas à exploiter le tableau ci-dessous...
/*const data = [
  {
      image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
      firstName: "Bart",
      lastName: "Simpson"
  },
  {
      image: "https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png",
      firstName: "Homer",
      lastName: "Simpson"
  }
];*/

function App() {
  return (
      <>
        <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png" firstName="Bart" lastName="Simpson" />
        <Avatar image="https://www.stickees.com/files/cartoon/the-simpsons/2247-homer-simpson-beer.png" firstName="Homer" lastName="Simpson" />
      </>
  )
}

export default App;
