import { render, screen } from "@testing-library/react"
import axios from "axios";
import { Provider } from "react-redux";
import Login from "./components/Login/Login";
import MainPage from "./components/MainPage/MainPage";
import EachDragon from "./pages/EachDragon";
import LoginPage from "./pages/LoginPage";
import MainDragon from "./pages/MainDragon";
import { store } from "./store";

describe('login test', () => {
    test('login', () => {
        render(
            <Provider store={store}>
                <LoginPage />
            </Provider>
        )
        expect(screen.getByText(/login page/i)).toBeInTheDocument()
    })
})