import { Box, Heading, Text } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import Head from 'next/head'

export const CMS_NAME = 'Basic.dev'

export default function Index() {
  return (
    <>
      <Head>
        <title>All Posts | {CMS_NAME}</title>
      </Head>
      <Layout>
        <Box maxW="4xl" mx="auto">
          <Heading as="h1" mt="8">
            This is my cool website.
          </Heading>
          <Text fontSize="md" mt="10">
            My cool website and a blog and uses Nextjs.
          </Text>
        </Box>
      </Layout>
    </>
  )
}
