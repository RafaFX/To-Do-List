import './TextField.css'

export const TextField = ({title,setState}) => {

    function onType(e){
        return setState(e.target.value)
    }

    return(
        <div className='input'>
        <label>{title}</label>
        <input  type='text' onChange={onType}  />
        </div>
    )

}

