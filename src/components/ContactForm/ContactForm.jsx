import { ErrorMessage, Field, Form, Formik } from "formik"
import s from "./ContactForm.module.css"
import * as Yup from 'yup';

const ContactForm = () => {
    const handleSubmit = (values, options) => {
        console.log(values);
        options.resetForm();
    };

    const orderSchema = Yup.object().shape({
        username: Yup.string().min(3, "мінімальна кількість символів - 3")
            .max(50, "максимальна кількість символів" - 50)
            .required("обов'язкове для заповнення"),
        number: Yup.string()
            .min(9).required("обов'язкове для заповнення"),
    });

const initialValues = { 
        username: "",
        number: "",    
    };

   
    return (
        <div className={s.wrapper}>
            <Formik 
            validationSchema={orderSchema}
                onSubmit={handleSubmit}
                initialValues={initialValues}>
                <Form className={s.form} > 
                   <label className={s.label}>
                     <span className={s.span} >Name</span>
                        <Field className={s.input} name="username" />
                        <ErrorMessage name="username" component="text" className={s.error} />
                     </label>
                    <label className={s.label}>
                     <span className={s.span}>Number</span>
                        <Field className={s.input} name="number" />
                        <ErrorMessage name="number" component="text" className={s.error} />
                        </label>
                <button className={s.buttonForm} type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm