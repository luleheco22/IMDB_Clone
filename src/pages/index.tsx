import Layout from '@/components/Layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Results from '@/components/Results';
import Error from './_error';
import Loading from '../components/Loading';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export default function Home() {
  const [results, setResults] = useState([])
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { genre } = router.query;
  useEffect(() => {
    setLoading(true);
    
    try {
      const request = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/${genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 10000 } });
        const data = await res.json()
        setResults(data.results)
        if(!res.ok){
          setError('ha ocurrido algo mal')
        }
        setLoading(false);
      }
      request();
      
    } catch (err) {
      console.log(err,'esto')
    }

  }, [genre])



  return (
    <Layout>
      {loading && <Loading isLoading={loading}/>}
      <div>
      {error ? (
        <Error error={error} />
        ) : (
          <Results results={results}/>
          )}
      </div>
    </Layout>
  )
}
