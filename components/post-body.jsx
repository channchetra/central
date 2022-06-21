import sanitizeHtml from 'sanitize-html';
import styles from './post-body.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.content}
         dangerouslySetInnerHTML={{__html: sanitizeHtml(content, {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img' ])
         })}}
      />
    </div>
  )
}
