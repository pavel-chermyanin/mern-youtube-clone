import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import { forwardRef, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Signin from "./pages/Signin";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-grow: 1;
  &::before{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: fixed;
    background-color: rgba(0,0,0, .7);
    display:${(props) => props.isOpen ? 'block': 'none'};
  }
`;

const Main = styled.div`
  flex: 5;
  /* flex-direction: column; */
  background-color: #181818;
  background-color: ${({ theme }) => theme.bg};
  `;

const Wrapper = styled.div`
flex-grow: 0;
  padding: 22px 0;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);



  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container isOpen={isOpenMenu}>
          <Menu
            setIsOpenMenu={setIsOpenMenu}
            isOpenMenu={isOpenMenu}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />

          <Main isOpenMenu={isOpenMenu}>
            <NavBar
              darkMode={darkMode}
              setIsOpenMenu={setIsOpenMenu}
              isOpenMenu={isOpenMenu}
            />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home type="random" />} />
                  <Route path="trend" element={<Home type="trend" />} />
                  <Route path="subscriptions" element={<Home type="sub" />} />
                  <Route index element={<Home />} />
                  <Route path="signin" element={<Signin />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
