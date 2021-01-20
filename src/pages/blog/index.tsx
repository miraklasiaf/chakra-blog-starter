import { Box, Heading, Link } from '@chakra-ui/react'
import Head from 'next/head'
import NextLink from 'next/link'
import { Layout } from '../../components/Layout'
import { DateFormatter } from '../../components/DateFormatter'
import { BasicPost, getPosts } from '../../lib/api'
import { CMS_NAME } from '..'

export interface IndexProps {
  posts: BasicPost[]
}

export default function Index({ posts }: IndexProps) {
  return (
    <>
      <Head>
        <title>Blog | {CMS_NAME}</title>
      </Head>
      <Layout>
        <Box as="section" p="4">
          {posts.map(({ slug, title, dateString }) => (
            <Box key={slug} mb="6">
              <Heading as="h2" mb="2">
                <NextLink href={`/blog/${slug}`} passHref>
                  <Link sx={{ color: 'text' }}>{title}</Link>
                </NextLink>
              </Heading>
              <span>
                <DateFormatter dateString={dateString} />
              </span>
            </Box>
          ))}
        </Box>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = getPosts()

  return {
    props: { posts }
  }
}
