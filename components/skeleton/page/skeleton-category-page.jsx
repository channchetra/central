import Container from '~/components/layout/container';
import SkeletonPostItem from '../skeleton-post-item';

export default function SkeletonCategoryPage() {
  return (
    <Container className="my-5">
      <div className="animate-pulse items-center h-full justify-center">
        <div className="w-1/3 bg-gray-300 rounded-md h-6 mb-5" />
        <div>
          <div className="w-full bg-gray-300 rounded-md h-3 mb-1" />
          <div className="w-full bg-gray-300 rounded-md h-3 mb-1" />
          <div className="w-1/3 bg-gray-300 rounded-md h-3" />
        </div>
        <div className="border-b pb-5 md:pb-10" />
      </div>

      <section className="grid md:grid-cols-4 gap-5 my-5">
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
      </section>
    </Container>
  );
}
