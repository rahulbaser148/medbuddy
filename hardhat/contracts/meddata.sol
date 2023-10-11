//SPDX-License-Identifier:MIT
pragma solidity ^0.8.17;

contract meddata {
    uint256 public totalRecord;

    struct Record {
        uint256 id;
        string title;
        string description;
        bool islisted;
        string imageURI;
        string password;
        address owner;
        uint256 timestamp;
    }

    constructor() payable {}

    Record[] public records;

    function NewRrecord(
        string memory _title,
        string memory _description,
        string memory _imageURI,
        string memory _password
    ) external payable {
        records.push(
            Record({
                id: block.timestamp,
                title: _title,
                description: _description,
                islisted: true,
                imageURI: _imageURI,
                password: _password,
                owner: msg.sender,
                timestamp: block.timestamp
            })
        );

        totalRecord += 1;
    }

    function getAllRecords() public view returns (Record[] memory) {
        require(records.length > 0, "no records");

        Record[] memory tempRecords = new Record[](records.length);

        for (uint256 i = 0; i < records.length; i++) {
            if (records[i].owner == msg.sender) {
                tempRecords[i] = records[i];
            }
        }

        return tempRecords;
    }

}