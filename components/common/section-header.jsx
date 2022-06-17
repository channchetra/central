/* eslint-disable no-unused-vars */
import classNames from "classnames"

export default function CommonSectionHeader({ type = 'primary', title, className = 'text-xl', lineColor = 'before:bg-gray-100', lineHighlightColor = 'after:bg-red-900' }) {
    const primaryClass = classNames(
        "relative",
        "pr-5",
        "before:content-['']", 
        "before:block",
        "before:h-1",
        "before:absolute",
        "before:left-full",
        "before:top-2/4",
        "before:w-screen",
        lineColor,
    )
    const secondaryClass = classNames(
        "relative",
        "mb-0.5",

        "before:content-['']", 
        "before:h-0.5",
        "before:absolute",
        "before:top-full",
        "before:left-0",
        "before:w-full",
        lineColor,

        "after:h-0.5",
        "after:absolute",
        "after:top-full",
        "after:left-0",
        "after:w-14",
        lineHighlightColor,
    )

    if (type === 'primary') {
        return <div className={`overflow-hidden ${className}`}>
            <span className={primaryClass}>{ title }</span>
        </div>
    }
    
    if (type === 'secondary') {
        return <div className={`${className}`}>
            <div className={`${secondaryClass}`}>{ title }</div>
        </div>
    }
}
