import { fireEvent, render } from "@testing-library/react";
import LinksBlogPage from "./LinksBlogPage";
import { UserProviderWrapper } from "../context/user_context";
import { MemoryRouter } from "react-router-dom";

describe("testing-unitarios", () => {
  it("simple test", () => {
    expect(1).toEqual(1);
  })

  it("HomePage test title", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserProviderWrapper>
          <LinksBlogPage/>
        </UserProviderWrapper>
      </MemoryRouter>
    )
    const homePageTitle = getByTestId("homepage-title").textContent;
    expect(homePageTitle).toEqual("Blog page Links");
  })
  
  it("Add to counter test", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <UserProviderWrapper>
          <LinksBlogPage/>
        </UserProviderWrapper>
      </MemoryRouter>
    )
    const increaseBtn = getByTestId("increase-counter");
    fireEvent.click(increaseBtn);
    
    const counter = getByTestId("counter").textContent;
    expect(counter).toEqual("1");
  })


})