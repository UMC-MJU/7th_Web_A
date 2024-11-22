import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Movie from './routes/Movie';
function App() {
    return (
        <Router>
            <Routes>
                <Route path={`/`} element={<Home/>}></Route>
                <Route path={`/movie`} element={<Movie/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
