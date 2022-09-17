const contbutton = document.querySelector(".cont");
const modal = document.querySelector(".modal");
const cross = document.querySelector("#cross");

const dynavar = {
  AccountName: "Current Account",
  BankBalance: "XXXXX",
  transactionamount: 15000,
  transactiondate: "2022-08-12 19:55",
  PaymentType: {
    Id: "X",
    Name: "Bank to Wallet Transfer",
  },
  senderDetails: {
    sender: "Upasana Pan",
    bank: "SBI",
    IFSC: "SBIN016095",
    accountno: "xxxxxxxxx5745",
    transactiondate: "2022-08-12 2:55",
  },
  receiverDetails: {
    receiver: "Upasana Pan",
    wallet: "The Growpital Wallet ",
    referenceno: "DBTR/222201998164",
    transactiondate: "2022-08-12 17:55",
  },
  paymentmethod: "UPI",
  transactionId: "DBTR/222201998174",
};

const openModal = () => {
  console.log("aa");

  modal.classList.remove("hidden");
  console.log(modal.classList, cross);
  let transactionamount = document.getElementById("transactionamount");
  let transactiondate = document.getElementById("transactiondate");
  let sender = document.getElementById("sender");
  let bank = document.getElementById("bank");
  let account = document.getElementById("account");
  let sendertransactiondate = document.getElementById("sendertransactiondate");
  let receiver = document.getElementById("receiver");
  let wallet = document.getElementById("wallet");
  let ref = document.getElementById("ref");
  let receivetransactiondate = document.getElementById(
    "receivetransactiondate"
  );
  let PaymentTypeName = document.getElementById("PaymentTypeName");
  let PaymentTypeID = document.getElementById("PaymentTypeID");

  transactionamount.textContent = "₹" + dynavar.transactionamount;
  let arr1 = dynavar.transactiondate.split(" ")[1].split(":");
  let arr = dynavar.transactiondate.split(" ")[0].split("-");
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(arr, arr1);
  transactiondate.textContent = `${Number(arr[2])} ${
    months[Number(arr[1]) - 1]
  } ${arr[0]}, ${
    Number(arr1[0]) > 12 ? Number(arr1[0]) - 12 : Number(arr1[0])
  }:${Number(arr1[1])}${Number(arr1[0]) > 12 ? "pm" : "am"}`;

  sender.textContent = dynavar.senderDetails.sender;
  bank.textContent = `${dynavar.senderDetails.bank}, IFSC ${dynavar.senderDetails.IFSC}`;
  account.textContent = `A/c No. ${dynavar.senderDetails.accountno}`;
  arr1 = dynavar.senderDetails.transactiondate.split(" ")[1].split(":");
  arr = dynavar.senderDetails.transactiondate.split(" ")[0].split("-");
  sendertransactiondate.textContent = `${Number(arr[2])} ${
    months[Number(arr[1]) - 1]
  } ${arr[0]}, ${
    Number(arr1[0]) > 12 ? Number(arr1[0]) - 12 : Number(arr1[0])
  }:${Number(arr1[1])}${Number(arr1[0]) > 12 ? "pm" : "am"}`;

  receiver.textContent = `${dynavar.receiverDetails.receiver}`;
  wallet.textContent = `${dynavar.receiverDetails.wallet}`;
  ref.textContent = `Ref No. ${dynavar.receiverDetails.referenceno}`;
  arr1 = dynavar.receiverDetails.transactiondate.split(" ")[1].split(":");
  arr = dynavar.receiverDetails.transactiondate.split(" ")[0].split("-");
  receivetransactiondate.textContent = `${Number(arr[2])} ${
    months[Number(arr[1]) - 1]
  } ${arr[0]}, ${
    Number(arr1[0]) > 12 ? Number(arr1[0]) - 12 : Number(arr1[0])
  }:${Number(arr1[1])}${Number(arr1[0]) > 12 ? "pm" : "am"}`;

  PaymentTypeName.textContent = dynavar.paymentmethod;
  PaymentTypeID.textContent = dynavar.transactionId;
};

const closeModal = () => {
  modal.classList.add("hidden");
};

openModal();
contbutton.addEventListener("click", openModal);
cross.addEventListener("click", closeModal);
