import React from 'react';
//style
import './Content.module.sass';

interface IContentProps {
  children?: React.ReactNode;
  className?: string
}

function Content({children, className}: IContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Content;
