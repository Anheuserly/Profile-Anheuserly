 // Sample friends data
 const friends = [
    { name: "Aprel", accountId: 39913, discordUsername: "ladyaprel ", discordUserId: 1040256657600557077 },
    { name: "Tachyon", accountId: 789012, discordUsername: "tachyon22 ", discordUserId: 996660076997787678 },
    { name: "Antony_. ", accountId: 2930346, discordUsername: "antony_. ", discordUserId: 483302621784965121 },
    { name: "Rodsmun ", accountId: 2930346, discordUsername: "rodsmun  ", discordUserId: 367343311641640961 },
    { name: "Bombshell ", accountId: null, discordUsername: "lsrcrbombshell ", discordUserId: 925139029589123132 },
    { name: "RoToRo ", accountId: 3273704, discordUsername: "N/V ", discordUserId: 925139029589123132 },
    { name: "KeRo ", accountId: 2560691, discordUsername: "0kero ", discordUserId: 353582829868941315 },
    { name: "Pirate ", accountId: 276794, discordUsername: " khalil4400 ", discordUserId: 413315190872866816 },
    { name: "Potcher. ", accountId: 2986574, discordUsername: " potcher. ", discordUserId: 534889291914936380 },
    { name: "Snipez[NC] ", accountId: 2510695, discordUsername: "_ivl ", discordUserId: 165026460350808064 },
    { name: "randossq ", accountId: 2726401, discordUsername: "mahmoudyy ", discordUserId: 396790026970595328 },
    { name: "Probot ", accountId: 58855, discordUsername: "probot. ", discordUserId: 665531752361754644 },
    { name: "Aeronn ", accountId: 3212894, discordUsername: "unaeron ", discordUserId: 590655733855551503 },
    { name: "Rokusho ", accountId: 2618561, discordUsername: "rokusho96  ", discordUserId: 423588376147656732 },
    { name: "el_zorro ", accountId: 1159603, discordUsername: "N/V  ", discordUserId: null },
    { name: "Avryll ", accountId: 170456, discordUsername: "notavy0209  ", discordUserId: 958159975388172338 },
    { name: "Hunter.bbH ", accountId: 1835938, discordUsername: "butram ", discordUserId: 326522295663198208 },
    { name: "Artemwaynes ", accountId: 3244324, discordUsername: "artemwaynes ", discordUserId: 305612981281095680 },
    { name: "Batii ", accountId: 288698, discordUsername: "N/V ", discordUserId: null },
    { name: "HeavennUIF ", accountId: 2773930, discordUsername: "heavennnn ", discordUserId: 290116138917036032 },
    { name: "Shakaib ", accountId: 1835938, discordUsername: "shakaib.  ", discordUserId: 1140891726882537542 },
    { name: "Rambo ", accountId: 2425213, discordUsername: "dejayrambo ", discordUserId: 316009311052759041 },
    { name: "Z4.Vince ", accountId: 1255181, discordUsername: "vince.z4 ", discordUserId: 357995641768509441 },
    { name: "Protic ", accountId: null, discordUsername: "yourfavoriteanon ", discordUserId: 696632603394048050 },
    { name: "Alex_Werner ", accountId: 2788227, discordUsername: "alexwerner ", discordUserId: 146695256757370880 },
    { name: "Cresil ", accountId: 294111, discordUsername: "_cresil ", discordUserId: 356069990488866827 },
    { name: "ilham_ ", accountId: 1464810, discordUsername: "ilhamh ", discordUserId: 458461421391446027 },
    { name: "Heede ", accountId: 181163, discordUsername: " heede ", discordUserId: 441930552451530753 },
    { name: "Windsome ", accountId: null, discordUsername: " winsome._.  ", discordUserId: 700560411983872001 },
    { name: "Aparesh ", accountId: null, discordUsername: " kraparesh   ", discordUserId: 396251038807752714 },
    // Add more friends here
  ];

  // Get the friends list element
  const friendsList = document.getElementById("friends-list");

  // Get the friend template
  const friendTemplate = document.getElementById("friend-template");

  // Generate the friends list
  friends.forEach((friend) => {
    const friendHTML = friendTemplate.content.cloneNode(true);
    friendHTML.querySelector(".name").textContent = friend.name;
    friendHTML.querySelector(".account-id").textContent = friend.accountId;
    friendHTML.querySelector(".discord-username").textContent = friend.discordUsername;
    friendHTML.querySelector(".discord-user-id").textContent = friend.discordUserId;
    friendsList.appendChild(friendHTML);
  });