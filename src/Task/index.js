import './Task.css'
import { AiFillCloseCircle } from 'react-icons/ai'

export const Task = ({name,description,onDelete,id}) => {

    return(
        <div className='task-box' >
            <AiFillCloseCircle key={name} size={20} className='button-close' onClick={() => onDelete(id)} />
            <div className='task-header' >
                <h1>{name}</h1>
            </div>
            <div className='task-footer' > 
            <p>{description}</p>
            </div>
        </div>
    )
}