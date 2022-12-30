// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
 
contract simplebank {
    //uint public funds = 500;
   
    function addFunds() external payable {
        //מי ששולח לי כסף אני מכניס את הכתובת שלו לרשימת הפאנדרס
        funders.push(msg.sender);
        funderSum.push(msg.value);
    }

    address[] public funders;
    uint[] funderSum;

}


//const instance = await simplebank.deployed()
//instance.addFunds({value:"500000000000000000", from: accounts[0]})
//instance.addFunds({value:"500000000000000000", from: accounts[1]})
// const funds = instance.funds()