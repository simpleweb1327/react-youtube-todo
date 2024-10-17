import classes from './Search.module.css'
import TextField from '@mui/material/TextField'
import { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

export default function Search({ setSearchGlobal }) {
  const [searchText, setSearchText] = useState('')
  const [isClear, setIsClear] = useState(false)

  useEffect(() => {
    if (searchText) {
      setSearchGlobal(searchText)
      setIsClear(true)
      return
    }

    setIsClear(false)
    setSearchGlobal('')
  }, [searchText])

  const onClearClick = () => {
    setSearchGlobal('')
    setIsClear(false)
    setSearchText('')
  }

  return (
    <div className={classes.search}>
      <TextField
        label='Поиск' 
        variant='outlined'
        fullWidth
        value={searchText}
        onInput={(e) => setSearchText(e.target.value)}
      />
      {
        isClear && 
        <IconButton onClick={() => onClearClick()} className={classes.clear}>
          <CloseIcon />
        </IconButton>
      }
    </div>
  )
}