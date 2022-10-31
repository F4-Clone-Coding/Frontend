import { useCallback, useState } from "react";

const useInput = (text) => {
  const [state, setState] = useState(text);

  const onChange = (e) => {
    setState(e.target.value);
  };

  const reset = useCallback(() => setState(text), [text]);

  return [state, onChange, reset];
};

export default useInput;
