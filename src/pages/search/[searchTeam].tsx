import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import Results from '../../components/Results';

function SearchPage() {

    const [data, setData] = useState([]);
    const router = useRouter();
    const { searchTeam } = router.query;

    useEffect(() => {
        try {
              const fecthData = async () => {
              const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${searchTeam}&page=1&include_adult=false`);
              const data = await res.json();
              setData(data.results);
            }

            fecthData();

        } catch (error) {
            console.log(error, 'error')
        }
    }, [searchTeam])

    return (
        <Layout>
            {data && data.length === 0 && (
                <h1 className='text-center pt-6'>
                    No results found
                </h1>
            )}
            {data && <Results results={data} />}
        </Layout>


    )
}

export default SearchPage