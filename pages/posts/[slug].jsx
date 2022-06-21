import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import { getPost, getPosts } from '../../lib/get-post-and-next-posts'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import Tags from '../../components/tags'
import CommonBreadcrumb from '../../components/common/breadcrumb'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useState } from 'react'

const postsPerPage = 1

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const [morePosts, setMorePosts] = useState(posts.edges)
  const [pageInfo, setPageInfo] = useState(posts.pageInfo)
  const [hasMore, setHasmore] = useState(posts.pageInfo.hasNextPage)

  const getMorePost = async () => {
    const newPosts = await getPosts(postsPerPage, pageInfo.endCursor)
    setMorePosts((oldPosts) => [...oldPosts, ...newPosts.edges])
    setPageInfo(newPosts.pageInfo)
    setHasmore(newPosts.pageInfo.hasNextPage)
  }

  if (!router.isFallback && !post?.databaseId) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <>
      <Layout preview={preview}>
        <Container>
          <Header />

          <CommonBreadcrumb className="my-5" items={[ { label: 'One-Minute', link: '#' }, { label: post.title } ]} />

          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <Head>
                  <title>
                    {post.title} {CMS_NAME}
                  </title>
                  <meta
                    property="og:image"
                    content={post.featuredImage?.node.sourceUrl}
                  />
                </Head>
                <PostHeader
                  title={post.title}
                  coverImage={post.featuredImage}
                  date={post.date}
                  author={post.author}
                  categories={post.categories}
                />
                <PostBody content={post.content} />
                <footer>
                  {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                </footer>
              </article>

              <SectionSeparator />
            </>
          )}

          <InfiniteScroll
            dataLength={morePosts.length} //This is important field to render the next data
            next={getMorePost}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            // refreshFunction={this.refresh}
            // pullDownToRefresh
            // pullDownToRefreshThreshold={50}
            // pullDownToRefreshContent={
            //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            // }
            // releaseToRefreshContent={
            //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            // }
          >
          {
            morePosts.map(({node: post}) => {
              return (
                <article key={post.id}>
                  <Head>
                    <title>
                      {post.title} {CMS_NAME}
                    </title>
                    <meta
                      property="og:image"
                      content={post.featuredImage?.node.sourceUrl}
                    />
                  </Head>
                  <h1>
                    {post.featuredImage?.node.sourceUrl}
                    </h1>
                    {
                      post?.featuredImage?.node?.sourceUrl &&
                      <PostHeader
                        title={post.title}
                        coverImage={post.featuredImage}
                        date={post.date}
                        author={post.author}
                        categories={post.categories}
                      />
                    }
                  <PostBody content={post.content} />
                  <footer>
                    {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
                  </footer>
                </article>
              )
            })
          }
            
          </InfiniteScroll>
        </Container>
      </Layout>

    </>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getPost(params.slug)
  const posts =  await getPosts(postsPerPage, null)
  return {
    props: {
      preview,
      post,
      posts
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.databaseId}`) || [],
    fallback: true,
  }
}
