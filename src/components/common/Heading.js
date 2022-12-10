import React from "react";
import {HorizontalLine} from '../index'

const HeadingLarge = ({ children, ...props }) => {
  return <p className="text-2xl md:4xl dark:text-gray-700">{children}
  <HorizontalLine /> </p>;
};
const HeadingMedium = ({ children, ...props }) => {
  return <p className="text-0xl md:2xl dark:text-gray-700">{children}
  <HorizontalLine /> </p>;
};
const HeadingSmall = ({ children, ...props }) => {
  return <p className="text-lg md:xl dark:text-gray-700">{children}
  <HorizontalLine /> </p>;
};

export { HeadingSmall, HeadingMedium, HeadingLarge };
