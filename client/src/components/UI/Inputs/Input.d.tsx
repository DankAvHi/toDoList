import React, { HTMLInputTypeAttribute } from "react";

export type InputPropsType = Partial<HTMLInputElement> & {
     type?: HTMLInputTypeAttribute;
     onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
