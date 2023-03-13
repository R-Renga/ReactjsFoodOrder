import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("check whether the header is rendering", () => {
  
  const  header =  render( <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
    );
    
    const logo = header.getAllByTestId("logo")

    expect(logo[0].src).toBe("http://localhost/dummy.png")
});


test("check whether the]cart items  is 0", () => {
  
    const  header =  render( <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
      );
      
      const cartItems = header.getByTestId("cartItems")
  
      expect(cartItems.innerHTML).toBe("Cart - 0 items")
  });
