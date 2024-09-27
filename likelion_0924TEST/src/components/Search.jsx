import React, { useRef, useState } from 'react';
import useKakaoLoader from './useKakaoLoader'; // Kakao API 로더
import search_btn from '../assets/img/icon/search.svg';
import Slider from './Section/Slider';
import { Map, MapMarker } from "react-kakao-maps-sdk";
import list from '../assets/img/icon/list.svg';
import like from '../assets/img/icon/like.svg';
import '../assets/scss/section/_search.scss';

const Search = () => {
    const isKakaoReady = useKakaoLoader(); // Kakao API 로드 상태 확인
    const [keyword, setKeyword] = useState(""); // 검색어 상태
    const [places, setPlaces] = useState([]); // 장소 상태
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const [selectedPlace, setSelectedPlace] = useState(null); // 선택된 장소 상태
    const mapRef = useRef(null); // 지도 참조

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearch = () => {
        if (!isKakaoReady || !window.kakao || !keyword.trim()) {
            alert('Kakao API가 로드되지 않았거나, 검색어를 입력하지 않았습니다.');
            return;
        }
    
        const { kakao } = window;
        if (!kakao.maps.services) {
            alert('Kakao Places API가 로드되지 않았습니다.');
            return;
        }
    
        const ps = new kakao.maps.services.Places(); // 장소 검색 서비스
        const map = mapRef.current;
    
        ps.keywordSearch(keyword, (data, status) => {
            if (status === kakao.maps.services.Status.OK) {
                setPlaces(data); // 검색된 장소 데이터 설정
                const bounds = new kakao.maps.LatLngBounds(); // 지도 범위 설정
    
                data.forEach(place => {
                    bounds.extend(new kakao.maps.LatLng(place.y, place.x));
                });
                map.setBounds(bounds); // 검색 결과에 따른 지도 범위 설정
            } else {
                setPlaces([]); // 검색 결과 없을 때
                alert('검색 결과가 없습니다.');
            }
        });
    };
    

    const handlePlaceClick = (place) => {
        setSelectedPlace(place); // 선택된 장소 설정
    };

    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen); // 모달 열기/닫기 토글
    };

    return (
        <div className='Search_wrap'>
            <Slider />

            {/* 검색창 */}
            <div className="search_input_box">
                <input 
                    type="text"
                    className='search_input'
                    value={keyword}
                    onChange={handleInputChange}
                    placeholder='장소를 검색해주세요!'
                />
                <img 
                    src={search_btn} 
                    alt="search_btn" 
                    className='search_btn'
                    onClick={handleSearch} // 검색 버튼 클릭 시 실행
                />
            </div>

            {/* 지도 및 목록보기 버튼 */}
            <div className="search_map_box">
                <div className="search_map_list" onClick={handleModalToggle}>
                    목록보기
                    <img src={list} alt="목록" className="list_icon" />
                </div>
                
                {/* 지도 */}
                {isKakaoReady && (
                    <Map
                        center={{ lat: 37.566826, lng: 126.9786567 }} // 초기 지도 중심
                        style={{ width: '100%', height: '350px' }} // 지도 스타일
                        level={3} // 지도 확대 수준
                        ref={mapRef}
                    >
                        {/* 검색된 장소들을 마커로 표시 */}
                        {places.map((place) => (
                            <MapMarker
                                key={place.id} // 고유 키
                                position={{ lat: place.y, lng: place.x }} // 마커 위치
                                onClick={() => handlePlaceClick(place)} // 마커 클릭 시 장소 선택
                            >
                            </MapMarker>
                        ))}
                    </Map>
                )}
            </div>

            {/* 모달 및 어두운 배경 처리 */}
            {isModalOpen && (
                <>
                    {/* 배경을 어둡게 만드는 엘리먼트 */}
                    <div className="modal-backdrop" onClick={handleModalToggle}></div>
                    
                    <div className="modal" onClick={handleModalToggle}>
                        <div className="modal_content slide-down" onClick={(e) => e.stopPropagation()}>
                            <div className="bar" onClick={handleModalToggle}></div>
                            <div className="modal_title">
                                "{keyword}" 주변에 있는 곳
                            </div>

                        {/* 장소 목록 */}
                        <ul>
                            {places.map((place) => (
                                <li 
                                    key={place.id} 
                                    className='modal_list_item' 
                                    onClick={() => handlePlaceClick(place)} // 장소 선택
                                >
                                    {/* 장소 이름 표시 */}
                                    {place.place_name.length > 15
                                        ? `${place.place_name.substring(0, 15)}...`
                                        : place.place_name}

                                    {/* 좋아요 버튼 */}
                                    <img 
                                        src={like} 
                                        alt="좋아요" 
                                        className="list_item_like" 
                                        onClick={() => alert('로그인 후 이용 가능합니다')} 
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </>
            )}
        </div>
    );
};

export default Search;
