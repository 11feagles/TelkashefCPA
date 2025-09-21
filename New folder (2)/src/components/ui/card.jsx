import React from 'react'

export const Card = ({ children, className = '' }) => (
  <div className={`border bg-white ${className}`}>{children}</div>
)

export const CardHeader = ({ children, className = '' }) => (
  <div className={`px-4 pt-4 ${className}`}>{children}</div>
)

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
)

export const CardContent = ({ children, className = '' }) => (
  <div className={`px-4 pb-4 ${className}`}>{children}</div>
)
