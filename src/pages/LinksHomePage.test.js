import { getByTestId, render } from "@testing-library/react"
import LinksHomePage from "./LinksHomePage";
import { UserProviderWrapper } from "../context/user_context";
import { HomeContext, HomeProviderWrapper } from "../context/home_context";
import { MemoryRouter } from "react-router-dom";

jest.mock("../components/HeaderComponent.jsx", () => {
  return {
    __esModule: true,
    default: () => <></>
  }
})

describe("LinksHomePage testing", () => {
  it("should say blog", () => {
    const {getByTestId} = render(
        <HomeProviderWrapper>
          <UserProviderWrapper>
            <LinksHomePage/>
          </UserProviderWrapper>
        </HomeProviderWrapper>
    );
    const blogTitle = getByTestId("homePageTitle").textContent;
    expect(blogTitle).toEqual("Home Page Links");

  })

  it("should say blog 2", () => {
    const {getByTestId} = render(
        <HomeContext.Provider value={{ 
          posts: [], 
          valueError: true, 
          getPosts: () => {}
        }}>
          <UserProviderWrapper>
            <LinksHomePage/>
          </UserProviderWrapper>
        </HomeContext.Provider>

    );
    const errorMsg = getByTestId("error-msg").textContent;
    expect(errorMsg).toEqual(" Algo salio mal en la peticion... ");

  })

  it("should say blog 3", () => {
    const {getByTestId} = render(
        <HomeContext.Provider value={{ 
          posts: [], 
          valueError: false, 
          getPosts: () => {}
        }}>
          <UserProviderWrapper>
            <LinksHomePage/>
          </UserProviderWrapper>
        </HomeContext.Provider>

    );
    const loadingMsg = getByTestId("loading-msg").textContent;
    expect(loadingMsg).toEqual(" Cargando pagina... ");

  })
})




