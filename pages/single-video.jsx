// import TemplateArchiveCategory from '~/templates/archive-category';

// import PostItem from '~/components/post/post-item';
import Container from '~/components/layout/container';

export default function Search() {
  return (
    <div className="py-5 sm:py-8 bg-zinc-200">
      <Container>
        <div className="relative pb-[56%]">
          {/* Video Frame here */}
          <iframe
            src="https://www.youtube.com/embed/hvM7vuZNpSc"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </Container>
    </div>

    // Include post detail
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
