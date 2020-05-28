import React from 'react'
import './previewItem.style.scss'
import CollectionItem from '../collectionItems/CollectionItem'
const PreviewItem =({title,items})=>{
    return (
        <div className="collection-preview">
       
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item,idx)=>idx<4).map(({id, ...otherItem})=>{
              return  <CollectionItem key={id}{...otherItem}/>
                }
                )
                }
            </div>

        </div>
    )
}
export default PreviewItem