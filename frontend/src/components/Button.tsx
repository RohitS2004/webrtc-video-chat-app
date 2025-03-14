import { ReactElement } from "react";

type TextSizeTypes = "md" | "lg" | "xl" | "2xl"
type FontWeightTypes = "normal" | "bold" | "semibold" | "extrabold"

interface ButtonProps {
    buttonText?: string,
    buttonIcon?: ReactElement,
    buttonBackgroundColor: string,
    buttonTextColor?: string,
    buttonTextSize?: TextSizeTypes,
    buttonFontWeight?: FontWeightTypes,
    buttonPadding: string,
    buttonBorderRadius: string,
    extraClasses?: string,
    handleOnClick?: any // This will be a function that will be passed to the button 
}

const TextSize = {
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
}

const FontWeight = {
    normal: "font-normal",
    bold: "font-bold",
    semibold: "font-semibold",
    extrabold: "font-extrabold",
}

const Button = (props: ButtonProps) => {
    return (
        <button
        onClick={props.handleOnClick}
        className={`
            ${FontWeight[props.buttonFontWeight || "normal"]}
            ${TextSize[props.buttonTextSize || "xl"]}
            ${props.buttonTextColor}
            ${props.buttonPadding}
            ${props.buttonBorderRadius}
            ${props.buttonBackgroundColor}
            ${props.extraClasses}
            `}
        >
            {
                props.buttonIcon && props.buttonIcon
            }

            {
                props.buttonText && props.buttonText
            }
        </button>
    )
}

export default Button;