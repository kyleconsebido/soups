interface CommentsProps extends React.SVGProps<SVGSVGElement> {
  /**@defaultValue true */
  isFilled?: boolean;
}

export function Comments({ isFilled = true, ...props }: CommentsProps) {
  return isFilled ? (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_155_214)">
        <ellipse cx="35" cy="31.5" rx="35" ry="28.5" fill="#EDBF1F" />
        <path
          d="M62.8991 70.2559L42.9367 57.9524L62.1641 46.8181L62.8991 70.2559Z"
          fill="#EDBF1F"
        />
      </g>
      <defs>
        <clipPath id="clip0_155_214">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_160_274)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.6917 54.6198L42.9367 57.9524L48.7367 61.5271L56.7778 66.4832L62.8991 70.2559L62.6737 63.0689L62.3776 53.6279L62.1641 46.8181L56.5 50.0981V57.6238L56.5524 59.2962L56.5 59.2639V59.5L48.6917 54.6198Z"
          fill="#9F9F9F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M45.3636 52.5397C42.2078 53.476 38.7319 54 35 54C17.7729 54 6 42.8331 6 31.5C6 20.1669 17.7729 9 35 9C52.2271 9 64 20.1669 64 31.5C64 36.9634 61.264 42.3882 56.5 46.5419V53.9905C64.7161 48.7752 70 40.6401 70 31.5C70 15.7599 54.33 3 35 3C15.67 3 0 15.7599 0 31.5C0 47.2401 15.67 60 35 60C41.0675 60 46.7744 58.7428 51.7493 56.5308L45.3636 52.5397Z"
          fill="#9F9F9F"
        />
      </g>
      <defs>
        <clipPath id="clip0_160_274">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
