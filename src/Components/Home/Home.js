import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Carousel from '../Carousel/Carousel';
import NewIn from '../NewIn/NewIn';

export default function Home() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
  
    var sliderFor = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
    };
    var sliderNav = {
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    };
    return (
      <>
       <Carousel/>
  
      <NewIn/>
  
        {/* date */}
        <section id="date" className="container">
          <div className="row">
            {/* Nav pills */}
            <div>
              <ul className="nav nav-pills col-600-12">
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#mon">
                    Mon
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#tue">
                    Tue
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="pill" href="#wed">
                    Today
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#thu">
                    Thu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#fri">
                    Fri
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#sat">
                    Sat
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#sun">
                    Sun
                  </a>
                </li>
              </ul>
            </div>
            {/* Tab panes */}
            <div className="tab-content">
              <div className="tab-pane" id="mon">
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-6.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>ACTION, ADVENTURE, FANTASY</h1>
                    <h3>It's over</h3>
                    <p>
                      European mercenaries searching for black powder become
                      embroiled in the defense of It's over of China against a
                      horde of monstrous creatures.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">14:45</span>
                        <span className="time">18:30</span>
                        <span className="time">20:30</span>
                        <span className="time">24:45</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>105 mins</span>
                        <span className="date__duration">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-5.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Action, Adventure, Sci-Fi</h1>
                    <h3>Captain America: The First Avenger</h3>
                    <p>
                      Steve Rogers, a rejected military soldier transforms into
                      Captain America after taking a dose of a "Super-Soldier
                      serum". But being Captain America comes at a price as he
                      attempts to take down a war monger and a terrorist
                      organization.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time">16:00</span>
                        <span className="time">18:00</span>
                        <span className="time">21:00</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>120 mins</span>
                        <span className="date__duration">PG</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-8.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Drama</h1>
                    <h3>Fences</h3>
                    <p>
                      A working-className African-American father tries to raise
                      his family in the 1950s, while coming to terms with the
                      events of his life.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">10:00</span>
                        <span className="time past">12:45</span>
                        <span className="time">17:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>135 mins</span>
                        <span className="date__duration">18</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-7.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>drama</h1>
                    <h3>Daylight</h3>
                    <p>
                      A chronicle of the childhood, adolescence and burgeoning
                      adulthood of a young black man growing up in a rough
                      neighborhood of Miami.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time past">14:30</span>
                        <span className="time">20:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>117 mins</span>
                        <span className="date__duration">U</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tue">
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-7.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>drama</h1>
                    <h3>Daylight</h3>
                    <p>
                      A chronicle of the childhood, adolescence and burgeoning
                      adulthood of a young black man growing up in a rough
                      neighborhood of Miami.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time past">14:30</span>
                        <span className="time">20:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>117 mins</span>
                        <span className="date__duration">U</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-5.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Action, Adventure, Sci-Fi</h1>
                    <h3>Captain America: The First Avenger</h3>
                    <p>
                      Steve Rogers, a rejected military soldier transforms into
                      Captain America after taking a dose of a "Super-Soldier
                      serum". But being Captain America comes at a price as he
                      attempts to take down a war monger and a terrorist
                      organization.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time">16:00</span>
                        <span className="time">18:00</span>
                        <span className="time">21:00</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>120 mins</span>
                        <span className="date__duration">PG</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-6.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>ACTION, ADVENTURE, FANTASY</h1>
                    <h3>It's over</h3>
                    <p>
                      European mercenaries searching for black powder become
                      embroiled in the defense of It's over of China against a
                      horde of monstrous creatures.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">14:45</span>
                        <span className="time">18:30</span>
                        <span className="time">20:30</span>
                        <span className="time">24:45</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>105 mins</span>
                        <span className="date__duration">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-8.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Drama</h1>
                    <h3>Fences</h3>
                    <p>
                      A working-className African-American father tries to raise
                      his family in the 1950s, while coming to terms with the
                      events of his life.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">10:00</span>
                        <span className="time past">12:45</span>
                        <span className="time">17:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>135 mins</span>
                        <span className="date__duration">18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane active" id="wed">
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-6.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>ACTION, ADVENTURE, FANTASY</h1>
                    <h3>It's over</h3>
                    <p>
                      European mercenaries searching for black powder become
                      embroiled in the defense of It's over of China against a
                      horde of monstrous creatures.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">14:45</span>
                        <span className="time">18:30</span>
                        <span className="time">20:30</span>
                        <span className="time">24:45</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>105 mins</span>
                        <span className="date__duration">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-5.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Action, Adventure, Sci-Fi</h1>
                    <h3>Captain America: The First Avenger</h3>
                    <p>
                      Steve Rogers, a rejected military soldier transforms into
                      Captain America after taking a dose of a "Super-Soldier
                      serum". But being Captain America comes at a price as he
                      attempts to take down a war monger and a terrorist
                      organization.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time">16:00</span>
                        <span className="time">18:00</span>
                        <span className="time">21:00</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>120 mins</span>
                        <span className="date__duration">PG</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-7.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>drama</h1>
                    <h3>Daylight</h3>
                    <p>
                      A chronicle of the childhood, adolescence and burgeoning
                      adulthood of a young black man growing up in a rough
                      neighborhood of Miami.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time past">14:30</span>
                        <span className="time">20:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>117 mins</span>
                        <span className="date__duration">U</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-8.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Drama</h1>
                    <h3>Fences</h3>
                    <p>
                      A working-className African-American father tries to raise
                      his family in the 1950s, while coming to terms with the
                      events of his life.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">10:00</span>
                        <span className="time past">12:45</span>
                        <span className="time">17:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>135 mins</span>
                        <span className="date__duration">18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="thu">
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-5.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Action, Adventure, Sci-Fi</h1>
                    <h3>Captain America: The First Avenger</h3>
                    <p>
                      Steve Rogers, a rejected military soldier transforms into
                      Captain America after taking a dose of a "Super-Soldier
                      serum". But being Captain America comes at a price as he
                      attempts to take down a war monger and a terrorist
                      organization.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time">16:00</span>
                        <span className="time">18:00</span>
                        <span className="time">21:00</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>120 mins</span>
                        <span className="date__duration">PG</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-7.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>drama</h1>
                    <h3>Daylight</h3>
                    <p>
                      A chronicle of the childhood, adolescence and burgeoning
                      adulthood of a young black man growing up in a rough
                      neighborhood of Miami.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time past">14:30</span>
                        <span className="time">20:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>117 mins</span>
                        <span className="date__duration">U</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-6.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>ACTION, ADVENTURE, FANTASY</h1>
                    <h3>It's over</h3>
                    <p>
                      European mercenaries searching for black powder become
                      embroiled in the defense of It's over of China against a
                      horde of monstrous creatures.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">14:45</span>
                        <span className="time">18:30</span>
                        <span className="time">20:30</span>
                        <span className="time">24:45</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>105 mins</span>
                        <span className="date__duration">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-8.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Drama</h1>
                    <h3>Fences</h3>
                    <p>
                      A working-className African-American father tries to raise
                      his family in the 1950s, while coming to terms with the
                      events of his life.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">10:00</span>
                        <span className="time past">12:45</span>
                        <span className="time">17:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>135 mins</span>
                        <span className="date__duration">18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="fri">
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-5.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Action, Adventure, Sci-Fi</h1>
                    <h3>Captain America: The First Avenger</h3>
                    <p>
                      Steve Rogers, a rejected military soldier transforms into
                      Captain America after taking a dose of a "Super-Soldier
                      serum". But being Captain America comes at a price as he
                      attempts to take down a war monger and a terrorist
                      organization.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time">16:00</span>
                        <span className="time">18:00</span>
                        <span className="time">21:00</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>120 mins</span>
                        <span className="date__duration">PG</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-6.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>ACTION, ADVENTURE, FANTASY</h1>
                    <h3>It's over</h3>
                    <p>
                      European mercenaries searching for black powder become
                      embroiled in the defense of It's over of China against a
                      horde of monstrous creatures.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">14:45</span>
                        <span className="time">18:30</span>
                        <span className="time">20:30</span>
                        <span className="time">24:45</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>105 mins</span>
                        <span className="date__duration">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-7.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>drama</h1>
                    <h3>Daylight</h3>
                    <p>
                      A chronicle of the childhood, adolescence and burgeoning
                      adulthood of a young black man growing up in a rough
                      neighborhood of Miami.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time past">14:30</span>
                        <span className="time">20:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>117 mins</span>
                        <span className="date__duration">U</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-8.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Drama</h1>
                    <h3>Fences</h3>
                    <p>
                      A working-className African-American father tries to raise
                      his family in the 1950s, while coming to terms with the
                      events of his life.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">10:00</span>
                        <span className="time past">12:45</span>
                        <span className="time">17:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>135 mins</span>
                        <span className="date__duration">18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="sat">
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-6.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>ACTION, ADVENTURE, FANTASY</h1>
                    <h3>It's over</h3>
                    <p>
                      European mercenaries searching for black powder become
                      embroiled in the defense of It's over of China against a
                      horde of monstrous creatures.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">14:45</span>
                        <span className="time">18:30</span>
                        <span className="time">20:30</span>
                        <span className="time">24:45</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>105 mins</span>
                        <span className="date__duration">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-7.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>drama</h1>
                    <h3>Daylight</h3>
                    <p>
                      A chronicle of the childhood, adolescence and burgeoning
                      adulthood of a young black man growing up in a rough
                      neighborhood of Miami.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time past">14:30</span>
                        <span className="time">20:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>117 mins</span>
                        <span className="date__duration">U</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-5.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Action, Adventure, Sci-Fi</h1>
                    <h3>Captain America: The First Avenger</h3>
                    <p>
                      Steve Rogers, a rejected military soldier transforms into
                      Captain America after taking a dose of a "Super-Soldier
                      serum". But being Captain America comes at a price as he
                      attempts to take down a war monger and a terrorist
                      organization.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time">16:00</span>
                        <span className="time">18:00</span>
                        <span className="time">21:00</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>120 mins</span>
                        <span className="date__duration">PG</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-8.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Drama</h1>
                    <h3>Fences</h3>
                    <p>
                      A working-className African-American father tries to raise
                      his family in the 1950s, while coming to terms with the
                      events of his life.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">10:00</span>
                        <span className="time past">12:45</span>
                        <span className="time">17:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>135 mins</span>
                        <span className="date__duration">18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="sun">
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-5.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Action, Adventure, Sci-Fi</h1>
                    <h3>Captain America: The First Avenger</h3>
                    <p>
                      Steve Rogers, a rejected military soldier transforms into
                      Captain America after taking a dose of a "Super-Soldier
                      serum". But being Captain America comes at a price as he
                      attempts to take down a war monger and a terrorist
                      organization.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time">16:00</span>
                        <span className="time">18:00</span>
                        <span className="time">21:00</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>120 mins</span>
                        <span className="date__duration">PG</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-6.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>ACTION, ADVENTURE, FANTASY</h1>
                    <h3>It's over</h3>
                    <p>
                      European mercenaries searching for black powder become
                      embroiled in the defense of It's over of China against a
                      horde of monstrous creatures.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">14:45</span>
                        <span className="time">18:30</span>
                        <span className="time">20:30</span>
                        <span className="time">24:45</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>105 mins</span>
                        <span className="date__duration">15</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-7.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>drama</h1>
                    <h3>Daylight</h3>
                    <p>
                      A chronicle of the childhood, adolescence and burgeoning
                      adulthood of a young black man growing up in a rough
                      neighborhood of Miami.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">11:00</span>
                        <span className="time past">14:30</span>
                        <span className="time">20:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>117 mins</span>
                        <span className="date__duration">U</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="date__item row">
                  <a className="col-md-2" href="#">
                    <img className="img-fluid" src="./img/movie-8.jpg" alt="" />
                  </a>
                  <div className="col-md-10">
                    <h1>Drama</h1>
                    <h3>Fences</h3>
                    <p>
                      A working-className African-American father tries to raise
                      his family in the 1950s, while coming to terms with the
                      events of his life.
                    </p>
                    <a href="#" className="btn">
                      Full synopsis
                    </a>
                    <div className="row">
                      <div className="date__time col-md-10">
                        <i className="far fa-clock"></i>
                        <span>VIEWING TIMES</span>
                        <span className="time past">10:00</span>
                        <span className="time past">12:45</span>
                        <span className="time">17:00</span>
                        <span className="time">21:15</span>
                      </div>
                      <div className="date__min col-md-2 text-right">
                        <span>135 mins</span>
                        <span className="date__duration">18</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Coming Soon */}
        <section id="comingsoon" className="dark">
          <div>
            <Slider
              asNavFor={nav2}
              ref={slider1 => setNav1(slider1)}
              {...sliderFor}
              className="slider-for"
            >
              <div className="comingsoon__top top-1 pt-5">
                <h1 className="container heading pt-4 pb-4">Coming soon</h1>
                <div className="container comingsoon__content px-0">
                  <div className="comingsoon__item" data-slick-index="0">
                    <div className="row">
                      <div className="comingsoon__left col-6 pr-5">
                        <h1>Drama, Thriller</h1>
                        <h2>Deepwater Horizon</h2>
                        <div className="starrate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="date">
                          <i className="fas fa-calendar-week"></i>
                          30 September, 2017
                        </div>
                        <p className="pr-5">
                          A dramatization of the April 2010 disaster, when the
                          offshore drilling rig Deepwater Horizon exploded and
                          created the worst oil spill in U.S. history.
                        </p>
                        <a href="#">More info </a>
                      </div>
                      <div className="comingsoon__right item1 col-6">
                        <a
                          href="https://www.youtube.com/embed/S-UPJyEHmM0"
                          data-vbtype="video"
                          className="venobox"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comingsoon__top top-2 pt-5">
                <h1 className="container heading pt-4 pb-4">Coming soon</h1>
                <div className="container comingsoon__content px-0">
                  <div className="comingsoon__item" data-slick-index="1">
                    <div className="row">
                      <div className="comingsoon__left col-6 pr-5">
                        <h1>Action, Adventure, Sci-Fi</h1>
                        <h2>X-Men: Days of Future Past</h2>
                        <div className="starrate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star grey"></i>
                        </div>
                        <div className="date">
                          <i className="fas fa-calendar-week"></i>
                          07 September, 2018
                        </div>
                        <p className="pr-5">
                          The X-Men send Wolverine to the past in a desperate
                          effort to change history and prevent an event that
                          results in doom for both humans and mutants.
                        </p>
                        <a href="#">More info </a>
                      </div>
                      <div className="comingsoon__right item2 col-6">
                        <a
                          href="https://www.youtube.com/embed/S-UPJyEHmM0"
                          data-vbtype="video"
                          className="venobox"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comingsoon__top top-3 pt-5">
                <h1 className="container heading pt-4 pb-4">Coming soon</h1>
                <div className="container comingsoon__content px-0">
                  <div className="comingsoon__item" data-slick-index="1">
                    <div className="row">
                      <div className="comingsoon__left col-6 pr-5">
                        <h1>Comedy, Crime</h1>
                        <h2>The Hangover Part III</h2>
                        <div className="starrate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="date">
                          <i className="fas fa-calendar-week"></i>
                          30 September, 2017
                        </div>
                        <p className="pr-5">
                          When one of their own is kidnapped by an angry gangster,
                          the Wolf Pack must track down Mr. Chow, who has escaped
                          from prison and is on the run.
                        </p>
                        <a href="#">More info </a>
                      </div>
                      <div className="comingsoon__right item3 col-6">
                        <a
                          href="https://www.youtube.com/embed/S-UPJyEHmM0"
                          data-vbtype="video"
                          className="venobox"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comingsoon__top top-1 pt-5">
                <h1 className="container heading pt-4 pb-4">Coming soon</h1>
                <div className="container comingsoon__content px-0">
                  <div className="comingsoon__item" data-slick-index="0">
                    <div className="row">
                      <div className="comingsoon__left col-6 pr-5">
                        <h1>Action, Adventure, Sci-Fi</h1>
                        <h2>Transformers: Age of Extinction</h2>
                        <div className="starrate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="date">
                          <i className="fas fa-calendar-week"></i>
                          15 April, 2018
                        </div>
                        <p className="pr-5">
                          Autobots must escape sight from a bounty hunter who has
                          taken control of the human serendipity: Unexpectedly,
                          Optimus Prime and his remaining gang turn to a mechanic,
                          his daughter, and her back street racing boyfriend for
                          help.
                        </p>
                        <a href="#">More info </a>
                      </div>
                      <div className="comingsoon__right item1 col-6">
                        <a
                          href="https://www.youtube.com/embed/S-UPJyEHmM0"
                          data-vbtype="video"
                          className="venobox"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comingsoon__top top-2 pt-5">
                <h1 className="container heading pt-4 pb-4">Coming soon</h1>
                <div className="container comingsoon__content px-0">
                  <div className="comingsoon__item" data-slick-index="1">
                    <div className="row">
                      <div className="comingsoon__left col-6 pr-5">
                        <h1>Action, Adventure, Drama</h1>
                        <h2>End of an empire</h2>
                        <div className="starrate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star grey"></i>
                        </div>
                        <div className="date">
                          <i className="fas fa-calendar-week"></i>
                          15 April, 2018
                        </div>
                        <p className="pr-5">
                          A growing nation of genetically evolved apes led by
                          Caesar is threatened by a band of human survivors of the
                          devastating virus unleashed a decade earlier.
                        </p>
                        <a href="#">More info</a>
                      </div>
                      <div className="comingsoon__right item2 col-6">
                        <a
                          href="https://www.youtube.com/embed/S-UPJyEHmM0"
                          data-vbtype="video"
                          className="venobox"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comingsoon__top top-3 pt-5">
                <h1 className="container heading pt-4 pb-4">Coming soon</h1>
                <div className="container comingsoon__content px-0">
                  <div className="comingsoon__item" data-slick-index="1">
                    <div className="row">
                      <div className="comingsoon__left col-6 pr-5">
                        <h1>Crime, Thriller, Drama</h1>
                        <h2>Hannibal Rising</h2>
                        <div className="starrate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="date">
                          <i className="fas fa-calendar-week"></i>
                          15 April, 2018
                        </div>
                        <p className="pr-5">
                          After the death of his parents during World War II,
                          young Hannibal Lecter moves in with his beautiful aunt
                          and begins plotting revenge on the barbarians
                          responsible for his sister's death.
                        </p>
                        <a href="#">More info </a>
                      </div>
                      <div className="comingsoon__right item3 col-6">
                        <a
                          href="https://www.youtube.com/embed/S-UPJyEHmM0"
                          data-vbtype="video"
                          className="venobox"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comingsoon__top top-1 pt-5">
                <h1 className="container heading pt-4 pb-4">Coming soon</h1>
                <div className="container comingsoon__content px-0">
                  <div className="comingsoon__item" data-slick-index="0">
                    <div className="row">
                      <div className="comingsoon__left col-6 pr-5">
                        <h1>Adventure, Drama, Sci-Fi </h1>
                        <h2>Locked out</h2>
                        <div className="starrate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="date">
                          <i className="fas fa-calendar-week"></i>
                          15 April, 2018
                        </div>
                        <p className="pr-5">
                          An astronaut becomes stranded on Mars after his team
                          assume him dead, and must rely on his ingenuity to find
                          a way to signal to Earth that he is alive.
                        </p>
                        <a href="#">More info</a>
                      </div>
                      <div className="comingsoon__right item1 col-6">
                        <a
                          href="https://www.youtube.com/embed/S-UPJyEHmM0"
                          data-vbtype="video"
                          className="venobox"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
            <div className="container py-4">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                {...sliderNav}
                className="comingsoon__nav slider-nav"
              >
                <div className="cmnav__item" data-slick-index="0">
                  <img src="./img/movie-10.jpg" alt="" className="mx-auto" />
                  <h5 className="mb-2">Deepwater horizon</h5>
                  <h6>07 September, 2017</h6>
                </div>
                <div className="cmnav__item" data-slick-index="1">
                  <img src="./img/movie-9.jpg" alt="" className="mx-auto" />
                  <h5 className="mb-2">Too Fast</h5>
                  <h6>15 April, 2017</h6>
                </div>
                <div className="cmnav__item" data-slick-index="2">
                  <img src="./img/movie-11.jpg" alt="" className="mx-auto" />
                  <h5 className="mb-2">The Hangover: Part III</h5>
                  <h6>30 September, 2017</h6>
                </div>
                <div className="cmnav__item" data-slick-index="3">
                  <img src="./img/movie-12.jpg" alt="" className="mx-auto" />
                  <h5 className="mb-2">Transformers: Age of Extinction</h5>
                  <h6>15 April, 2018</h6>
                </div>
                <div className="cmnav__item" data-slick-index="4">
                  <img src="./img/movie-13.jpg" alt="" className="mx-auto" />
                  <h5 className="mb-2">End of an empire</h5>
                  <h6>19 October, 2018</h6>
                </div>
                <div className="cmnav__item" data-slick-index="5">
                  <img src="./img/movie-14.jpg" alt="" className="mx-auto" />
                  <h5 className="mb-2">The comedian</h5>
                  <h6>21 November, 2018</h6>
                </div>
                <div className="cmnav__item" data-slick-index="6">
                  <img src="./img/movie-15.jpg" alt="" className="mx-auto" />
                  <h5 className="mb-2">Locked out</h5>
                  <h6>01 December, 2018</h6>
                </div>
              </Slider>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="text-center">
          <div className="contact bg-white py-5">
            <p>Need help? Contact our support team on</p>
            <h1>0330 123 4567</h1>
          </div>
          <div className="about dark">
            <div className="about__top container-xl pt-5 pb-3">
              <div className="row">
                <div className="col-md-3 col-12">
                  <h2>Get in touch</h2>
                  <ul>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Give us feedback</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-12">
                  <h2>About Movie star</h2>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Find us</a>
                    </li>
                    <li>
                      <a href="#">Schedule</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-12">
                  <h2>Legal stuff</h2>
                  <ul>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy</a>
                    </li>
                    <li>
                      <a href="#">Cookie policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-12">
                  <h2>Connect with us</h2>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus-g"></i>
                        Google +
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about__bottom container-xl text-left">
              <p>
                2017 © Movie Star /
                <a href="https://www.klevermedia.co.uk/">
                  {' '}
                  Web design by Klever media
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }