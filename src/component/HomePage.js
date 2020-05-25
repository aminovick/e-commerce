import React from 'react'
import "./homePage.style.scss"
const HomePage=()=>{
    return (
        <div className="homepage">
        <div className="directory-menu">
         <div className="menu-item">
           <div className="content">
             <h1 className="title">Chapeaux</h1>
             <h1 className="subtitle">Achetez maintenant</h1>
           </div>
         </div>
         <div className="menu-item">
           <div className="content">
             <h1 className="title">Jacket</h1>
             <h1 className="subtitle">Achetez maintenant</h1>
           </div>
         </div>
         <div className="menu-item">
           <div className="content">
             <h1 className="title">Baskets</h1>
             <h1 className="subtitle">Achetez maintenant</h1>
           </div>
         </div>
         <div className="menu-item">
           <div className="content">
             <h1 className="title">femmes</h1>
             <h1 className="subtitle">Achetez maintenant</h1>
           </div>
         </div>
         <div className="menu-item">
           <div className="content">
             <h1 className="title">hommes</h1>
             <h1 className="subtitle">Achetez maintenant</h1>
           </div>
         </div>
        </div>
       </div>
    )
}
export default HomePage