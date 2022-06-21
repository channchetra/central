import sanitizeHtml from 'sanitize-html';

export default function PostTitle({ children }) {
  return (
    <h3
      className="mb-5 lg:mb-3 text-2xl md:text-3xl lg:text-3xl font-bold tracking-tighter lg:leading-relaxed md:leading-none text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(children) }}
    />
  );
}
