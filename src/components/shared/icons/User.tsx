export default function User({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_110_222)">
        <circle cx="34.5" cy="58.5" r="23" stroke="#9F9F9F" strokeWidth="3" />
        <path d="M13.0625 56.9688H55.9375" stroke="#9F9F9F" strokeWidth="3" />
      </g>
      <path
        d="M46.5 20.9758C46.5 27.2582 41.184 32.4515 34.5 32.4515C27.816 32.4515 22.5 27.2582 22.5 20.9758C22.5 14.6933 27.816 9.5 34.5 9.5C41.184 9.5 46.5 14.6933 46.5 20.9758Z"
        stroke="#9F9F9F"
        strokeWidth="3"
      />
      <defs>
        <clipPath id="clip0_110_222">
          <rect
            width="50"
            height="27.8931"
            fill="white"
            transform="translate(10 30)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
