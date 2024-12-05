import React from 'react'
import {useRef} from 'react'
import ListItem from '../listItem/ListItem'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './list.scss';
const List = () => {
  const listRef=useRef();
  
  const handleClick = (direction) => {
    const container = listRef.current;
  
    if (container) { // Check if container is defined
      if (direction === "left") {
        container.style.transform = `translateX(230px)`; // Adjust direction and value as needed
      } else if (direction === "right") {
        container.style.transform = `translateX(230px)`; // Adjust direction and value as needed
      }
    }
  };
  
  return (
    <div className='list'>
      <span className='listTitle'>
      continue to watch
      </span>
      <div className='wrapper'>
      <IoIosArrowBack className='sliderArrow left' onClick={handleClick("left")}/>
      <div className='container' ref={listRef}>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
         <ListItem/>
      
      </div>
      <IoIosArrowForward className='sliderArrow right'  onClick={handleClick("right")}/>
      </div>
    </div>
  )
}

export default List
