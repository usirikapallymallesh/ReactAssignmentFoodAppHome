import React from 'react';
import "./../components/Quote.css"

const Quote = (props) => {
  console.log(props);


    return (
      <div className="quote-div">
        <p>{props.desc}</p>
        <span>{props.author}</span>
       
      </div>
    )
    
  }

export default Quote;