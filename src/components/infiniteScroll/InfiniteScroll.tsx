import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import './infiniteScroll.css';
import {throttle} from "throttle-debounce";

interface Airline {
    id: number;
    name: string;
    country: string;
    logo: string;
    slogan: string;
    head_quaters: string;
    website: string;
    established: string;
}

interface Passenger {
    _id: string;
    name: string;
    trips: number;
    airline: Airline;
    __v: number;
}

const InfiniteScroll = () => {
    const listRef = useRef<HTMLUListElement>(null);
    const currentPageRef = useRef<number>(0);

    const [passengers, setPassengers] = useState<Array<Passenger>>([]);
    const [isLast, setIsLast] = useState<boolean>(false);
    const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

    const getPassengers = async (init?: boolean) => {
        const params = { page: currentPageRef, size: 30 };

        try {
            const response = await axios.get('https://api.instantwebtools.net/v1/passenger', { params })
            const passengers = response.data.data;
            const isLast = response.data.totalPages === currentPageRef;

            init ? setPassengers(passengers) : setPassengers(prev => [...prev, ...passengers])
            setIsLast(isLast);
        } catch (e) {
            console.error(e);
        }
    }

    // throttle 미사용시 이벤트를 계속 호출하여 부하가 걸릴수있음
    // const handleScroll = () => {
    //     if (listRef.current) {
    //         const { scrollHeight, offsetHeight, scrollTop } = listRef.current;
    //
    //         const offset = 50;
    //         console.log('trigger');
    //         setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    //     }
    // }

    const handleScroll = throttle(1000, () => {
        if (listRef.current) {

            // ref를 통해 현재페이지의 필요한 인자 받아오기
            const { scrollHeight, offsetHeight, scrollTop } = listRef.current;

            // 임의로 설정한 offset
            const offset = 50;
            console.log('trigger');

            // 해당 지점이 맞을때 다음 api를 호출하여 무한스크롤을 사용
            setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
        }
    })

    useEffect(() => {
        if (isScrollBottom) {
            currentPageRef.current += 1;

            !isLast && getPassengers();
        }
    },[isScrollBottom, isLast]);

    useEffect(() => {
        getPassengers(true);
    }, [])

    return (
        <>
            <ul ref={listRef} className={"list"} onScroll={handleScroll}>
                <li className={"item"}></li>
                {
                    passengers.map( (passenger,idx) => (<li className={"item"} key={idx}>{passenger.name}</li>))
                }
            </ul>
        </>
    )
}

export default InfiniteScroll;