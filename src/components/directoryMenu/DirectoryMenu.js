import React from 'react'
import MenuItem from '../menuItem/MenuItem'
import './directoryMenu.style.scss'
class DirectoryMenu extends React.Component{

    state={
        sections : [
            {
              title: 'Chapeaux',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/Chapeaux'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'Baskets',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/Baskets'
            },
            {
              title: 'femmes',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/femmes'
            },
            {
              title: 'hommes',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/hommes'
            }
        ]
    }

    render(){
       return(
        <div className="directory-menu">
        {this.state.sections.map(({title,id,imageUrl,size})=> 
         ( 
         <MenuItem title={title} key={id} imageUrl={imageUrl} size={size}/>)
        )}
        </div>
       )
    }
}
export default DirectoryMenu