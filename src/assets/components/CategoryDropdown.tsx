import type { ReactNode } from 'react';

interface Props{
    title: string;
    children: ReactNode;
}

function CategoryDropdown({title, children} : Props) {

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${title}`} aria-expanded="false" aria-controls={`collapse${title}`}>
          {title}
        </button>
      </h2>

      <div id={`collapse${title}`} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CategoryDropdown