import { useState } from 'react'
import { Button } from '../Button'
import { TextField } from '../TextField'
import './Form.css'

const Form = () =>{

    const[task, setTask] = useState('')
    const[description, setDescription] = useState('')

    return(
        <section className='form' >
            <form onSubmit={(e)=> (e.preventDefault())} >
                <TextField setState={setTask} title='Task' />
                <TextField setState={setDescription} title='Description' />
                <h1>{task}</h1>
                <h1>{description}</h1>
                <Button>
                Criar Task
                </Button>
            </form>
        </section>
    )
}

export { Form }