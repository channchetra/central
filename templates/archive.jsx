import Layou from 'components/Layou';
import Pagination from '~/components/Pagination';
import PostItem from '~/components/post/post-item';

export default function TemplateArchive({
  posts,
  pagination,
}) {

  return (
    <Layou>
      <section className="grid md:grid-cols-2 gap-5 mb-7 md:mb-7">
        {
          posts.map((node) =>
            <PostItem
              key={node.id}
              post={node}
              config={{
                showExcerpt: false,
              }}
              styles={{}}
            />
          )
        }
      </section>
      {pagination && (
        <Pagination
          currentPage={pagination?.currentPage}
          pagesCount={pagination?.pagesCount}
          basePath={pagination?.basePath}
        />
      )}
    </Layou>
  );
}