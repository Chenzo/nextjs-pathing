import { getPaths } from '../../lib/pathing.js'
import { useRouter } from "next/router";
import Link from 'next/link'


export async function getStaticProps({ params }) {
  const singleCommData = "datadata"
  return {
    props: {
      singleCommData
    }
  }
}


export async function getStaticPaths() {
  const paths = await getPaths()

  return {
    paths,
    fallback: false
  }
}



export default function communityPage({singleCommData}) {

    return (
        <>
           <h1>State Page</h1>


           <div>
          <Link href="/luxury-homes-for-sale/Arizona/Allevare-at-Verrado">
            <a>luxury-homes-for-sale/Arizona/Allevare-at-Verrado</a>
          </Link>
          </div>
           
        </>

    )
}