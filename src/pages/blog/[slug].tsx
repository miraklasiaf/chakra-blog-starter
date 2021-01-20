import { Heading, Text, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { Layout } from '../../components/Layout'
import { DateFormatter } from '../../components/DateFormatter'
import { BasicPost, getPostBySlug, getPosts } from '../../lib/api'
import Markdown from '../../components/markdown'
import { CMS_NAME } from '..'

interface PostProps {
  post: BasicPost
  source: string
}

export default function Post({ post, source }: PostProps) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const { title, dateString } = post

  const content = hydrate(source, { components: Markdown })

  return (
    <>
      <Head>
        <title>
          {title} | {CMS_NAME}
        </title>
      </Head>
      <Layout>
        <article>
          <Heading as="h1" mb="4">
            {title}
          </Heading>
          <DateFormatter dateString={dateString} />
          <Box>{content}</Box>
        </article>
      </Layout>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug)

  const mdxSource = await renderToString(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    components: Markdown,
    scope: undefined
  })

  return {
    props: {
      post,
      source: mdxSource
    }
  }
}

export async function getStaticPaths() {
  const posts = getPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
