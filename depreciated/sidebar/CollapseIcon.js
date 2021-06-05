import React from 'react'

function CollapseIcon(props) {
    return (
      <svg
        aria-hidden="true"
        data-prefix="fas"
        data-icon="minus"
        className="minus-solid_svg__svg-inline--fa minus-solid_svg__fa-minus minus-solid_svg__fa-w-14"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        {...props}
      >
        <path
          fill="currentColor"
          d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
        />
      </svg>
    );
  }
  
  export default CollapseIcon;