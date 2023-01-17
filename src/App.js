import React, { useContext } from 'react';
import cma from "../api/management_api";
import { AppContext } from "../context";

function App() {
  const value = 'World';
  const { app } = useContext(AppContext);


  const onMerge = async () => {
    const ra = await cma.createContentType(app.config.api_key, app.config.management_token, app.config.endpoint, type.src, destinationBranch);
  }


  return (<>
            <div>Hello the {value}</div>
            <div>
              <button title="Press me" color="#f194ff" onclick="myFunction()">Button</button>
                <script>
                  function myFunction() {
                    alert("Your file is being uploaded!")
                  }
                </script>
            </div>
          </>);
}

export default App;
