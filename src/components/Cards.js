import React from 'react';
import './Cards.css';
// import design from "../src/images/design.jpeg";
// import python from "../src/images/python.jpg";
// import machine from "../src/images/machine.jpg";
// import adpython from "../src/images/adpython.jpg";
// import tableau from "../src/images/tableau.jpg";
// import big from "../src/images/big.jpg";

function cards() {
  return (
    <div className='wrapper '>
        <Card
        img="https://www.seasiacenter.com/wp-content/uploads/2018/02/Service-cover_Design_Thinking.jpg" title="Design thinking" description="Starts on 20.04.2022" />

        <Card
        img="https://i.pinimg.com/originals/74/99/53/7499532401420bdd8e549814bab51587.jpg" title="Introduction to Python" description="Starts on 20.04.2022"/>

        <Card
        img="https://thumbs.dreamstime.com/b/big-data-internet-information-technology-business-information-concept-big-data-internet-information-technology-business-112823857.jpg" title="Big Data Analysis" description="Starts on 20.04.2022"/>

        <Card
        img="http://www.eworker.co/courses/wp-content/uploads/2018/08/course-advanced-python-programming.png" title="Advanced Python" description="Starts on 20.04.2022"/>

        <Card
        img="https://media.istockphoto.com/photos/future-artificial-intelligence-robot-and-cyborg-picture-id1202870693?k=20&m=1202870693&s=612x612&w=0&h=ZWTxxd24vbR_8OUO-uyYVd0gvEHNTNPjSb3AkZVzgPs=" title="Machine Learning" description="Starts on 20.04.2022" />

        <Card
        img="https://wallpapercave.com/wp/wp8842984.jpg" title="Tableau for Visualisation" description="Starts on 20.04.2022" />

        </div>
  )
}

function Card(props){
    return(
        <div className='card mb-4'>
            <div className='card__body'>
                <img className='card__image' src={props.img} />
                <h2 className='card__title '>{props.title}</h2>
                <p className='card__description '>{props.description}</p>
            </div>
            <button className='card__btn '>
                Learn More
            </button>

        </div>
    )
}

export default cards