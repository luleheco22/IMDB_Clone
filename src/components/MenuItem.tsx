import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
    title: string;
    address: string;
    Icon: React.ReactNode;
  }

const MenuItem = ({title, address, Icon}: MenuItemProps) => {
  return (
    <div>
        <Link 
          href={address}
          className="mx-4 lg:mx-6 hover:text-amber-600"
          >
            {Icon}
            <p className='hidden sm:inline my-2'>
                {title}
            </p>
        </Link>
    </div>
  )
}

export default MenuItem