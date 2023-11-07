import React from "react";

function Main({ data }) {
  const initialInv = Number(data.initialInvestment);
  const expectedReturns = Number(data.expectedReturns);
  const duration = data.duration;
  let returns = 0;
  const displayDetailsArr = [];
  let serial = 1;
  for (let i = 0; i < duration; i++) {
    if (i === 0) {
      let passingobj = {
        serial: serial,
        initialInv: Number(initialInv),
        expectedReturns: Number(expectedReturns),
        duration: Number(duration),
        returns: Number(
          initialInv + Number(expectedReturns / 100) * initialInv
        ),
      };
      serial++;
      returns = passingobj.returns;
      displayDetailsArr.push(passingobj);
    } else {
      let passingobj = {
        serial: serial,
        initialInv: Number(initialInv + returns),
        expectedReturns: Number(expectedReturns),
        duration: Number(duration),
        returns:
          Number(initialInv + Number(expectedReturns / 100) * initialInv) +
          returns,
      };
      returns = returns + passingobj.returns;
      displayDetailsArr.push(passingobj);
      serial++;
      //console.log(returns)
    }
  }
  console.log(Math.floor((returns-initialInv)/initialInv*100));

  return (
    <div className="w-full">
      <table
        className="flex flex-col md:flex-row flex-wrap  items-center
   p-4 text-center h-auto w-auto mx-36 bg-red-100 border-1"
      >
        <thead className=" w-full ">
          <tr className=" w-full h-1/12  flex justify-between p-2 border-2  ">
            <th className="me-2 ">Year</th>
            <th className="me-2 ">Initial investment</th>
            <th className="me-2 ">Expected Returns</th>
            <th className="me-2 ">Total Returns</th>
          </tr>
        </thead>
        <tbody className=" w-full">
          {displayDetailsArr.map((item) => (
            <tr
              className=" w-full h-1/12  flex justify-between p-2 border-2"
              key={item.serial}
            >
              <th className="me-2 ">{item.serial}</th>
              <th className="me-2 ">{item.initialInv}</th>
              <th className="me-2 ">{item.expectedReturns}</th>
              <th className="me-2 ">{item.returns}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
