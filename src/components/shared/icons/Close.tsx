export default function Close({
  ...props
}: React.HTMLAttributes<SVGSVGElement>) {
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
        x="3"
        y="59.5385"
        width="79.9575"
        height="9.138"
        transform="rotate(-45 3 59.5385)"
        fill="#393939"
      />
      <rect
        x="9.46143"
        y="3.00006"
        width="79.9575"
        height="9.138"
        transform="rotate(45 9.46143 3.00006)"
        fill="#393939"
      />
    </svg>
  );
}
