import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement(Object) => HTMLElement(render)
// const heading = React.createElement("h1", { id: "heading" }, "Gaurav learn");

//JSX -HTML like or XML like syntax inside javascript 
//JSX =>Babel transpiles it to React.CreateElement() =>JS Object => transpiled/renders HTML Element 
const header = (
    <div className="red">
        <h1 className="head" tabIndex="1"> Gaurav started  🚀</h1>
    </div>
);

const Title = () => {
    return <h1 className="head" tabIndex="1"> Learning  🚀</h1>
};
//console.log(jsxheading);

//React Component
//Class Based Component
//Functional Component 

//React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <h2>{header}</h2>
        <Title />
        <h1 className="heading">Namste React Gaurav Learning</h1>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxheading);
root.render(<HeadingComponent />);  //syntax that Babel understands