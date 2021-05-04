import './App.css';
import LikeButton from './components/LikeButton';
import LikeButtonSFC from './components/LikeButtonSFC';

function App() {
  return (
    <>
      <div>Like Button from Class Component</div>
      <LikeButton />
      <div>Like Button from Stateless Functional Component using useState hooks</div>
      <LikeButtonSFC />
    </>
  );
}

export default App;
