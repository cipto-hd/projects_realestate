// import { chakra } from "@chakra-ui/react";
import parse from "html-react-parser";

// const P = chakra(({ children }) => <p className="psection">{children}</p>);

export const HtmlContent = ({ children }) => (
  <p className="psection">{parse(children)}</p>
);
