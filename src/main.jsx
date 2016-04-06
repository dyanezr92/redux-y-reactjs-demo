import "bootstrap/css/bootstrap";
import "app/custom-styles";
import React from "react";
import { render } from "react-dom";

import CommentedPicture from "app/components";

render(
  <CommentedPicture />,
  document.getElementById("app")
);
