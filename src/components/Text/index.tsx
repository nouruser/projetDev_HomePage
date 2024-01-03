import React from "react";

const sizeClasses = {
  txtLexendDecaRegular20: "font-lexenddeca font-normal",
  txtInderRegular32: "font-inder font-normal",
  txtJomolhariRegular15: "font-jomolhari font-normal",
  txtJomolhariRegular13: "font-jomolhari font-normal",
  txtJustAnotherHandRegular46: "font-justanotherhand font-normal",
  txtInderRegular36: "font-inder font-normal",
  txtInderRegular12: "font-inder font-normal",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
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
