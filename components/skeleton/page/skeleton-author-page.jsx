import Container from '~/components/layout/container';
import SkeletonPostItem from '../skeleton-post-item';

export default function SkeletonAuthorPage() {
  return (
    <Container className="my-5">
      <section className="grid md:grid-cols-3 gap-5 sm:gap-7 my-5">
        <div className="bg-gray-50 p-5 text-center shadow dark:bg-gray-800">
          <div className="w-[200px] h-[200px] bg-gray-400 aspect-[1] mx-auto" />
          <div className="w-1/2 bg-gray-300 rounded-md h-4 mx-auto mt-3 mb-4" />
          <div>
            <div className="w-full bg-gray-300 rounded-md h-3 mx-auto mb-2" />
            <div className="w-2/3 bg-gray-300 rounded-md h-3 mx-auto" />
          </div>
        </div>
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
        <SkeletonPostItem />
      </section>
    </Container>
  );
}
