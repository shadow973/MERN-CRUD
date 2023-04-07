import { useState, useEffect } from 'react'
import axios from 'axios'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import User from './User';



export default function UserList() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('Male')
  const [addShow, setAddShow] = useState(false)
  const [users, setUsers] = useState([])
  const [editShow, setEditShow] = useState(false)


  const addClick = () => {
    if(editShow) {
      alert('ssss')
    }
    else{
    setAddShow(!addShow)}
}
  const addUserClick = async () => {
    try {
      await axios.post('http://localhost:5000/user', { name, email, gender })
      getUser()
      setAddShow(false)
      setName('')
      setEmail('')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getUser()
  },[])

  const getUser = async () => {
    const res = await axios.get('http://localhost:5000/user')
    setUsers(res.data)
  }

  return (
    <>
      <Button color='primary' onClick={addClick} variant='outlined'>Add</Button>

      <Table style={{ width: '650px', margin: '50px' }}>
        <TableHead>          
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Action</TableCell>        
          </TableRow>
        </TableHead>
        <TableBody>
          {addShow && (
            <TableRow>
              <TableCell>
                <TextField
                  variant='outlined'
                  size='small'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  size='small'
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
              </TableCell>
              <TableCell>
                <Select value={gender}
                  onChange={e => setGender(e.target.value)}
                >
                  <MenuItem value={'Male'}>Male</MenuItem>
                  <MenuItem value={'Female'}>Female</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <Button color='success' variant='outlined' onClick={addUserClick}>Save</Button>
              </TableCell>
            </TableRow>
          )}
          {users.map((item, key) => (
            <User user={item} key={key} setEditShow={setEditShow} editShow={editShow}/>
          ))}
        </TableBody>
      </Table>
    </>
  )
}