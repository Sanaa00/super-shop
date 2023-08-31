import './singleItem.style.css'
import { useGetSingleProductQuery } from '../../features/products';
import { useParams } from 'react-router-dom';
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";
// eslint-disable-next-line react/prop-types
function SingleItem({ modalIsOpen, closeModal }) {

     const { id } = useParams();
     const { data: singleItem } = useGetSingleProductQuery({ id })
     console.log("single item", singleItem)
  

  return (
       <div className='single-item'>
            <div className='modal-div'>
           <Modal className="modal"
             isOpen={modalIsOpen}
             onRequestClose={closeModal}
                      contentLabel="Example Modal">
                      <div className='single-modal-center'>
                         
                             <div className='header-modal'>
                           <p className='header-des'>{singleItem?.description?.slice(0,100)}</p>
                           <IoMdClose onClick={closeModal} className='modal-icon'/>
                      
                           </div>
                           <div className='info-section'>
                           <img src={singleItem?.image} alt="product" className='single-image' />
                           <div className='info'>
                                <div className='layout'><p>Price</p><p className='price-singleItem'>{singleItem?.price}</p></div>
                                <div className='layout'><p>Category</p><p>{singleItem?.category}</p></div>
                                <div className='layout'><p>Rating</p><p>{singleItem?.rating?.rate}</p></div>
                                <div className='des'>
                                     <p className=''>Description</p>
                                     <p className=''>{ singleItem?.description}</p>
                                </div>
                           </div>
                 </div>
                      </div>
                 
                      
                  
              
           </Modal></div>
           
           
           
    </div>
  )
}

export default SingleItem
