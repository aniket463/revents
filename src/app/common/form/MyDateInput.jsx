import { useField, useFormikContext } from 'formik'
import React from 'react'
import { FormField, Label } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyDateInput = ({ lable, ...props }) => {
    const {setFieldValue} = useFormikContext()
    const [field, meta] = useField(props)
    return (<FormField error={meta.touched && !!meta.error}>
        <label>{lable}</label>
        <DatePicker
            {...field}
            {...props}
            selected={(field.value && new Date(field.value)) || null}
            onChange={value=> setFieldValue(field.name,value)}
             />
        {meta.touched && meta.error ? (
            <Label basic color='red'>{meta.error}</Label>
        ) : null}
    </FormField>)
}

export default MyDateInput