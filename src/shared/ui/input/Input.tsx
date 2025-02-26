import React from 'react';

interface inputProps {
    label?: string,
    placeholder?: string,
    name?: string,
    type?: string,
    value?: string | number,
    className?: string,
    onChange?: ((e) => void),
    onFocus?: (() => void),
    onBlur?: (() => void)
}

const Input = ({label, placeholder, name, type, value, className, onChange, onFocus, onBlur}: inputProps) => {
        return (
            <div className="w-full flex flex-col gap-2">
                {label && (<label className="text-slate-800 text-sm" htmlFor={name}>{label}</label>)}
                <input className={`w-full rounded-2xl bg-slate-200 p-2 ${className}`} name={name} type={type}
                       onBlur={onBlur} value={value} onChange={onChange} placeholder={placeholder}
                       onFocus={onFocus}/>
            </div>
        );
    }
;

export default Input;