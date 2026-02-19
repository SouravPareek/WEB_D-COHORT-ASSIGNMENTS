import React, { useState } from 'react'

const Add_Contact = ({ allUsers, setallUsers }) => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(name, phone, email);

        allUsers.push({name, phone, email})
        setallUsers([...allUsers])
        setname('')
        setphone('')
        setemail('')
    }
    return (
    <div className="w-1/2 h-screen px-50 py-25">
        <form onSubmit={submitHandler} className="bg-[#ffff] w-full h-full flex flex-col gap-10 px-10 py-6 rounded-2xl justify-center items-center">
            <h1 className="w-fit text-black text-3xl font-bold">Add Contact</h1>

            <input className="bg-gray-600 outline-none h-12 w-full text-white rounded-xl py-4 px-2" type="text" required placeholder="Enter Name" value={name} onChange={(e)=>{
                                        setname(e.target.value)
                                    }}/>
                                    
            <input className="bg-gray-600 outline-none h-12 w-full text-white rounded-xl py-4 px-2" type="text" required placeholder="Enter Phone Number" value={phone} onChange={(e)=>{
                                                setphone(e.target.value)
                                            }}/>

            <input className="bg-gray-600 outline-none h-12 w-full text-white rounded-xl py-4 px-2" type="text" required placeholder="Enter Email" value={email} onChange={(e)=>{
                                        setemail(e.target.value)
                                    }}/>

            <button className="bg-green-700 duration-100 ease-in active:scale-95 h-auto w-fit rounded-2xl px-6 py-4 text-2xl">Save Contact</button>
        </form>
    </div>
  )
}

export default Add_Contact