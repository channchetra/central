import parse from 'html-react-parser';
import styles from './post-body.module.css'

export default function PostBody({ content }) {
  
  if (!content) {
    return (null)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={styles.content}
      >
        { parse(content) }
      </div>
    </div>
  )
}
