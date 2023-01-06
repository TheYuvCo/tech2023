// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
 
contract simplebank {
    //distinct funders
    uint public numberOfFunders;
    mapping(address => bool) private funders;
    mapping(uint => address) private lutFunders;
    address public owner; 

    mapping (address => uint) public lastFunds;


    //run when the contract runs (one time) - to remember the owner right now
    constructor(){
        owner = msg.sender;
    }

    //A modifier is like a function that can be used to add checks to a function before it is executed
    modifier onlyOwner(){
        require(msg.sender == owner, "Only the owner can do that");
        _;
    }

    function transferOwnership(address newOwner) external onlyOwner {
        owner = newOwner;
    }


    function homework_LastFunds(uint amount) public payable{
        address last_funder = msg.sender;
        lastFunds[last_funder] = amount;
    }

    function addFunds() external payable {
        address funder = msg.sender;
        if(!funders[funder]){
            uint index = numberOfFunders++;
            funders[funder] = true;
            lutFunders[index] = funder;
        }
    }
//memory - זמני , לא יישמר בבולקצ'יין
//external - we can call the func only from outside - functions from the same cotract cant call it
// view - the func don't change the state of contract (read only KAZE) - good for gaz!
    function getAllFunders() external view returns(address[] memory){
        address[] memory _funders = new address[](numberOfFunders);
        for(uint i=0; i< numberOfFunders; i++){
            _funders[i] = lutFunders[i];
        }
        return _funders;
    }

    function withdraw(uint withdrawAmount) external {
        //msg to confirm
        require(withdrawAmount < 1000000000000000000 || msg.sender == owner, "you can't withdraw more than 1 ether");
       payable (msg.sender).transfer(withdrawAmount);
    }

}


//const instance = await simplebank.deployed()
//instance.addFunds({value:"500000000000000000", from: accounts[0]})
//instance.addFunds({value:"500000000000000000", from: accounts[1]})
// const funds = instance.funds()
//instance.withdraw("1000000000000000000",{from:accounts[1]})
//instance.transferOwnership("0xda3bd8fecFF11A364C604a0793b4Db342112726a")