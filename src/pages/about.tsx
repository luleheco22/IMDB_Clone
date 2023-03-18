import Layout from '@/components/Layout'
import Loading from '@/components/Loading';
import { useState, useEffect } from 'react';

const About = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setIsLoading(false)
    }, [])
    return (
        <Layout>
            <Loading isLoading={isLoading} />
            <div className='max-w-6xl mx-auto space-y-4 px-5'>
                <h1 className='text-2xl font-medium text-amber-600'>
                    About
                </h1>
                <p className='text-lg'>
                    IMDb is an online platform dedicated to information about movies, television, and video games. Founded in 1990 as a Usenet project by Col Needham, IMDb has grown to become one of the most visited entertainment websites in the world.
                    At IMDb, our goal is to provide users with the most comprehensive and accurate information about the movies, TV shows, and video games they love. Our team of content and technology experts works tirelessly to maintain a database of titles that spans over 6 million entries.
                </p>
                <p className='text-lg'>
                    But IMDb is more than just a collection of data. It is also a community of fans of movies and TV shows who share their passion for these media. In our forums and reviews, users can debate and analyze what they like and do not like about the latest movies and TV shows.
                    At IMDb, we value honesty and transparency. We strive to provide accurate, verified information about each title in our database. We also commit to maintaining a safe and respectful online community for our users.
                </p>
                <p className='text-lg'>
                Thank you for visiting IMDb. We hope that our platform is a valuable resource for your love of movies, television, and video games.
                </p>
            </div>
        </Layout>
    )
}

export default About