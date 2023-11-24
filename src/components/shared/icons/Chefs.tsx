export default function Chefs({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_10_786)">
        <circle
          cx="27"
          cy="45.2364"
          r="14.5"
          stroke="#9F9F9F"
          strokeWidth="3"
        />
        <path d="M13 44.2364H41" stroke="#9F9F9F" strokeWidth="3" />
      </g>
      <circle
        cx="26.6545"
        cy="17.6545"
        r="8.15455"
        stroke="#9F9F9F"
        strokeWidth="3"
      />
      <mask
        id="mask0_10_786"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="22"
        y="35"
        width="39"
        height="32"
      >
        <path
          d="M59.1182 50.8271C59.1182 58.4746 51.4375 65.1542 41.3091 65.1542C31.1807 65.1542 23.5 58.4746 23.5 50.8271C23.5 43.1796 31.1807 36.5 41.3091 36.5C51.4375 36.5 59.1182 43.1796 59.1182 50.8271Z"
          fill="#D9D9D9"
          stroke="black"
          strokeWidth="3"
        />
      </mask>
      <g mask="url(#mask0_10_786)">
        <path
          d="M57.8519 44.892C57.8519 52.6733 50.8666 59.2191 41.9421 59.2191C33.0176 59.2191 26.0322 52.6733 26.0322 44.892C26.0322 37.1107 33.0176 30.5648 41.9421 30.5648C50.8666 30.5648 57.8519 37.1107 57.8519 44.892Z"
          stroke="#9F9F9F"
          strokeWidth="3"
        />
      </g>
      <path
        d="M57.8519 44.1797C57.8519 45.8821 56.5163 47.7815 53.5531 49.3439C50.6584 50.8702 46.5559 51.8595 41.9421 51.8595C37.3283 51.8595 33.2257 50.8702 30.3311 49.3439C27.3678 47.7815 26.0322 45.8821 26.0322 44.1797C26.0322 42.4774 27.3678 40.578 30.3311 39.0155C33.2257 37.4893 37.3283 36.5 41.9421 36.5C46.5559 36.5 50.6584 37.4893 53.5531 39.0155C56.5163 40.578 57.8519 42.4774 57.8519 44.1797Z"
        stroke="#9F9F9F"
        strokeWidth="3"
      />
      <defs>
        <clipPath id="clip0_10_786">
          <rect
            width="34"
            height="19"
            fill="white"
            transform="translate(10 26)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
