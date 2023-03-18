import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SearchBox = () => {
    const [search, setSearch] = useState('');

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }
    

    return (
        <form 
           onSubmit={handleSubmit}
           className='flex max-w-6xl mx-auto justify-between items-center px-5'>
            <input
                type="text"
                value={search}
                placeholder='Search keywords...'
                className='w-full h-14 rounded-none placeholder-gray-500 outline-none
                bg-transparent flex-1'
                onChange={(e) => setSearch(e.target.value)}
            />
            <button
                type="submit"
                className='text-amber-600 disabled:text-gray-400'
                disabled={!search}
                >
                Search
            </button>
        </form>
    )
}

export default SearchBox
