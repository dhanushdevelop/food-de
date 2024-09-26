/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
//import PropTypes from 'prop-types';
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'


const Exploremenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet ratione sit alias earum eaque minus.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index) => {
          return (
            <div onClick={() => setCategory(prev =>prev===item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="/" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}
//Exploremenu.propTypes = {
  //category: PropTypes.string.isRequired,
 // setCategory: PropTypes.func.isRequired,
//}



export default Exploremenu
