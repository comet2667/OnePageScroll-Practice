import { useCallback } from 'react';
import './Home.scss';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function Home(props) {

    const handleMouseOver = ()=>{
        props.setOptions({
            ...props.options,
            anchors: [],
        });
    }
    const handleMouseOut = ()=>{
        props.setOptions({
            ...props.options,
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
        });
    }

    return (
        <div className='home__container'>
            <div className='home__map' >
            <Map className='home__item'
                onMouseOver={()=>handleMouseOver()} 
                onMouseOut={()=>handleMouseOut()}
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "50%", height: "50%" }}
            />
            </div>
        </div>
    );
}
export default Home;