import { useState } from "react";
import data from "./data";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multi, setMulti] = useState([]);
  const HandleOnSingleSelect = (currid) => {
    setSelected(currid === selected ? null : currid);
    // console.log(currid);
  };
  const HandleMultiSelection = (currentId) => {
        const cpyMulti = [...multi];
       
      const  findIndexCurrId = cpyMulti.indexOf(currentId);
      console.log(findIndexCurrId);
      if(findIndexCurrId== -1) cpyMulti.push(currentId)
        else cpyMulti.splice(findIndexCurrId , 1);
      setMulti(cpyMulti);
  };
  // console.log(selected , multi);
  return (
    <div className="wrapper">
      <button
        className="btn-all"
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
      >
        {`${enableMultiSelection ? "Disable" : "Enable"} Multi selected`}
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <>
            <div className="item">
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => HandleMultiSelection(dataItem.id)
                    : () => HandleOnSingleSelect(dataItem.id)
                }
              >
                <h3>{dataItem.question}</h3>
                <span> + </span>
              </div>
              {enableMultiSelection ? (
                multi.indexOf(dataItem.id) !== -1 &&(
                  <div className="content">{dataItem.answer}</div>
                ) 
              ) : selected === dataItem.id && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          </>
        ))
      ) : (
        <div>Data not found</div>
      )}
    </div>
  );
};

export default Accordian;
