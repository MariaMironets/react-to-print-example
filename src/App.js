import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function App() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Test",
    pageStyle: ""
  });

  return (
    <>
      <button onClick={handlePrint}>React To Print</button>
      <button onClick={() => window.print()}>Window Print</button>

      <div className="App" ref={componentRef}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
