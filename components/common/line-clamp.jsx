import sanitizeHtml from 'sanitize-html';

export default function CommonLineClamp({ content, line }) {
    const style = {
        display: '-webkit-box',
        overflow: 'hidden',
        '-webkitBoxOrient': 'vertical',
        '-webkitLineClamp': line,
    }

    return <span style={style}>{ sanitizeHtml(content, { allowedTags: [] }) }</span>
}
