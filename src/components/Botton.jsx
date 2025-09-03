import React from 'react';

const CustomeButton = ({func,icon,text,style}) => {
    return (
  <div onClick={func} className='cursor-pointer px-2 py-2 bg-cyan-800 flex gap-2 text-white border border-black rounded-md'>
     {text}
  </div>
)
}

export default React.memo(CustomeButton);