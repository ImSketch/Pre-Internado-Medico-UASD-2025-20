export default function Field({ label, type = 'text', className, ...props }) {
    const classNames = 'p-4 bg-white border border-yellow-800/35 hover:border-yellow-800/50 focus:border-yellow-600 shadow-sm rounded-md focus:outline-none transition-colors';

    return (
        <div className={`flex flex-col gap-3 ${className}`}>
            {label && <label htmlFor={props.id}>{label}</label>}
            {type === 'select' && <select className={classNames} {...props} />}
            {type !== 'select' && <input className={classNames} type={type} {...props} />}
        </div>
    );
}