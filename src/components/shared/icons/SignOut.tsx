export default function SignOut({
  ...props
}: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_96_220"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="12"
        y="3"
        width="56"
        height="64"
      >
        <rect
          x="13.5"
          y="4.5"
          width="53"
          height="61"
          rx="10.5"
          stroke="#393939"
          stroke-width="3"
          fill="none"
        />
      </mask>
      <g mask="url(#mask0_96_220)">
        <rect x="30" width="40" height="70" fill="#393939" />
      </g>
      <rect x="12" y="34" width="39" height="3" fill="#393939" />
      <mask
        id="mask1_96_220"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="15"
        y="16"
        width="39"
        height="39"
      >
        <rect
          x="17.1213"
          y="35.4351"
          width="24.4853"
          height="24.4853"
          transform="rotate(-45 17.1213 35.4351)"
          stroke="#393939"
          stroke-width="3"
          fill="none"
        />
      </mask>
      <g mask="url(#mask1_96_220)">
        <rect x="35" y="14" width="24" height="42" fill="#393939" />
      </g>
    </svg>
  );
}
