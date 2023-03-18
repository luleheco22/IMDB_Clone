import React from 'react'
import Image from 'next/image'

interface LoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className='flex justify-center mt-20'>
          <Image width={100} height={100} src="spinner.svg" alt="loading" />
        </div>
      )}
    </>
  )
}

export default Loading