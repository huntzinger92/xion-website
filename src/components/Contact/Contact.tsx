import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import * as styles from "./Contact.styles";
import { ResponsiveAppContainer } from "../ResponsiveAppContainer/ResponsiveAppContainer";
import { PageBanner } from "../PageBanner/PageBanner";
import savorTheSoundVJ from "./savorTheSoundVJ.jpg";
import { defaultPageFadeInTime } from "../../constants/fadeTimes";
import { useLocation } from "react-router-dom";

export const Contact = () => {
  const { state } = useLocation();

  const [contactFormData, setContactFormData] = useState({
    title: state?.title || "",
    message: state?.message || "",
    email: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setContactFormData({
      ...contactFormData,
      [e.target.name]: e.target.value,
    });
  };

  const { email, message, title } = contactFormData;
  const disableSubmit = !email || !message || !title;

  return (
    <Fade in timeout={defaultPageFadeInTime}>
      <Box>
        <PageBanner image={savorTheSoundVJ} headerText="Contact Us" />
        <ResponsiveAppContainer>
          <Box>
            <form name="contact" method="post">
              <input type="hidden" name="form-name" value="contact" />
              <Box sx={styles.formContainer}>
                <TextField
                  type="text"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  label="Return Email"
                  required
                />
                <TextField
                  type="text"
                  placeholder="Subject"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  label="Title"
                  required
                />
                <TextField
                  name="message"
                  placeholder="Your message here..."
                  value={message}
                  onChange={handleChange}
                  multiline
                  rows={5}
                  required
                  label="Message"
                />
              </Box>
              <Box sx={styles.buttonContainer}>
                <Button type="submit" value="Submit" disabled={disableSubmit}>
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
        </ResponsiveAppContainer>
      </Box>
    </Fade>
  );
};
