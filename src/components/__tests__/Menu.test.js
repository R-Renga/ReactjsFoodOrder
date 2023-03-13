import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { StaticRouter } from "react-router-dom/server"
import { Restaurent_Data } from "../../mocks/data"
import store from "../../utils/store"
import Header from "../Header"
import RestaurentMenu from "../RestaurentMenu"


    
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(Restaurent_Data);
      },
    });
  })


test("check the cart item", async () => {
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
               <RestaurentMenu/>
            </Provider>
        </StaticRouter>
    )

    await waitFor(() => expect(menu.getByTestId("menu")));

    const menubutton = body.getAllByTestId("add-btn")

    fireEvent.click(menubutton[0])

    const cart = menu.getByTestId("cartItems")

    expect(cart.innerHTML).toBe("cart- 2 itmes")

})
