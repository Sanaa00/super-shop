import { useState } from 'react';
import './dropDown.style.css'
import { addSort} from '../../features/sortSlice';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../../features/products';
function DropDown() {
// Note: The API sorts by ID, so we are sorting the data by price in the frontend
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('normal'); 
  const [showOptions, setShowOptions] = useState(false);
  const options = ['normal', 'descending', 'ascending'];
  const { data: allProducts, isLoading } = useGetAllProductsQuery();

  const handleSelectChange = (option) => {
    setSelectedOption(option);

    if (option === 'normal') {
      dispatch(addSort(allProducts));
    } else if (option === 'descending') {
      const desc = [...allProducts].sort((a, b) => b.price - a.price);
      dispatch(addSort(desc));
    } else {
      const asc = [...allProducts].sort((a, b) => a.price - b.price);
      dispatch(addSort(asc));
    }

    setShowOptions(false); 
  };


  if (isLoading) return null; 
  return (
       <div className="dropdown-container">
      <div
        className={`dropdown ${showOptions ? 'open' : ''}`}
        onClick={() => setShowOptions(!showOptions)}
      >
        {selectedOption}
        <ul className={`options ${showOptions ? 'show' : ''}`}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropDown
