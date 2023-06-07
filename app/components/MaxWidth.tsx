import React from 'react'

function MaxWidth({ children, styles }: { children: React.ReactNode; styles?: string }) {
  return <div className={`max-w-[1920px] mx-auto ${styles}`}>{children}</div>
}

export default MaxWidth
