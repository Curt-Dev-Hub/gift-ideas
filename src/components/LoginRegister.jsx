// import PropTypes from "prop-types";
import { Form, Stack } from "react-bootstrap";
import ButtonPink from "./ButtonPink";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSquareXTwitter, fa-Google, faFacebook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
library.add(faSquareXTwitter, faGoogle, faFacebook);


export const LoginRegister = () => {
  const location = useLocation();
  return (
    <Stack gap={3} className="col-md-5 mx-auto" style={{ alignItems: "center" }}>
      <ButtonPink text={"Sign in with X"}>
      <FontAwesomeIcon icon={faSquareXTwitter} />
      </ButtonPink>
      <ButtonPink text={"Sign in with Google"}>
      {/* <FontAwesomeIcon icon={faGoogle} bounce /> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
      </ButtonPink>
      <ButtonPink text={"Sign in with Facebook"}>
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
      </ButtonPink>
    </Stack>
  );
};