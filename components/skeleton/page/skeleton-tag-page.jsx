import Container from '~/components/layout/container';
import SkeletonPostItem from '../skeleton-post-item';

export default function SkeletonTagPage() {
  return (
    <>
      <div className="sm:py-7 sm:text-2xl py-12 bg-slate-200 text-center text-xl font-bold dark:bg-zinc-600">
        <div className="w-1/4 bg-gray-300 rounded-md h-6 mb-3 mx-auto" />
      </div>

      <Container className="my-5">
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
    </>
  );
}
