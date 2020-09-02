import React from 'react';
import DateView from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import { Form } from "react-bootstrap";
import 'react-datepicker/dist/react-datepicker.css'

function DatePicker(props) {
    const { label, name, ...rest } = props

    return (
        <div className="form-control">
            <Field name={name}>
                {({ form, field }) => {
                    const { setFieldValue } = form
                    const { value } = field

                    return (
                        <DateView
                                id={name}
                                {...field}
                                {...rest}
                                selected={value}
                                onChange={val => setFieldValue(name, val)}
                        />
                    )
                }}
            </Field>
            {/* <ErrorMessage component={Form.Control.Feedback} name={name} /> */}
        </div>
    )
}

export default DatePicker