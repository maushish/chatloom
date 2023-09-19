export const PROFILE_SMC='0x9A589B6aB46d85E8f8027ee6504AF7e08e26A792'
export const ABI=
[
	{
		"inputs": [],
		"name": "getProfile",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_avatarHash",
				"type": "string"
			}
		],
		"name": "setProfile",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userProfiles",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "avatarHash",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]