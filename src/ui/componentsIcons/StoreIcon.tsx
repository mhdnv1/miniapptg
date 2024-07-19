interface StoreProps {
  className?: string;
}
export const Storeicon: React.FC<StoreProps> = ({ className }) => {
  return (
    <div>
      <svg
        className={className}
        width="19"
        height="16"
        viewBox="0 0 19 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 2V0H17.5V2H1.5ZM1.5 16V10H0.5V8L1.5 3H17.5L18.5 8V10H17.5V16H15.5V10H11.5V16H1.5ZM3.5 14H9.5V10H3.5V14ZM2.55 8H16.45L15.85 5H3.15L2.55 8Z"
          fill="black"
          fill-opacity="0.5"
        />
      </svg>
    </div>
  );
};
