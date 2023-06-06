import React from 'react'

const ErrorMessage = ({children}) => {
  return (
    <div style={{
        width: "60%",
        margin:"10px auto",
        
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        fontSize:"27px",
        textTransform: "capitalize",

    }}>
    {children}

      
    </div>
  )
}

export default ErrorMessage
