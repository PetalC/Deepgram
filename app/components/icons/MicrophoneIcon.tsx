export const MicrophoneIcon = ({
  micOpen,
  className,
  ...rest
}: {
  micOpen: boolean;
  className?: string;
}) => {
  if (micOpen) {
    return (
      <svg
        viewBox="0 0 47 37"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 ml-1 mr-1 fill-[#149AFB] group-hover:fill-current ${className}`}
        {...rest}
      >
        <path d="M12.5 25.25C8.70312 25.25 5.75 22.2266 5.75 18.5V7.25C5.75 3.52344 8.70312 0.5 12.5 0.5C16.2266 0.5 19.25 3.52344 19.25 7.25V18.5C19.25 22.2969 16.2266 25.25 12.5 25.25ZM23.1875 14C24.1016 14 24.875 14.7734 24.875 15.6875V18.5C24.875 24.7578 20.1641 29.9609 14.1875 30.8047V33.125H17C18.2656 33.125 19.25 34.25 19.1797 35.5156C19.1797 36.0781 18.6875 36.5 18.125 36.5H6.875C6.24219 36.5 5.75 36.0781 5.75 35.5156C5.67969 34.25 6.66406 33.125 8 33.125H10.8125V30.6641C4.55469 29.8203 0.125 24.1953 0.125 17.9375V15.6875C0.125 14.7734 0.828125 14 1.8125 14C2.72656 14 3.5 14.7734 3.5 15.6875V18.1484C3.5 22.8594 7.22656 27.2188 11.8672 27.5C17.1406 27.8516 21.5 23.7031 21.5 18.5V15.6875C21.5 14.7734 22.2031 14 23.1875 14Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 47 37"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 mr-2 fill-current ${className}`}
      {...rest}
    >
      <path d="M27.9297 33.125C29.1953 33.125 30.1797 34.1797 30.0391 35.4453C30.0391 36.0078 29.6172 36.5 28.9844 36.5H17.8047C17.2422 36.5 16.6797 36.0078 16.6797 35.375C16.6797 34.1797 17.5938 33.125 18.8594 33.125H21.6719V30.7344C15.5547 29.8906 11.0547 24.2656 11.0547 18.0078V15.2656L14.4297 17.9375V18.1484C14.4297 22.8594 18.2266 27.2188 22.8672 27.5C24.0625 27.5703 25.1172 27.4297 26.1719 27.0781L29.1953 29.4688C27.9297 30.1016 26.5938 30.5938 25.1875 30.8047V33.125H27.9297ZM45.2969 33.5469C46.0703 34.1094 46.2109 35.1641 45.5078 35.7969C44.9453 36.5703 43.8906 36.7109 43.1875 36.0781L1.63281 3.52344C0.859375 2.96094 0.71875 1.90625 1.35156 1.20312C1.63281 0.78125 2.125 0.5 2.6875 0.5C3.03906 0.5 3.39062 0.640625 3.67188 0.921875L16.75 11.1172V7.25C16.75 3.45312 19.9141 0.429688 23.7109 0.570312C27.4375 0.640625 30.25 3.875 30.25 7.53125V18.5C30.25 19.4141 30.0391 20.3281 29.6875 21.1719L31.5156 22.5781C32.1484 21.3125 32.5 19.9766 32.5 18.5V15.6875C32.5 14.7734 33.2734 14 34.1875 14C35.1016 14 35.875 14.7734 35.875 15.6875V18.5C35.875 20.8203 35.1719 22.9297 34.1172 24.7578L45.2969 33.5469Z" />
    </svg>
  );
};
