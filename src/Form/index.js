
import { Button } from '../Button'
import { TextField } from '../TextField'
import './Form.css'



const Form = ({tasks,setTasks}) => {
    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const id = window.crypto.randomUUID();
        const name = formData.get('Task')
        const description = formData.get('Description')

        setTasks([...tasks, { id, name, description }])

        //caso queira infartar um dev react mostrar o code abaixo
        // const teste1 = document.getElementById('1')
        // const teste2 = document.getElementById('2')
        // teste1.value = ''
        // teste2.value = ''
        // mais pratico =====>>>>>>> e.target.reset()
        
        e.target.elements.namedItem('Task').value = ''
        e.target.elements.namedItem('Description').value = ''
    }

    return (
        <section className='form' >
            <form onSubmit={onSubmit} >
                <TextField title='Task'  />
                <TextField title='Description' />
                <Button >
                    Criar Task
                </Button>
            </form>
        </section>
    )
}

export { Form }