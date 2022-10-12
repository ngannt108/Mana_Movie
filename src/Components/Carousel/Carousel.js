import React from 'react';
import { Link } from 'react-router-dom';

export default function Carousel() {
  return (
    // Carousel
     <div id="demo" className="carousel slide" data-ride="carousel">
    {/* Indicators */}
     <ul className="carousel-indicators">
       <li data-target="#demo" data-slide-to="0" className="active"></li>
       <li data-target="#demo" data-slide-to="1"></li>
       <li data-target="#demo" data-slide-to="2"></li>
     </ul>
     {/* The slideshow */}
     <div className="carousel-inner">
       <div className="carousel-item item1 text-white active">
         <div className="container-xl px-5">
           <div className="row">
             <div className="col-md-9">
               <h3 className="carousel__h3">ACTION, ADVENTURE, FANTASY</h3>
               <h1 className="carousel__h1">End of the World: Part II</h1>
               <p className="carousel__p mb-4">
                 Claritas est etiam processus dynamicus, qui sequitur
                 mutationem consuetudium lectorum. Mirum est notare quam
                 littera gothica, quam nunc putamus parum.
               </p>
               <div>
                 <span className="carousel__span">PG</span>
                 <Link
                   className="venobox btn btn-trailer"
                   data-vbtype="video"
                   to="https://www.youtube.com/embed/RhFMIRuHAL4"
                 >
                   <i className="fa fa-play"></i>
                   <span>Play Trailer</span>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="carousel-item item2">
         <div className="container-xl px-5">
           <div className="row">
             <div className="col-md-9">
               <h3 className="carousel__h3">ACTION, ADVENTURE, FANTASY</h3>
               <h1 className="carousel__h1">End of the World: Part II</h1>
               <p className="carousel__p mb-4">
                 Claritas est etiam processus dynamicus, qui sequitur
                 mutationem consuetudium lectorum. Mirum est notare quam
                 littera gothica, quam nunc putamus parum.
               </p>
               <div>
                 <span className="carousel__span">15</span>
                 <Link
                   className="venobox btn btn-trailer"
                   data-vbtype="video"
                   to="https://www.youtube.com/embed/RhFMIRuHAL4"
                 >
                   <i className="fa fa-play"></i>
                   <span>Play Trailer</span>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div className="carousel-item item3">
         <div className="container-xl px-5">
           <div className="row">
             <div className="col-md-9">
               <h3 className="carousel__h3">ACTION, ADVENTURE, FANTASY</h3>
               <h1 className="carousel__h1">End of the World: Part II</h1>
               <p className="carousel__p mb-4">
                 Claritas est etiam processus dynamicus, qui sequitur
                 mutationem consuetudium lectorum. Mirum est notare quam
                 littera gothica, quam nunc putamus parum.
               </p>
               <div>
                 <span className="carousel__span">PG</span>
                 <Link
                   className="venobox btn btn-trailer"
                   data-vbtype="video"
                   to="https://www.youtube.com/embed/RhFMIRuHAL4"
                 >
                   <i className="fa fa-play"></i>
                   <span>Play Trailer</span>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div className="carousel__icon">
       <img
         className="carousel__arrow"
         src="./img/scroll-arrow.svg"
         alt=""
       />
     </div>
   </div>
  )
}
