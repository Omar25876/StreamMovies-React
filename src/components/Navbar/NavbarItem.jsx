import React from 'react'

export default function NavbarItem({name, Icon}) {

  return (
    <div className='text-white flex items-center gap-2 cursor-pointer font-semibold text-[15px] hover:underline
     underline-offset-8 mb-2'>
        <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}
