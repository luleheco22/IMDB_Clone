import Link from 'next/link';
import React from 'react'
import { useRouter } from 'next/router';

interface NavbarItemProps {
    title: string;
    param: string;
}

const NavbarItem = ({title, param}:NavbarItemProps) => {
   
    const router = useRouter();
    const { genre } = router.query;


  return (
    <div>
        <Link
          className={`m-4 hover:text-amber-600 font-semibold p-2
          ${genre && genre === param && 
            'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'}`}       
          href={`/?genre=${param}`}>
            {title}
        </Link>
    </div>
  )
}

export default NavbarItem