import React from 'react';
import { render } from 'react-dom';
import Pet from "./Pet.js"


class App extends React.Component {
    render() {
      return(
          <div>
            <h1>Adopt Me!</h1>
              <Pet name="Luna" animal="dog" breed="Havanese" />
              <Pet name="Ahri" animal="cat" breed="Tabby" />
              <Pet name="Spike" animal="turtle" breed="Tortoise" />
          </div>
      )
  }
}

render(<App />, document.getElementById("root"));
