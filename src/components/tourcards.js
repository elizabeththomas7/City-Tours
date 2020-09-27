import React,{useState} from 'react';

function TourCard({id,city,img,name,info}){

const [showInfo,setSetInfo]=useState(false);

   function expandInfo(e){
     console.log(id,city,img,name,info);
    setSetInfo(!showInfo)
  };

return(
<article className="tour">
<div className="img-container">
   <img src={img} alt="" />
  <span
    className="close-btn"
  >
    <i className="fas fa-window-close" />
  </span>
</div>
<div className="tour-info" >
<h3 >{city}</h3>
<h4>{name}</h4>
<h5>Info
    <span onClick={expandInfo}> 
      <i className="fas fa-caret-square-down" />
    </span  >
  </h5>
  {showInfo && <p>{info}</p>}
</div>
</article>
);
}

export default TourCard;