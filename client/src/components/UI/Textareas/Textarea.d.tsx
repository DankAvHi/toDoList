import React from "react";

export type InputPropsType = Partial<HTMLTextAreaElement> & {
     onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};
