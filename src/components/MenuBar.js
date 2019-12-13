import React from 'react'

const changeActive = (event) => {
  const lastActive = document.querySelector(".active")
  lastActive.className = "item"
  event.target.className = "item active"

}

const MenuBar = (props) => {

console.log(props)

  return (
    <div className="ui four item menu">
      <a className="item active" id="profile" onClick={(event) => {changeActive(event); props.handleClick(event)}} >
        <i className="user large icon" id="profile"/>
      </a>

      <a className="item" id="photo" onClick={(event) => {changeActive(event); props.handleClick(event)}} >
        <i className="photo large icon" id="photo"/>
      </a>

      <a className="item" id="cocktail" onClick={(event) => {changeActive(event); props.handleClick(event)}} >
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className="item" id="pokemon" onClick={(event) => {changeActive(event); props.handleClick(event)}} > 
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
