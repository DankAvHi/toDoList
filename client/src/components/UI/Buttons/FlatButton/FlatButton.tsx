import { Link } from "react-router-dom";
import { ButtonPropsType } from "../Button.d";
import styles from "./FlatButton.module.css";

const FlatButton = ({ className, onClick, text, mode = "button", href = "/", disabled }: ButtonPropsType) => {
     let sizeStyles = "";

     const disabledClasses = disabled ? styles.disabled : null;

     if (mode === "link") {
          if (disabled) {
               return (
                    <button
                         disabled={true}
                         className={`${styles.FlatButton}  ${sizeStyles} ${disabledClasses} ${className}`}
                    >
                         <span className={styles.text}>{text}</span>
                    </button>
               );
          }

          return (
               <Link
                    onClick={onClick}
                    className={`${styles.FlatButton} ${sizeStyles} ${disabledClasses}  ${className}`}
                    to={href}
               >
                    <span className={styles.text}>{text}</span>
               </Link>
          );
     }

     return (
          <button
               disabled={disabled}
               className={`${styles.FlatButton} ${sizeStyles} ${disabledClasses}  ${className}`}
               onClick={onClick ? onClick : () => {}}
          >
               <span className={styles.text}>{text}</span>
          </button>
     );
};

export default FlatButton;
