import Link from "next/link"
export default function Home() {
  return (
    <main >
      <h1> hello my friend</h1>
      <Link href= {{
        pathname: "/about",
        query:{name : "ali"}
      }}> about me</Link>
          </main>
  )
}
 