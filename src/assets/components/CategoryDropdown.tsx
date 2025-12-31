import type { ReactNode } from 'react';
import { useId } from 'react';

interface Props{
    title: string;
    children: ReactNode;
}

function CategoryDropdown({title, children} : Props) {
    const id = useId();

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`} aria-expanded="false" aria-controls={`collapse-${id}`}>
          {title}
        </button>
      </h2>

      <div id={`collapse-${id}`} className="accordion-collapse collapse">
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CategoryDropdown