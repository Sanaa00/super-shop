import { useState } from 'react';
import './dropDown.style.css'
import { addSort} from '../../features/sortSlice';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../../features/products';
function DropDown() {
//TODO: design must change
     const dispatch=useDispatch()
     const [selectedValue, setSelectedValue] = useState('');
     const options = ['normal', 'desc', 'asc'];
     const {data:allProducts ,isLoading}=useGetAllProductsQuery()
  const handleSelectChange = (event) => {
    if (event.target.value === "normal") {
        dispatch(addSort(allProducts))
    } else if (event.target.value === "desc") {
      const sorttt = [...allProducts].sort((a, b) => b.price - a.price)
         dispatch(addSort(sorttt))
    } else {
         const asc = [...allProducts].sort((a, b) => a.price - b.price)
         dispatch(addSort(asc))
    }
    setSelectedValue(event.target.value)
        // sort done with api but it was sort id not price ,i changed to sort by price but in front end ;)
        //  setSelectedValue(event.target.value);
        //  if (event.target.value === "normal") {
        //       dispatch(addSort(""))
        //  } else {
        //       dispatch(addSort(event.target.value))
        //  }    
    };
  if (isLoading) return null; 
  return (
      <div className="dropdown-container">
      <select
        className={`dropdown ${selectedValue && 'selected'}`}
        value={selectedValue}
        onChange={handleSelectChange}
      >
     
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DropDown
