import './TextField.css'

export const TextField = ({title}) => {

    return(
        <div className='input'>
        <label>{title}</label>
        <input  type='text' name={title} required />
        </div>
    )
}

