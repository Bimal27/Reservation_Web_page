import { faCalendarDays } from '@fortawesome/free-regular-svg-icons'
import {
  faBath,
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './Header.css'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false)
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])

  const [people, setPeople] = useState(false)

  const [options, setOptions] = useState({
    adult: 1,
    child: 0,
    room: 1,
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'inr' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () =>{
    navigate('/hotels', {state:{destination,date,options}})
  }
  return (
    <div className="header">
      <div className={type === 'list' ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Bed</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBath} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi Service</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            {' '}
            <h1 className="headerTitle">Lifetime discounts? Simply genius!</h1>
            <p className="headerDiscription">
              Get rewarded for your travels – you can save 10% or more instantly
              with a free myBookings.com account.
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={e => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="headerIcon"
                  onClick={() => setOpenDate(!openDate)}
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerTextSearch"
                >{`${format(date[0].startDate, 'dd/MM/yyyy')}  - ${format(
                  date[0].endDate,
                  'dd/MM/yyyy',
                )}`}</span>
                {openDate && (
                  <DateRange
                    ranges={date}
                    onChange={(item) => setDate([item.selection])}
                    //  moveRangeOnFirstSelection={false}
                    className="date"
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon
                  icon={faPerson}
                  className="headerIcon"
                  onClick={() => setPeople(!people)}
                />
                <span
                  onClick={() => setPeople(!people)}
                  className="headerTextSearch"
                >{`${options.adult} adult . ${options.child} child . ${options.room} room`}</span>
                {people && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption('adult', 'dec')}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('adult', 'inr')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Child</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.child <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption('child', 'dec')}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.child}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('child', 'inr')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption('room', 'dec')}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('room', 'inr')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
