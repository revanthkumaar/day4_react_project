import FirstComponent from './firstComponent'
import SecondComponent from './secondComponent'
import FirstComponentAsClass from './firstComponentWithClass'
function App() {


  return (
    <div className="App">
     
     <FirstComponent/>
     <SecondComponent/>
     <p>below is the first component which is written as class</p>
     <FirstComponentAsClass/>
    </div>
  );
}

export default App;


