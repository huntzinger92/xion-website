import { Box, ThemeProvider } from "@mui/material";
import { NavBar } from "./components/NavBar/NavBar";
import { theme } from "./constants/globalStyles";
import { ROUTES } from "./constants/routes";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Events } from "./components/Events/Events";
import { Contact } from "./components/Contact/Contact";
import { ResponsiveAppContainer } from "./components/ResponsiveAppContainer/ResponsiveAppContainer";
import { Footer } from "./components/Footer/Footer";
import { Experience } from "./components/Experience/Experience";
import { Background } from "./components/BackgroundImage/Background";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Background>
        <ResponsiveAppContainer>
          {/* make all pages have a bottom margin of 25px before footer */}
          <Box sx={{ marginBottom: "25px" }}>
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.EVENTS_AND_CONCERTS} element={<Events />} />
              <Route path={ROUTES.EXPERIENCE} element={<Experience />} />
              <Route path={ROUTES.CONTACT} element={<Contact />} />
            </Routes>
          </Box>
        </ResponsiveAppContainer>
      </Background>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
