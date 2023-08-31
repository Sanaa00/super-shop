import AddProductForm from '../AddProductForm/AddProductForm';
import './Navbar.style.css'
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import Button from '../button/Button';
import DropDown from '../dropDown/DropDown';
import Modal from 'react-modal';
function Navbar() {
  
const [formOpen, setFormOpen] = useState(false);

  const openModal = () => {
    setFormOpen(true);
  };

  const closeModal = () => {
    setFormOpen(false);
  };
  Modal.setAppElement('#root');
  return (
    <div className="nav"  id="root">
      <p className="nav-title">All Products</p>
      <div className="nav-items">
        <p className='items'>Price sorting</p>
        <div className='items'><DropDown/></div>
        <div className='items'>
       <Button text="Add new product" icon={<FaPlus className='button-icon' />} onClick={openModal} />
       <AddProductForm isOpen={formOpen} onRequestClose={closeModal} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
Modal.setAppElement('#root');