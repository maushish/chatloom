// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title User-Profiles contract 
/// @author Maushish
contract UserProfile {
    struct Profile {       
        string name;
        string bio;
        string avatarHash;        
    }

    // Mapping to store profiles by address
    mapping (address => Profile) userProfiles;

    // Event emitted when a user sets or updates their profile
    event ProfileUpdated(address indexed userAddress, string name, string bio, string avatarHash);

    /// @notice Sets your profile with your name, bio, and avatar image
    function setProfile(string memory _name, string memory _bio, string memory _avatarHash) public {
        userProfiles[msg.sender] = Profile(_name, _bio, _avatarHash);
        emit ProfileUpdated(msg.sender, _name, _bio, _avatarHash);
    }

    /// @notice Get the profile of the sender (current user)
    function getMyProfile() public view returns (string memory, string memory, string memory) {
        Profile memory userProfile = userProfiles[msg.sender];
        return (userProfile.name, userProfile.bio, userProfile.avatarHash);
    }

    /// @notice Get the profile of a specific user based on their address
    function getProfileByAddress(address userAddress) public view returns (string memory, string memory, string memory) {
        Profile memory userProfile = userProfiles[userAddress];
        return (userProfile.name, userProfile.bio, userProfile.avatarHash);
    }
}
