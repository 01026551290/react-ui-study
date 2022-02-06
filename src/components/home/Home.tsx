import React from "react";
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
        <>
            <div className={'wrap'}>
                <h1>리액트 UI 컴포넌트</h1>
                <ul className={'componentsList'}>
                    <li>
                        <Link to={'/'} className={'buttonWrap'}>
                            <button className={'button'}>main</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/skeleton'} className={'buttonWrap'}>
                            <button className={'button'}>Skeleton</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/carouselComponent'} className={'buttonWrap'}>
                            <button className={'button'}>carouselComponent</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/pagination'} className={'buttonWrap'}>
                            <button className={'button'}>pagination</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/modalButton'} className={'buttonWrap'}>
                            <button className={'button'}>modalButton</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/infiniteScroll'} className={'buttonWrap'}>
                            <button className={'button'}>infiniteScroll</button>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/intersectionObserver'} className={'buttonWrap'}>
                            <button className={'button'}>intersectionObserver</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Home;