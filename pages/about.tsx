import Link from 'next/link';


export default function About() {
  return <>
    <p>About page at /about</p>
    <Link href="/old-prefix/about">Go to the old route again</Link>
    </>
}
