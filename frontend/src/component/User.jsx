import { useState } from "react"
import axios from 'axios'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const User = ({ user, setEditShow, editShow }) => {
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [gender, setGender] = useState(user.gender)
  const [deleted, setDeleted] = useState(false)


  const deleteUserClick = async (id) => {

    await axios.delete(`http://localhost:5000/user/${id}`)
    setDeleted(true)
  }

  const saveClick = async (id) => {
    await axios.put(`http://localhost:5000/user/${id}`, { name, email, gender })
    setEdit(false)
    setEditShow(false)
  }

  const editClick = () => {
    if (editShow) {
      alert('ssss')
    } 
    else {
      setEdit(true)
      setEditShow(true)
    }
  }

  return (
    deleted
      ? <></>
      : edit
        ?
        <TableRow key={user._id} align="center">
          <TableCell>
            <TextField value={name} onChange={e => setName(e.target.value)} />
          </TableCell>
          <TableCell>
            <TextField value={email} onChange={e => setEmail(e.target.value)} />
          </TableCell>
          <TableCell>
            <TextField value={gender} onChange={e => setGender(e.target.value)} />
          </TableCell>
          <TableCell>
            <Button color='success' variant='outlined' onClick={() => saveClick(user._id)}>
              save
            </Button>
          </TableCell>
        </TableRow>
        :
        <TableRow key={user._id}>
          <TableCell>{name}</TableCell>
          <TableCell>{email}</TableCell>
          <TableCell>{gender}</TableCell>
          <TableCell>
            <Button onClick={editClick}>Edit</Button>
            <Button onClick={() => deleteUserClick(user._id)}>Delete</Button>
          </TableCell>
        </TableRow>
  )
}

export default User;