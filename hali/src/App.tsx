import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationBar } from './NavigationBar';
import { Home } from './components/Home';
import { Addpost } from './components/AddPost';
import { AscDescPost } from './components/AscDescPost';
import { DeletePost } from './components/DeletePost';
import { EditPost } from './components/EditPost';
import { ListPost } from './components/ListPost';
import { SearchPost } from './components/SearchPost';
import { SortPost } from './components/SortPost';
import { ToggleSwPost } from './components/ToggleSwPost';
import { PaginationPost } from './components/PaginationPost';

const App = () => {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post-listazas" element={<ListPost />} />
                <Route path="/post-hozzaadas" element={<Addpost />} />
                <Route path="/post-torles" element={<DeletePost />} />
                <Route path="/post-szerkesztes" element={<EditPost />} />
                <Route path="/post-kereses" element={<SearchPost />} />
                <Route path="/post-rendezes" element={<SortPost />} />
                <Route path="/post-pagination" element={<PaginationPost />} />
                <Route path="/post-novekvocsokkeno" element={<AscDescPost />} />
                <Route path="/post-togglesw" element={<ToggleSwPost />} />
            </Routes>
        </Router>
    );
};

export default App;
