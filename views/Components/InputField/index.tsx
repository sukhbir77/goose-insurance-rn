import { View, Text, TextInput } from 'react-native';
import React, { useState, useRef, Dispatch, SetStateAction } from 'react';

interface InputFieldProps {
    mode: any;
    valueText: string;
    handleChange: (valueText: string) => void;
}

const InputField = (props: InputFieldProps) => {
    const [borderColor, setBorderColor] = useState<String>("#c3c3cb");
    const isPassword = props.mode !== "email";

    return (
        <TextInput style={{ height: 40, width: "100%", borderBottomWidth: 1, borderColor: borderColor }}
            inputMode={props.mode}
            onFocus={() => setBorderColor("#F72697")}
            onBlur={() => setBorderColor("#c3c3cb")}
            value={props.valueText}
            onChangeText={(text) => {
                props.handleChange(text);
            }
            }
            secureTextEntry={isPassword}
            textContentType={isPassword ? 'password' : 'emailAddress'}
        />
    )
}

export default InputField;