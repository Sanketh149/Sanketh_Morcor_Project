import React from "react";

const sizeClasses = {
  txtInterMedium12: "font-inter font-medium",
  txtInterMedium46: "font-inter font-medium",
  txtInterMedium16: "font-inter font-medium",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium12Red300: "font-inter font-medium",
  txtInterBold12: "font-bold font-inter",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtInterExtraBold16: "font-extrabold font-inter",
  txtInterMedium12Gray600: "font-inter font-medium",
  txtInterMedium12Green400: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterMedium16Gray900: "font-inter font-medium",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular12Gray900: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium16DeeppurpleA400: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
