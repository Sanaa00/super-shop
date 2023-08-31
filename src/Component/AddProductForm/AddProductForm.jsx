import Modal from "react-modal";
import './AddProductForm.style.css'
import { IoMdClose } from "react-icons/io";
import ProductForm from "./form/ProductForm";

// eslint-disable-next-line react/prop-types
function AddProductForm({ isOpen, onRequestClose }) {


  return (
       <div className="modal-container" >
      <div className="modal-center">
        <Modal
                 className="modal-addproduct"
               isOpen={isOpen}
               onRequestClose={onRequestClose}
               contentLabel="Example Modal"
             >
                 <div className="center">
                      <div className="header-form">
                      <p className="">Add New Product</p>
                      <IoMdClose onClick={()=>onRequestClose()} className='icon' />
                      </div>
                      <ProductForm onRequestClose={onRequestClose} />
                    
                 </div> 
        </Modal>
      </div>
           
         
      
    </div>
  )
}

export default AddProductForm
