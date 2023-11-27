export function Hamburger({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="-5.479"
        y="5.93108"
        width="79.9575"
        height="9.138"
        fill="#393939"
      />
      <rect
        x="-5.47852"
        y="29.931"
        width="79.9575"
        height="9.138"
        fill="#393939"
      />
      <rect x="-5" y="54" width="79.9575" height="9.138" fill="#393939" />
    </svg>
  );
}
