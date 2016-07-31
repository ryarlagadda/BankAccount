var accounts=[];
var created=createaccount({balance: 500,username:"ravi"});
deposit(created,amount);
withdraw(created,amount);


function createaccount(account)
{
	
	accounts.push(account);
	return account;
	
}
function getaccount(username)
{
	var acc;
	var i=0;

	for(i=0;i<accounts.length;i++)
	{
		if(accounts[i].username===username)
		{
			acc=accounts[i];
		}
	}

	return acc;
}

var amount="10";

function deposit(account,amount)
{
	if(typeof amount==="number"){
	account.balance=account.balance+amount;
	console.log("balance is "+account.balance);
	}
	else
		console.log("deposit amount not a number ");
}
function withdraw(account,amount)
{
	if(typeof amount==="number"){
account.balance=account.balance-amount;
	console.log("withdraw balance is "+account.balance);
}
else
console.log("withdraw amount is not a number");
}
function getbalance(account)
{
	console.log("getbalance"+account.balance);
}
function createbalancegetter(account)
{

	return function()
	{
		return account.balance;
	}
}


getbalance(created);
var bal=createbalancegetter(created);
console.log("createbalancegetter" + bal());
