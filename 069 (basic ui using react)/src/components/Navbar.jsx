import Name from './Name.jsx'
import Links from './Links.jsx'
import Book from './Book.jsx'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Name />
        <Links />
        <Book />
    </div>
  )
}

export default Navbar