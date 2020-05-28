import React from 'react'
import './menuItem.style.scss'
import {withRouter} from 'react-router-dom'
const MenuItem=({title,imageUrl,size,linkUrl,history,match})=>{
    return(
        <div className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)} >
       <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <h1 className="subtitle">Achetez maintenant</h1>
        </div>
      </div>
    )
}
export default withRouter(MenuItem)