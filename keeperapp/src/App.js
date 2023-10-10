import './App.css';

function App() {
  const name = 'Mihir';
  const date = new Date();
  const currentYear = date.getFullYear(); // Extract the current year

  return (
    <div>
      <h1>My Favourite Shows</h1>
      <h2>My name is {name}</h2>
      <ul>
        <li>TMKOC</li>
        <li>PODCAST</li>
        <li>MUSICS</li>
      </ul>
      <span>&copy;{currentYear}</span> {/* Display the current year */}
    </div>
  );
}

export default App;

