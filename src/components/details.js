import React,{useState} from 'react';
import TourCards from './tourcards';
import {tourData} from './tourData';

function Details(){
  const [tours]=useState(tourData);

  
    return(
        <section className="tourlist">
          
        {tours.map(tour=>(
           <TourCards  key={tour.id} city={tour.city} img={tour.img} name={tour.name} info={tour.info} />
        )
        )}
      </section>
    )
}

export default Details;