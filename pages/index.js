import Head from 'next/head';

import Nav from '../components/Nav';
import PostCard from '../components/PostCard';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>

            <Nav />

            <main>
                <div className={styles.container}>
                    {posts.length === 0 ? (
                        <h2>No added posts</h2>
                    ) : (
                        <ul>
                            {posts.map((post, i) => (
                                <PostCard post={post} key={i} />
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    // get the current environment
    let dev = process.env.NODE_ENV !== 'production';
    let server = dev ? "http://localhost:3001" : "https://nextjs-blog-app-with-mongodb-five.vercel.app/"
    // request posts from api
    let response = await fetch(`${server}/api/posts`);
    // extract the data
    let data = await response.json();
    console.log(data);

    return {
        props: {
            posts: data['message'],
        },
    };
}