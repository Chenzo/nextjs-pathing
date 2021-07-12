import { getPaths } from '../../../lib/pathing.js'
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



export default function communityPage({routes}) {

    return (
        <>
          <h1>Community</h1>
          <Link href="/luxury-homes-for-sale/Arizona/Allevare-at-Verrado/Oakboro">
            <a>luxury-homes-for-sale/Arizona/Allevare-at-Verrado/Oakboro</a>
          </Link>
        </>

    )
}