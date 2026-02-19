import './App.css'
import Add_Contact from './components/Add_Contact.jsx'
import Contact_List from './components/Contact_List.jsx'
import React, { useState } from 'react'

const App = () => {
    const [allUsers, setallUsers] = useState([])

    return (
    <div className='bg-linear-to-bl from-violet-500 to-fuchsia-500 text-white w-screen h-screen font-mono flex'>
        
        <Add_Contact allUsers={allUsers} setallUsers={setallUsers}/>
        <Contact_List allUsers={allUsers}/>
        
    </div>
  )
}

export default App