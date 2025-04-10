// components/Collapsible.tsx

import React from 'react'
import Collapsible from 'react-collapsible'

const CollapsibleContent: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <Collapsible trigger={title}>
      {children}
    </Collapsible>
  )
}

export default CollapsibleContent
