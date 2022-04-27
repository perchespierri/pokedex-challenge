import { List, Pokemon, Header, PageNotFound } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/pokemon" element={<List />} /> 
          <Route path="/" element={<List />} /> 
          <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
