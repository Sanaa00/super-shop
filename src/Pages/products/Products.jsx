
import { useEffect, useState } from 'react';
import Loading from '../../Component/Loading/Loading'
import { useGetAllProductsQuery } from '../../features/products'
import './products.style.css'
import SingleItem from '../../Component/SingleItem/SingleItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Products() {
  const { sort } = useSelector(state => state.sort)
 
  const { data: allProducts, isLoading } = useGetAllProductsQuery()
  const [currentData,setCurrentData]=useState()
  const [modalOpen, setmModalOpen] = useState(false);

   function openModal() {
    setmModalOpen(true);
  }

  function closeModal() {
    setmModalOpen(false);
  }

  useEffect(() => {
    if(allProducts?.length>0){   setCurrentData(allProducts)}
    if (sort?.length > 0) {
      setCurrentData(sort)
    }
    
  }, [allProducts,isLoading,sort])
 
  
  if (isLoading) return <Loading />
 
  return (
    <div className="product">
      <div className='cards'> {currentData?.map((item) => {
        return <Link key={item.id} to={`/products/${item.id}`} className='link-single'>
          <button  key={item.id} className='card' onClick={()=>openModal()}>
          <img className='img-card' src={item.image} alt="product" />
          <div>

            <div className='info-card'>
              <p className='title-product'> {item.title.slice(0,20)}</p>
              <p className='price'>${ item.price}</p>
             
            </div>

            <p className='des-card'>{item.description.length<40?item.description: item.description.slice(0,40)+"..."}</p>
          </div>
          
        </button></Link>
       
      })}
        
        <SingleItem
          modalIsOpen={modalOpen}
          closeModal={closeModal} />
      </div>
     
    </div>
  )
}

export default Products
