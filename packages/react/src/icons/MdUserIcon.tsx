import React from 'react';
import type MdIconProps from './icon.model';

const MdUserIcon: React.FunctionComponent<MdIconProps> = ({ className = '', ...otherProps }: MdIconProps) => {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className} {...otherProps}>
      <path
        d="M15.5682 3.2002C13.122 3.2002 10.7308 3.92557 8.69691 5.28458C6.663 6.64359 5.07776 8.57521 4.14166 10.8352C3.20555 13.0951 2.96063 15.5819 3.43785 17.9811C3.91507 20.3802 5.09301 22.584 6.8227 24.3137C8.5524 26.0434 10.7562 27.2213 13.1553 27.6985C15.5545 28.1758 18.0413 27.9308 20.3012 26.9947C22.5612 26.0586 24.4928 24.4734 25.8518 22.4395C27.2108 20.4056 27.9362 18.0144 27.9362 15.5682C27.9362 12.288 26.6331 9.14215 24.3137 6.8227C21.9942 4.50325 18.8484 3.2002 15.5682 3.2002ZM8.9122 24.0002V23.8882C9.29829 22.4529 10.1649 21.1933 11.3675 20.3198C12.5701 19.4463 14.0358 19.0115 15.5202 19.0882C17.0046 19.0115 18.4703 19.4463 19.6729 20.3198C20.8755 21.1933 21.7421 22.4529 22.1282 23.8882C22.1312 23.9255 22.1312 23.9629 22.1282 24.0002C20.2588 25.4807 17.9526 26.302 15.5682 26.3362C13.1504 26.3416 10.8028 25.5233 8.9122 24.0162V24.0002ZM12.6722 13.3602C12.6735 12.6945 12.9053 12.0498 13.3283 11.5357C13.7513 11.0217 14.3393 10.6701 14.9923 10.5406C15.6453 10.4112 16.3229 10.512 16.91 10.8258C17.4971 11.1397 17.9573 11.6472 18.2124 12.2621C18.4675 12.877 18.5017 13.5613 18.3091 14.1985C18.1166 14.8358 17.7093 15.3867 17.1564 15.7575C16.6036 16.1283 15.9393 16.2961 15.2767 16.2325C14.614 16.1688 13.9939 15.8775 13.5218 15.4082C13.2526 15.1394 13.039 14.8201 12.8932 14.4687C12.7475 14.1173 12.6724 13.7406 12.6722 13.3602ZM23.5682 22.8322C23.0604 21.4345 22.173 20.2061 21.0058 19.2847C19.8385 18.3633 18.4376 17.7855 16.9602 17.6162C17.9882 17.2984 18.8682 16.6224 19.4402 15.711C20.0123 14.7996 20.2385 13.7132 20.0778 12.6493C19.917 11.5853 19.3801 10.6142 18.5643 9.91248C17.7486 9.21072 16.7082 8.8248 15.6322 8.8248C14.5562 8.8248 13.5158 9.21072 12.7001 9.91248C11.8843 10.6142 11.3474 11.5853 11.1866 12.6493C11.0259 13.7132 11.2521 14.7996 11.8242 15.711C12.3962 16.6224 13.2762 17.2984 14.3042 17.6162C12.8082 17.7755 11.3859 18.3476 10.1963 19.2687C9.0068 20.1899 8.09685 21.4236 7.5682 22.8322C6.15552 21.2918 5.22167 19.3736 4.88057 17.3115C4.53946 15.2494 4.80585 13.1327 5.64723 11.2194C6.48861 9.30617 7.86862 7.67913 9.61891 6.53678C11.3692 5.39444 13.4141 4.78616 15.5042 4.78616C17.5943 4.78616 19.6392 5.39444 21.3895 6.53678C23.1398 7.67913 24.5198 9.30617 25.3612 11.2194C26.2025 13.1327 26.4689 15.2494 26.1278 17.3115C25.7867 19.3736 24.8529 21.2918 23.4402 22.8322H23.5682Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MdUserIcon;
