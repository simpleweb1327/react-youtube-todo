import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import classes from './AddForm.module.css'
import { useState, useEffect, useContext } from 'react'
import { NotifyContext } from '../../App'

export default function AddForm({ closeModal, addTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isTitleValid, setIsTitleValid] = useState(title && title.trim())
  const [isDescriptionValid, setIsDescriptionValid] = useState(description && description.trim())

  const notifyContext = useContext(NotifyContext)

  useEffect(() => {
    setIsTitleValid(title && title.trim())
    setIsDescriptionValid(description && description.trim())
  }, [title, description])

  const addNewTask = (e) => {
    e.preventDefault()

    if (!isTitleValid || !isDescriptionValid) return

    addTask({
      title,
      description
    })

    console.log('Add new task: ', notifyContext)
    
    notifyContext.showNotification({
      text: 'Задача добавлена!',
      time: 2000,
      type: 'success'
    })

    closeModal()

    console.log('New task was added')
  }

  return (
    <>
      <form
        className={classes['add-task-form']}
        onSubmit={(e) => addNewTask(e)}
      >
        <h2>Новая задача</h2>
        <div className={classes['form-title']}>
          <TextField 
            error={!isTitleValid} 
            value={title} 
            helperText={!isTitleValid && "Поле обязательно для заполнения"}
            label="Название" 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className={classes['form-description']}>
          <TextField 
            error={!isDescriptionValid} 
            value={description} 
            helperText={!isDescriptionValid && "Поле обязательно для заполнения"}
            label="Описание" 
            onChange={(e) => setDescription(e.target.value)} 
          />
        </div>
        <Button type="submit" variant="outlined">Добавить</Button>
      </form>
    </>
  )
}