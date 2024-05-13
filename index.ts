#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(
  " \n\t========================================================\t\n"
);

console.log(
  chalk.yellow(
    "\n\t      **************WELCOME TO QUIZ**************        \n\t"
  )
);

console.log(
  "\n\t=========================================================\t\n"
);

let scores = 0;

let answers = await inquirer.prompt([
  {
    name: "question",
    type: "list",
    message: chalk.greenBright("To which prophet did Allah directly speak to?"),
    choices: [
      "Prophet Jesus (PBUH)",
      "Prophet Abraham (PBUH)",
      "Prophet David (PBUH)",
      "Prophet Moses (PBUH)",
    ],
  },
]);
if (answers.question === "Prophet Moses (PBUH)") {
  console.log("Correct! ");
  console.log(
    chalk.magenta(
      "\tA Muslim firmly believes that divinely revealed books were actually revealed by the compassionate God to His prophets to guide mankind. The Quran is not the only spoken Word of God, but God also spoke to prophets before Prophet Muhammad (PBUH). “…and to Moses Allah spoke directly.”(Quran 4:164)\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\n   WRONG ANSWERS!!! \n"));
}
let answers1 = await inquirer.prompt([
  {
    name: "question1",
    type: "list",
    message: chalk.greenBright("Who has been sent as a mercy to the worlds?"),
    choices: [
      "Prophet Jesus (PBUH)",
      "Prophet Muhammad (PBUH)",
      "Prophet Moses (PBUH)",
      "Prophet Abraham (PBUH)",
    ],
  },
]);
if (answers1.question1 === "Prophet Muhammad (PBUH)") {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\t“…And we have sent you O Muhammad, not but as a mercy for humankind and all that exists.”(Quran 21:107)\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}
let answers2 = await inquirer.prompt([
  {
    name: "question2",
    type: "list",
    message: chalk.greenBright(
      "Which of the prophets were ordered by Allah to build the Kaabah in Makkah?"
    ),
    choices: [
      "Prophet Adam (PBUH) and Prophet Noah (PBUH)",
      "Prophet Abraham (PBUH) and Prophet Ishmael (PBUH)",
      "Prophet Jesus (PBUH) and Prophet Muhammad (PBUH)",
      "Prophet Moses (PBUH) and Prophet David (PBUH)",
    ],
  },
]);
if (
  answers2.question2 === "Prophet Abraham (PBUH) and Prophet Ishmael (PBUH)"
) {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\tAllah mentions in the Quran “And when we assigned to Abraham the place of the House: ‘Do not associate with Me anything, and purify My House for those who circumambulate it, who stand in prayer, and who bow, and prostrate themselves (all in prayer).’ And proclaim the Pilgrimage (Hajj) among people, and they shall come to you on foot, and on every lean camel. They shall come to you from every deep and distant mountain highways.”(Quran 22:26)\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}
let answers3 = await inquirer.prompt([
  {
    name: "question3",
    type: "list",
    message: chalk.greenBright("Who is the last Messenger of Allah?"),
    choices: [
      "Prophet Jesus (PBUH)",
      "Prophet Abraham (PBUH)",
      "Prophet Muhammad (PBUH)",
      "Prophet Moses (PBUH)",
    ],
  },
]);
if (answers3.question3 === "Prophet Muhammad (PBUH)") {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\tAllah decreed that the Prophet Muhammad would be His final messenger. Allah says: “Muhammad is not the father of any man among you, but he is the Messenger of God and the last of the Prophets. And Allah is Ever All-Aware of everything.” (Quran 33:40)\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}
let answers4 = await inquirer.prompt([
  {
    name: "question4",
    type: "list",
    message: chalk.greenBright(
      "Who has Allah mentioned in the Quran as the best example to follow?"
    ),
    choices: ["Prophet Muhammad (PBUH)", "Pharaoh", "Angels", "Jinn"],
  },
]);
if (answers4.question4 === "Prophet Muhammad (PBUH)") {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\tAllah says in the Quran “Indeed in the Messenger of Allah you have a good example to follow…” (Quran 33:21)\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}
let answers5 = await inquirer.prompt([
  {
    name: "question5",
    type: "list",
    message: chalk.greenBright(
      "Do Muslim women have the right to accept or deny marriage proposals?"
    ),
    choices: [
      "Muslim women have full rights to accept or deny marriage proposals",
      "Muslim women cannot choose their spouse",
      "Parents of the bride have the right",
      "None of the above",
    ],
  },
]);
if (answers5.question5 == "Muslim women have full rights to accept or deny marriage proposals") {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\tMuslim women have the right to accept or refuse marriage proposals as they see fit, and married women are completely free from the obligation of supporting and maintaining the family. Working married women are free to contribute to the household expenses, or not, as they see fit. Women have the right to seek divorce if it becomes necessary\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}
let answers6 = await inquirer.prompt([
  {
    name: "question6",
    type: "list",
    message: chalk.greenBright(
      "What did the Prophet Muhammad (PBUH) mention about the status of a Mother?"
    ),
    choices: [
      "Mothers are not important at all",
      "Paradise is beneath the feet of a mother",
      "Mothers are bad omens",
      "None of the above",
    ],
  },
]);
if (answers6.question6 === "Paradise is beneath the feet of a mother") {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\tOnce, when a man came to the Prophet (p), and expressed the desire to join a military expedition, the Prophet Muhammad (PBUH) asked him if he had a mother. When he replied that he had, the Prophet (PBUH) advised him, “Stay with her, for Paradise is at her feet.” (Reported by Ahmad, Basa’i and Al-Baihaqi\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}

let answers7 = await inquirer.prompt([
  {
    name: "question7",
    type: "list",
    message: chalk.greenBright(
      "What did the Prophet Muhammad (PBUH) mention about the raising of daughters?"
    ),
    choices: [
      "Anyone who raises two daughters with love and affection will enter paradise",
      "Daughters are ill omens and should not be given love and affection",
      "There is no mention about the raising of daughters by the Prophet (PBUH)",
      "None of the above",
    ],
  },
]);
if (
  answers7.question7 ===
  "Anyone who raises two daughters with love and affection will enter paradise"
) {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\tThe importance of raising daughters in Islam is such that the Prophet Muhammad (PBUH) stated that “Anyone who raises two daughters with Love and Affection till they grow, he will enter paradise. (Musnad Ahmad Vol. 3, Hadith – 14247)\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}

let answers8 = await inquirer.prompt([
  {
    name: "question8",
    type: "list",
    message: chalk.greenBright("How should women be treated in Islam?"),
    choices: [
      "Women should be treated as slaves",
      "Women are considered as bad omens and sinful",
      "Women be treated with respect, honour and justice. It condemns oppression of any kind",
      "None of the above",
    ],
  },
]);
if (
  answers8.question8 ===
  "Women be treated with respect, honour and justice. It condemns oppression of any kind"
) {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\tThe religion of Islam demands that women be treated with respect, honour, and justice. It condemns oppression of any kind. In Islam women, like men, are commanded to believe in God and to worship Him. Women are equal to men in terms of reward in the hereafter.\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}

let answers9 = await inquirer.prompt([
  {
    name: "question9",
    type: "list",
    message: chalk.greenBright(
      "Are women allowed to remarry in Islam after divorce or death of the husband?"
    ),
    choices: [
      "Yes, remarriage for women is permitted in Islam",
      "No, remarriage is not permitted for women in Islam",
      "Only men have the right to remarry",
      "None of the above",
    ],
  },
]);
if (answers9.question9 === "Yes, remarriage for women is permitted in Islam") {
  console.log("Correct!");
  console.log(
    chalk.magenta(
      "\tIslam is the way of life, and provides options for remarriage irrespective of whether for a man or woman. Similarly it also gives rights to both men and women to seek divorce and to part ways, however it is mentioned in the Quran that Allah likes not the ones who break relationships\t"
    )
  );
  scores++;
} else {
  console.log(chalk.bgRedBright("\nWRONG ANSWERS!!! \n"));
}

console.log(`\n \tYour Total Score Is: ${scores}\n \t`);
