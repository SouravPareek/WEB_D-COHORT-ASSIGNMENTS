import React from 'react'
import Link from './Link'

const Links = () => {
  return (
    <div className='links'>
        <Link a={{anchor: 'About Us'}}/>
        <Link a={{anchor: 'Services'}}/>
        <Link a={{anchor: 'Coaches'}}/>
        <Link a={{anchor: 'Events'}}/>
        <Link a={{anchor: 'Contacts'}}/>
    </div>
  )
}

export default Links