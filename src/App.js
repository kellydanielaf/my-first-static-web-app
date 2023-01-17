import React, { useContext } from 'react';
import cma from "./api/management_api";
import { AppContext } from "./context";

function App() {
  const value = 'World';
  const { app } = useContext(AppContext);


  const onMerge = async () => {
    const ra = await cma.createEntry("link_component", "{"title":"link6","global_field":{"type":"link","data":{"link":{"link":{"title":"title","href":"url"},"uri":"","text":"","eventvalue":"ev","arialabel":"","select":"self"}}},"tags":[],"locale":"fr","uid":"blt4e1f8bfa37dc4aff","created_by":"blt29214e078f20019d","updated_by":"blt29214e078f20019d","created_at":"2022-11-22T13:21:07.494Z","updated_at":"2022-11-22T13:21:07.494Z","ACL":{},"_version":1,"_in_progress":false,"publish_details":[{"environment":"bltb96fb5bff0400f58","locale":"fr","time":"2022-11-22T13:21:09.816Z","user":"blt29214e078f20019d","version":1}]}");
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
