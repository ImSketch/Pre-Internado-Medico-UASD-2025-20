import { createElement } from "react";
import Link from 'next/link'

export default function Button({ href = null, children, className, ...props }) {
    const classNames = `hover:scale-105 active:scale-95 sm:text-base text-sm bg-yellow-200 hover:bg-yellow-300 active:bg-yellow-400 disabled:opacity-50 text-yellow-800 hover:text-yellow-900 active:text-yellow-950 font-medium rounded-full px-4 py-3 text-center transition-all cursor-pointer ${className}`;
    props.role = 'button';

    if (href)
        return (
            <Link className={classNames} {...props} href={href}>
                {children}
            </Link>
        );

    return (
        <button className={classNames} {...props}>{children}</button>
    )
}