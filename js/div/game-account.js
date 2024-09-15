// Sample game accounts data from SAMP UIF
const gameAccounts = [
    { name: "Anheuserly", accountId: 123456 },
    { name: "Westher", accountId: 789012 },
    { name: "iam4u", accountId: 345678 },
    { name: "Boyfunny", accountId: 345678 },
    { name: "okaybye", accountId: 345678 },
    { name: "il.AnheuserHills.li", accountId: 901234 },
    { name: "AnheB", accountId: 567890 },
    { name: "Anhepop", accountId: 456789 },
    { name: "AnheuserlyFunny", accountId: 234567 },
    { name: "Anheuserly$AprelBank", accountId: 234567 },
    // Add more game accounts here
  ];

  // Get the game accounts list element
  const gameAccountsList = document.getElementById("game-accounts-list");

  // Generate the game accounts list
  gameAccounts.forEach((gameAccount) => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    const accountNameSpan = document.createElement("span");
    const accountInfoSpan = document.createElement("span");

    accountNameSpan.textContent = gameAccount.name;
    accountInfoSpan.textContent = `(ID: ${gameAccount.accountId})`;

    anchor.appendChild(accountNameSpan);
    anchor.appendChild(accountInfoSpan);
    listItem.appendChild(anchor);
    gameAccountsList.appendChild(listItem);
  });