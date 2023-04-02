// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "./safemath.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract CreditFi {
    // using SafeMath for uint256;
    address public owner;
    uint public activityCount;
    uint public userCount;



    constructor() {
        owner = msg.sender;
        activityCount = 0;
        userCount = 0;

    }


    // //mappings


    mapping (address => User) public users;
    mapping (address => Organization) public organizations;


    // //enums
    enum CreditCategory {greenCredit, blueCredit, eduCredit, healthCredit, pinkCredit, hungerCredit}
    enum ActivityStatus {unverified, verified}

    // //structers
    struct User{
        string name;
        string email;
        string ph_num;
        string description;
        uint greenCredit;
        uint blueCredit;
        uint eduCredit;
        uint healthCredit;
        uint pinkCredit;
        uint hungerCredit;
        uint activityCount;
    }
    


    struct  Organization {
        string name;
        string email;
        string ph_num;
        uint greenCredit;
        uint blueCredit;
        uint eduCredit;
        uint healthCredit;
        uint pinkCredit;
        uint hungerCredit;
    }



    struct Activity {
        uint activityId;
        address user;
        string title;
        string[] fileHashes;
        string description;
        CreditCategory category;
        ActivityStatus status;
        uint upvotes;
        uint downvotes;
        uint tempCredits;
        uint fixedCredits;
        uint raisedAmount;
    }

    //Arrays
    Activity[] public activities;

    // //Events
    event userCreated(address _user, string _name);
    event organizationCreated(address _organisation, string _name);
    event activityCreated(string _title, address _user);


    function createUser(string memory name, string memory email, string memory ph_num, string memory description) public returns (bool) {

        require(bytes(name).length >0);
        users[msg.sender] = User(name, email, ph_num, description, 0, 0, 0, 0, 0, 0, 0);
        userCount++;
        emit userCreated(msg.sender, name);
        return true;
    }

    
   

    function createOrganization(string memory name, string memory email, string memory ph_num) public returns (bool) {
        require(bytes(name).length >0);
        require(bytes(email).length >0);
        require(bytes(ph_num).length >0);
        organizations[msg.sender] = Organization(name, email, ph_num, 0, 0, 0, 0, 0, 0);
        emit organizationCreated(msg.sender, name);
        return true;
    }



    function createActivity(string memory _title, string[] memory _fileHashes, string memory _description, uint8 _category)  public returns (bool) {
        require(bytes(_title).length >0);
        CreditCategory _creditCategory = CreditCategory(_category);

        Activity memory newactivity = Activity({
            activityId : activityCount,
            user: msg.sender,
            title: _title,
            fileHashes: _fileHashes,
            description: _description,
            category: _creditCategory,
            status: ActivityStatus.unverified,
            upvotes : 0,
            downvotes : 0,
            tempCredits : 0,
            fixedCredits : 0,
            raisedAmount : 0
        });
        activities.push(newactivity);
        activityCount +=1;
        emit activityCreated(_title, msg.sender);
        return true;
    }

    function getActivities() public view returns (Activity[] memory) {
        return activities;
    }

    function upVote(uint _activityId, uint _tempCredits) public returns (bool) {
        activities[_activityId].upvotes += 1;
        activities[_activityId].tempCredits += _tempCredits;
        if(activities[_activityId].upvotes+activities[_activityId].downvotes>userCount/2){
            if(activities[_activityId].upvotes >= activities[_activityId].downvotes) {
                activities[_activityId].status = ActivityStatus.verified;
                activities[_activityId].fixedCredits = activities[_activityId].tempCredits/activities[_activityId].upvotes;
                User storage user = users[msg.sender];
 
                if(activities[_activityId].category == CreditCategory.greenCredit) {
                    user.greenCredit += activities[_activityId].fixedCredits;
                }
                else if(activities[_activityId].category == CreditCategory.blueCredit) {
                    user.blueCredit += activities[_activityId].fixedCredits;
                }
                else if(activities[_activityId].category == CreditCategory.eduCredit) {
                    user.eduCredit += activities[_activityId].fixedCredits;
                }
                else if(activities[_activityId].category == CreditCategory.healthCredit) {
                    user.healthCredit += activities[_activityId].fixedCredits;
                }
                else if(activities[_activityId].category == CreditCategory.pinkCredit) {
                    user.pinkCredit += activities[_activityId].fixedCredits;
                }
                else if(activities[_activityId].category == CreditCategory.hungerCredit) {
                    user.hungerCredit += activities[_activityId].fixedCredits;
                }
            }
            else {
                activities[_activityId].status = ActivityStatus.unverified;
            }
        }
        return true;
    }

    function downVote(uint _activityId) public returns (bool) {
        activities[_activityId].downvotes += 1;
        if(activities[_activityId].upvotes+activities[_activityId].downvotes>userCount/2){
            if(activities[_activityId].upvotes >= activities[_activityId].downvotes) {
                activities[_activityId].status = ActivityStatus.verified;
            }
            else {
                activities[_activityId].status = ActivityStatus.unverified;
            }
        }
        return true;
    }

    function buyCredits(uint _activityId, uint _credits) payable public returns (bool) {
        require(activities[_activityId].status == ActivityStatus.verified);
        
        User storage user = users[activities[_activityId].user];
        if(activities[_activityId].category == CreditCategory.greenCredit) {
            user.greenCredit -= _credits;
        }
        else if(activities[_activityId].category == CreditCategory.blueCredit) {
            user.blueCredit -= _credits;
        }
        else if(activities[_activityId].category == CreditCategory.eduCredit) {
            user.eduCredit -= _credits;
        }
        else if(activities[_activityId].category == CreditCategory.healthCredit) {
            user.healthCredit -= _credits;
        }
        else if(activities[_activityId].category == CreditCategory.pinkCredit) {
            user.pinkCredit -= _credits;
        }
        else if(activities[_activityId].category == CreditCategory.hungerCredit) {
            user.hungerCredit -= _credits;
        }

        //org increase
        Organization storage organization = organizations[msg.sender];

        if(activities[_activityId].category == CreditCategory.greenCredit) {
            organization.greenCredit += _credits;
        }
        else if(activities[_activityId].category == CreditCategory.blueCredit) {
            organization.blueCredit += _credits;
        }
        else if(activities[_activityId].category == CreditCategory.eduCredit) {
            organization.eduCredit += _credits;
        }
        else if(activities[_activityId].category == CreditCategory.healthCredit) {
            organization.healthCredit += _credits;
        }
        else if(activities[_activityId].category == CreditCategory.pinkCredit) {
            organization.pinkCredit += _credits;
        }
        else if(activities[_activityId].category == CreditCategory.hungerCredit) {
            organization.hungerCredit += _credits;
        }

        //money transfer
        address payable receiver = payable(activities[_activityId].user);
        receiver.transfer(msg.value);
        return true;
    }


    









    




}