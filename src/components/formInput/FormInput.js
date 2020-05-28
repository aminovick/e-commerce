import React from 'react'
import'./formInput.styl.scss' 

const FormInput=({hundelChange,label,...otherProps})=>{
    return(
    <div className="group">
        <input className="form-input" onChange={hundelChange}{...otherProps}/>
{
label ? 
(<label className={`${otherProps.value.length?'shrink': ''} form-input-label`}>
    {label}
</label>)
:null}
</div>
    )
}
export default FormInput