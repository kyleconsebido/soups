interface ColdProps extends React.SVGProps<SVGSVGElement> {
  /**@defaultValue true */
  isFilled?: boolean;
}

export function Cold({ isFilled = true, ...props }: ColdProps) {
  return isFilled ? (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.3255 60.5161C13.2726 59.5073 7.97635 57.994 4.82379 57.9941C1.67124 57.9941 3.56277 53.5805 3.56277 51.0584C3.56277 47.9059 4.19328 14.4888 4.82379 12.5973C5.4543 10.7057 8.60686 9.44473 11.1289 9.44473C13.6509 9.44473 21.8476 7.5532 30.0442 6.29218C38.2409 5.03115 59.0477 8.18371 64.0918 9.44473C69.1359 10.7058 65.3528 13.8583 65.3528 17.6414C65.3528 21.4244 65.3528 42.8618 64.0918 46.0144C62.8308 49.1669 66.6138 52.95 65.3528 56.733C64.0918 60.5161 62.2003 57.9941 55.8952 59.2551C49.5901 60.5161 52.1121 61.7771 47.6985 62.4076C43.2849 63.0381 42.6544 64.2992 36.3493 64.9297C30.0442 65.5602 26.8917 61.7771 19.3255 60.5161Z"
        fill="#59ABE4"
      />
      <path
        d="M20.0238 48.8747C18.5106 48.3703 6.78308 52.6578 4.26104 56.4409C1.739 60.2239 16.2407 51.3968 21.2848 51.3968C27.5899 51.3968 38.3086 53.9188 40.8307 56.4409C42.8483 58.4585 40.2001 60.2239 41.4611 61.485C42.7221 62.746 62.0158 57.4497 63.529 56.4409C65.4206 55.1798 64.7901 52.0273 63.529 51.3968C62.268 50.7663 51.5493 45.7222 47.7663 46.3527C43.9832 46.9832 40.3263 48.8747 38.3086 48.8747C35.7866 48.8747 21.9153 49.5053 20.0238 48.8747Z"
        fill="#4B8DBB"
        fillOpacity="0.5"
      />
      <path
        d="M36.4171 17.3492C33.3907 16.3404 17.9221 14.4068 10.5662 13.5661C12.2475 13.5661 12.4577 11.6746 27.59 13.5661C42.7222 15.4576 35.7866 14.8271 38.3086 14.1966C40.8307 13.5661 46.5053 11.1702 54.0714 9.15254C54.0714 9.15254 63.5291 10.4136 64.7901 10.4136C66.0511 10.4136 66.6816 11.6746 64.7901 12.9356C62.8986 14.1966 39.4436 18.358 36.4171 17.3492Z"
        fill="#8AC8F4"
        fillOpacity="0.5"
      />
      <path
        d="M40.2001 61.4849C41.2089 60.4761 41.251 33.112 40.8307 20.5017C40.8307 20.5017 9.93561 16.7187 7.41354 16.7187C4.89147 16.7187 6.53084 22.8977 8.04407 29.9594C9.9356 38.7866 11.8271 57.7019 14.9797 58.3324C18.1322 58.9629 20.6543 57.7019 29.4814 60.8544C38.3086 64.007 38.9391 62.746 40.2001 61.4849Z"
        fill="#8AC8F3"
        fillOpacity="0.5"
      />
      <path
        d="M64.1595 16.0882L43.3526 21.1323C43.3526 28.278 42.47 42.6957 43.9832 43.2001C45.8747 43.8306 50.9188 39.4171 55.3324 35.0035C59.7459 30.5899 64.1595 31.2204 64.1595 26.8068V16.0882Z"
        fill="#8AC8F3"
        fillOpacity="0.5"
      />
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
      <path
        d="M19.8187 57.5569C17.5654 57.1814 15.4391 56.7379 13.4304 56.319C12.8043 56.1884 12.1897 56.0602 11.5862 55.9372C9.65932 55.5445 7.74008 55.1797 6.06411 55.047C6.11019 54.6915 6.17815 54.284 6.26008 53.7927L6.27566 53.6993L6.2774 53.6888C6.39716 52.9703 6.56277 51.9767 6.56277 51.0584C6.56277 49.5269 6.71928 40.4216 6.9558 31.4339C7.07388 26.9469 7.21129 22.5133 7.35801 19.0899C7.43149 17.3754 7.50646 15.9346 7.58116 14.8746C7.61869 14.342 7.6544 13.9312 7.68697 13.6412C7.69 13.6142 7.69289 13.5894 7.69563 13.5667C7.70723 13.5553 7.72054 13.5426 7.73574 13.5289C7.88741 13.3913 8.14925 13.2106 8.53567 13.0302C9.32785 12.6605 10.3141 12.4447 11.1289 12.4447C12.0224 12.4447 13.2207 12.2885 14.4624 12.093C15.7596 11.8887 17.3143 11.6057 19.0073 11.2907C19.4749 11.2037 19.9541 11.1141 20.4435 11.0226C23.528 10.4457 27.014 9.79366 30.5004 9.25729C34.1433 8.69684 41.0083 9.11004 47.9076 9.90306C54.7192 10.686 61.0308 11.7718 63.3642 12.3552C63.435 12.3729 63.5 12.3902 63.5594 12.4071C63.5073 12.571 63.4454 12.7473 63.3704 12.9611C63.2748 13.2336 63.1578 13.5671 63.0125 14.0132C62.7072 14.9509 62.3528 16.2171 62.3528 17.6414C62.3528 19.5318 62.3527 25.8036 62.1962 31.9884C62.1178 35.0846 62.0009 38.1261 61.8283 40.5718C61.7418 41.7972 61.6437 42.8379 61.5349 43.6445C61.4806 44.0476 61.4271 44.3655 61.3773 44.6034C61.3341 44.81 61.3052 44.8995 61.3028 44.9086C61.3024 44.9099 61.3026 44.9095 61.3034 44.9077C60.7084 46.4003 60.7663 47.8479 60.9837 49.0298C61.1777 50.0851 61.5444 51.1357 61.8287 51.9504C61.8492 52.0091 61.8693 52.0666 61.8888 52.1228C62.5757 54.0975 62.7648 55.0103 62.5068 55.7844C62.4877 55.8417 62.4695 55.8933 62.4525 55.9394C62.2663 55.9372 62.0329 55.926 61.7559 55.9127C60.4485 55.85 58.1706 55.7406 55.3068 56.3133C51.8155 57.0116 50.4071 57.7965 49.2457 58.6997C49.1902 58.7429 49.1414 58.7809 49.0984 58.8144C48.7856 59.0581 48.7763 59.0654 48.6798 59.1107C48.5664 59.1639 48.2172 59.3031 47.2743 59.4378C45.1125 59.7466 43.6823 60.2097 42.419 60.6187C42.2192 60.6834 42.0236 60.7467 41.8299 60.8079C40.4988 61.2283 38.9685 61.6528 36.0508 61.9446C33.6392 62.1857 31.8297 61.6238 29.4394 60.6528C29.1221 60.5239 28.7934 60.387 28.4522 60.2449C26.2199 59.3152 23.4519 58.1624 19.8187 57.5569ZM63.716 11.7671C63.7161 11.767 63.716 11.77 63.7153 11.7765C63.7155 11.7704 63.7158 11.7671 63.716 11.7671Z"
        stroke="#9F9F9F"
        strokeWidth="6"
      />
      <path
        d="M35.6042 22.8889C36.4662 22.9931 37.2414 23.087 37.9065 23.1677C38.062 29.3718 38.1246 37.8899 38.0515 45.3143C38.0096 49.5717 37.9234 53.4371 37.7868 56.2853C37.7182 57.7169 37.639 58.8439 37.5526 59.6192C37.5442 59.6946 37.536 59.7642 37.528 59.8284C37.5227 59.8287 37.5173 59.829 37.5117 59.8293C36.762 59.871 34.9148 59.6093 30.4905 58.0292C25.8522 56.3726 22.7502 55.8355 20.3242 55.6558C19.3995 55.5873 18.5683 55.5721 17.8945 55.5598C17.721 55.5566 17.5581 55.5536 17.4066 55.5499C16.9715 55.5395 16.6117 55.5237 16.2871 55.4933C16.1197 55.1568 15.9143 54.652 15.6851 53.9468C15.0986 52.1429 14.536 49.6043 13.9881 46.6691C13.5343 44.2379 13.0841 41.4757 12.6431 38.7692C12.0685 35.2436 11.5093 31.8125 10.9775 29.3308C10.812 28.5583 10.6488 27.8121 10.4919 27.0945C9.90301 24.402 9.40212 22.1117 9.19533 20.3426C9.17499 20.1685 9.15836 20.0058 9.14519 19.854C9.1924 19.8585 9.24039 19.863 9.28916 19.8677C10.3552 19.9692 11.7533 20.1153 13.3737 20.292C16.6121 20.6453 20.7005 21.117 24.7174 21.5896C28.7328 22.062 32.6702 22.5345 35.6042 22.8889ZM37.4383 60.3958C37.4383 60.3957 37.4387 60.394 37.4396 60.3908C37.4387 60.3944 37.4383 60.396 37.4383 60.3958ZM16.5424 55.9172C16.542 55.9196 16.5263 55.9028 16.4963 55.8596C16.5278 55.8932 16.5428 55.9148 16.5424 55.9172Z"
        stroke="#9F9F9F"
        strokeWidth="6"
      />
    </svg>
  );
}
