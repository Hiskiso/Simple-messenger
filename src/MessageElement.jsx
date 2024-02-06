import React from 'react'
import "./MessageElement.css"

export default function MessageElement({before, children, title, date}) {
  return (
    <div className='messageContainer'>
       <div className="contentContainer">
       <div className="before">{before}</div>
        <div className="content">
            <div className="title">{title}</div>
            <div className="messageText">{children}</div>
        </div>
       </div>
       <div className="timeContainer">
       <div className="time">{new Date(date*1000).toLocaleString()
}</div>
       </div>
    </div>
  )
}
