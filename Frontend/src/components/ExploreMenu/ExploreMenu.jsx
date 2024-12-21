import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>
          Choose from a wide variety of items, each thoughtfully selected to offer something for every taste and preference. Whether you're in the mood for a quick snack, a hearty meal, or something special, our selection provides plenty of options to satisfy your cravings. With a range of choices to suit different tastes and needs, you're sure to find exactly what you're looking for.
        </p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index) => {
                return (
                    <div 
                      onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                      key={index} 
                      className='explore-menu-list-item'>
                        <img 
                          className={category === item.menu_name ? "active" : ""} 
                          src={item.menu_image} 
                          alt={item.menu_name} 
                        />
                        <p>{item.menu_name}</p>
                    </div>
                );
            })}
        </div>
        <hr />
    </div>
  );
}

export default ExploreMenu;
