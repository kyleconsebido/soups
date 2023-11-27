export function DefaultAvatar({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="50" cy="50" r="50" fill="#E2E2E2" />
      <mask
        id="mask0_88_157"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="100"
        height="100"
      >
        <circle cx="50" cy="50" r="50" fill="#211F1F" />
      </mask>
      <g mask="url(#mask0_88_157)">
        <ellipse
          cx="50"
          cy="108.738"
          rx="40.2913"
          ry="39.8058"
          fill="#9F9F9F"
        />
        <circle cx="50.4855" cy="39.8058" r="20.3883" fill="#9F9F9F" />
      </g>
    </svg>
  );
}
