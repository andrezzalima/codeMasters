import { Routes, Route } from 'react-router-dom';
//css
import './App.css';
//components
import Initial from './components/Initial/Initial';

export default () => {
    return (
        <Routes>
            <Route exact path='/' element={<Initial/>}>
            </Route>
        </Routes>
    )
}