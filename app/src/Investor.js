import React from "react";

import { drizzleReactHooks } from "@drizzle/react-plugin";
import { newContextComponents } from "@drizzle/react-components";

const { useDrizzle, useDrizzleState } = drizzleReactHooks;
const { ContractData, ContractForm } = newContextComponents;

export default ({values}) => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);
  return (
      // <div className="App">
      //   <div>
      //     <h2>Investment (token)</h2>
      //     <ContractData
      //         drizzle={drizzle}
      //         drizzleState={state}
      //         contract="ICO"
      //         method="getSale"
      //         methodArgs={[state.accounts[0]]}
      //     />
      //


           // <h2>Buy</h2>

      <ContractForm

          drizzle={drizzle}
          contract="ICO"
          sendArgs={{value: 1000000000000000000}}
          method="buy"
          // render={(handleSubmit)=> {return <div inputs={342} handleSubmit={handleSubmit}>asd</div>}}
          // render={()=>{ "C"}}
      />
      // </div>
  )
};
