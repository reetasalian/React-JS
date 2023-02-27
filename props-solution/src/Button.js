const Button = (props) =>{
    console.log(props);
    return(
        <button style={{background : props.btnBackground,
            color: props.btnColor,
            padding: props.btnPadding,
            border : `2px solid ${props.btnBorderColor}`,
            borderRadius: props.btnBorderRadius,
            margin :"20px",
            cursor : "pointer",
            boxShadow: "5px 5px 5px #a1a1a1"
        }}>{props.btnName}</button>
    )
}

export default Button;