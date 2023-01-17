import React from 'react';
import { Button, Alert } from 'react-native';

function App() {
  const value = 'World';
  return (<>
            <div>Hello the {value}</div>
            <div>
              <button title="Press me" color="#f194ff" onclick="myFunction()">Button <\button>
                <script>
                  function myFunction() {
                    alert("Your file is being uploaded!")
                  }
                </script>
            </div>
          </>);
}

export default App;
