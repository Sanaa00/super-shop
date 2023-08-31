import { Formik, useFormik,Form } from "formik";
import * as Yup from "yup";
import InputField from "../InputField";
import './ProductForm.style.css'
import Button from "../../button/Button";
import { useAddProductMutation } from "../../../features/products";
// eslint-disable-next-line react/prop-types
function ProductForm({ onRequestClose }) {
  const [addProduct,{isLoading}]=useAddProductMutation()
      const formik = useFormik({
      initialValues: {
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    },
        onSubmit: (values,{ resetForm }) => {
          addProduct(values)
          onRequestClose()
          resetForm({ values: "" });
          },  
       validationSchema: Yup.object({
      title: Yup.string().label("title").required(),
      price: Yup.string().label("price").required(),
      description: Yup.string().label("description").required(),
      image: Yup.string().required(""),
      category:Yup.string().label("category").required(),
    }),
      }); 

  return (
    <div>
        <Formik>
      <div className="">
        <Form
          onSubmit={formik.handleSubmit}
          className="form"
        >
          <InputField
            placeholder="title"
            name="title"
            id="title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title && (
            <span className="error-msg">
              {formik.errors.title}
            </span>
          )}
          <InputField
            placeholder="price"
            name="price"
            id="price"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price && (
            <span className="error-msg">
              {formik.errors.price}
            </span>
          )}
          <InputField
            placeholder="description"
            name="description"
            id="description"
            error={formik.touched.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <span className="error-msg">{formik.errors.description}</span>
          )}
        
          <InputField
            placeholder="image"
            name="image"
            id="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
          {formik.touched.image && formik.errors.image ? (
            <span className="error-msg">
              {formik.errors.image}
            </span>
          ) : null}
          <InputField
            placeholder="category"
            name="category"
            id="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.category}
          />
          {formik.touched.category && formik.errors.category ? (
            <span className="error-msg">
              {formik.errors.category}
            </span>
          ) : null}
            <div className="button-form">
              <Button text={isLoading ?"loading": "Add"}type="submit" />
              
              <button type="button" className="close-btn" onClick={() => onRequestClose()}>cancle</button>               
            </div>
              </Form>
                </div>
                  </Formik>
    </div>
  )
}

export default ProductForm
