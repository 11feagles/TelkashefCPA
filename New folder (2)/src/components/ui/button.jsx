import React from 'react'

export const Button = ({ children, className = '', asChild = false, variant = 'default', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition border'
  const styles = variant === 'outline'
    ? 'bg-white border-slate-300 text-slate-800 hover:bg-slate-50'
    : 'bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700'
  const cn = base + ' ' + styles + (className ? ' ' + className : '')
  const Comp = asChild ? 'span' : 'button'
  return <Comp className={cn} {...props}>{children}</Comp>
}
