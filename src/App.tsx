import React from 'react';
import { Route, Routes } from 'react-router';
import Skeleton from "./components/skeleton/Skeleton";
import CarouselComponent from "./components/carousel/CarouselComponent";
import Pagination from "./components/pagination/Pagination";
import ModalButton from "./components/modal/ModalButton";
import InfiniteScroll from "./components/infiniteScroll/InfiniteScroll";
import IntersectionObserver from "./components/intersectionObserver/IntersectionObserver";
import Home from "./components/home/Home";


function App() {

  return (
      <>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/skeleton'} element={<Skeleton/>}/>
            <Route path={'/carouselComponent'} element={<CarouselComponent/>}/>
            <Route path={'/pagination'} element={<Pagination/>}/>
            <Route path={'/modalButton'} element={<ModalButton/>}/>
            <Route path={'/infiniteScroll'} element={<InfiniteScroll/>}/>
            <Route path={'/intersectionObserver'} element={<IntersectionObserver/>}/>
        </Routes>
      </>
  );
}

export default App;
