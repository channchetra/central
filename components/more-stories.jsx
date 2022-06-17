import PostPreview from './post-preview';
import CommonSectionHeader from './common/section-header';

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      
      <CommonSectionHeader type="primary" title="Section Header Primary" />
      <CommonSectionHeader type="primary" title="Section Header Primary" lineColor="before:bg-black" />

      <CommonSectionHeader type="secondary" title="Section Header Secondary" className="mb-5 !text-lg" />
      <CommonSectionHeader type="secondary" title="Section Header Secondary" lineColor="before:bg-black" lineHighlightColor='after:bg-blue-100' className="mb-5 !text-lg" />

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.databaseId}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.databaseId}
            excerpt={node.excerpt}
          />
        ))}
      </div>
    </section>
  );
}