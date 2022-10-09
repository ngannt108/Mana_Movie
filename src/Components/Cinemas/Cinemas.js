import React from 'react'

export default function Cinemas() {
  return (
    // date
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
  )
}
