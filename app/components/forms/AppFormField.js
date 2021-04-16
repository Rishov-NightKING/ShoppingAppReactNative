import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, errors, handleChange, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        // keyboardType="email-address"
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
        // placeholder="E-mail"
        // textContentType="emailAddress"
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormField;
