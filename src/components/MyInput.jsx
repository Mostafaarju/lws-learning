import { forwardRef } from "react";

const MyInput = function ({ props, ref }) {
  return <input {...props} ref={ref} />;
};

const ForwardMyInput = forwardRef(MyInput);

export default ForwardMyInput;
