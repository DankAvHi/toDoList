export type ButtonPropsType = Partial<HTMLButtonElement> & {
     text?: string;
     onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
     mode?: "link" | "button";
     href?: string;
};
