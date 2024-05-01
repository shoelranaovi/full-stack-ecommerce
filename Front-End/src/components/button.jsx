

// eslint-disable-next-line react/prop-types
function Button( {text,widths}) {
  return (
    <button style={{width:widths}} className="bg-red-600 text-center text-white p-1 cursor-pointer rounded-full ">
     { text} 
    </button>
  )
}

export default Button