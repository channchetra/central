import PostTitle from './post-title';
import PostAuthor from './post-author';
import PostCategoryTag from './post-category-tag';
import PostCoverImage from "./post-cover-image"
import PostDate from './post-date';
import PostExcerpt from './post-excerpt';

export default function PostItemGridView({ post, className = '', styles, config = {} }) {
    if (!post) {
        return (null)
    }
    console.log(post)
    const conf = {
        showImage: true,
        showCategoryTagOnImage: false,
        showTitle: true,
        showExcerpt: true,
        showMeta: true,
        showAuthor: true,
        showAuthorAvatar: false,
        showAuthorName: true,
        showDate: true,
        showCategoryTag: false,
        showCategoryTagMultiple: false,
        titleLineClamp: '2',
        excerptLineClamp: '3',
        imageWidth: 2000,
        imageHeight: 1000,
        ...config,
    }
    const { title, databaseId, featuredImage, excerpt, date, author, categories } = post || {}
    const classes = {
        hover: 'hover:text-rose-600',
        image: {
            wrapper: 'mb-3 relative',
            category: {
                wrapper: 'absolute bottom-0',
                name: 'text-[11px] text-white bg-rose-900 hover:bg-rose-700 px-1 mr-1'
            }
        },
        title: {
            wrapper: 'mb-3',
            title: 'text-lg md:text-xl',
        },
        excerpt: {
            excerpt: 'text-gray-500',
        },
        meta: {
            wrapper: 'flex items-center text-xs mb-3',
            author: {
                wrapper: 'flex items-center',
                avatar: 'w-12 h-12 relative mr-4',
                name: 'font-medium text-black',
            },
            date: {
                wrapper: '',
                date: 'text-gray-500',
            },
            category: {
                wrapper: 'mr-3',
                name: 'text-[11px] text-white bg-rose-900 hover:bg-rose-700 px-1 mr-1'
            }
        },
        ...styles,
    }
    const postDetailLink = `/posts/${databaseId}`
    console.log(post)
    return <div className={`${className} ${classes.hover}`}>
        {conf.showImage && (
            <PostCoverImage 
                title={title} 
                image={featuredImage} 
                link={postDetailLink} 
                categories={categories}
                styles={classes.image}
                config={{
                    width: conf.imageWidth,
                    height: conf.imageHeight,
                    showCategoryTag: conf.showCategoryTagOnImage,
                    showCategoryTagMultiple: conf.showCategoryTagMultiple,
                }}
            />
        )}

        {conf.showTitle && (
            <PostTitle title={title} line={conf.titleLineClamp} link={postDetailLink} styles={classes.title} />
        )}

        { conf.showMeta && (
            <div className={classes.meta.wrapper}>
                {conf.showCategoryTag && (
                    <PostCategoryTag categories={categories} multiple={conf.showCategoryTagMultiple} styles={classes.meta.category} />
                )}
                
                {conf.showAuthor && (
                    <>
                        <PostAuthor 
                            author={author} 
                            styles={classes.meta.author} 
                            config={{
                                showAvatar: conf.showAuthorAvatar,
                                showName: conf.showAuthorName,
                            }} 
                        />
                        <div className={`mx-2 ${classes.meta.date.date}`}>-</div>
                    </>
                )}
                
                {conf.showDate && (
                    <PostDate dateString={date} styles={classes.meta.date} />
                )}      
            </div>
        )}

        {conf.showExcerpt && (
            <PostExcerpt excerpt={excerpt} line={conf.excerptLineClamp}  styles={classes.excerpt} />
        )}
        
    </div>
}
