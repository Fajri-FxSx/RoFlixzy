import React, { FC, useEffect } from "react";

interface TitleProps {
  title?: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  useEffect(() => {
    document.title = title || "RoFlix | Watch movie";
  }, [title]);
  return <div></div>;
};

export default Title;
