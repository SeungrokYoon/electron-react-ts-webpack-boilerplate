import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './styles.css';

function Root() {
  return (
    <div className="bg-green-600">
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="text-white">
        electron-react-webpack-typescript-TailwindCSS boilerplate
      </h1>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
      </Routes>
    </Router>
  );
}
