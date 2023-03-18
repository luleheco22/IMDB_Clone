import { NextPage } from 'next';
import { ErrorProps } from '../interfaces/index';

const Error: NextPage<ErrorProps> = ({ error }) => {

  return (
    <div className='text-center mt-10'>
      <h1>Error {error}</h1>
      <button 
      onClick={() => location.reload()}
      className='hover:text-amber-600' >Intenta de Nuevo</button>
    </div>
  );
};


export default Error;