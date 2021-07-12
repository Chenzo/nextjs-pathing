import { getPaths } from '../../../../lib/pathing.js'
import { useRouter } from "next/router";



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
          <h1>Model</h1>
        </>

    )

}