export default function PostTitle({ children }) {
  return (
    <h3
      className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
