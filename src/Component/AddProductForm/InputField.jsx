import { Field } from "formik"

// eslint-disable-next-line react/prop-types
function InputField({placeholder,name,value,onChange,id,type}) {
  return (
    <div className="layout-col">
      <label className="lable">{name }</label>
    <Field
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      type={type}
     
      className="input w-full lg:w-80 xl:w-96 h-14 pl-3 border-2 rounded-sm border-gray-300 focus:outline-none focus:border-greeen bg-gray-50 mt-5 px-1 py-1"
    /></div>
  )
}

export default InputField
