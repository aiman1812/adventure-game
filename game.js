import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red("=".repeat(40)));
console.log(chalk.green.bold.underline("💀💀💀💀==== ADVENTURE GAME ====💀💀💀💀"));
console.log(chalk.red("=".repeat(40)));
//----------Games variables--------
let enemies = ["Skeleton", "Zombies", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
//--------Players variable---------
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotion = 5;
let healthPotionHealthAmount = 30;
let healthPotionDropChance = 50;
//----------While loop condition--------
let gameRunning = true;
GAME: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(`your Health: ${heroHealth}`);
        console.log(`${enemy} Health ${enemyHealth}`);
        let option = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "What would you like to do?",
                choices: ["1.Attack", "2.Take Health potion", "3.Run"]
            }
        ]);
        if (option.ans === "1.Attack") {
            let attackDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`you strike ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero} damage.`);
            if (heroHealth < 1) {
                console.log("you have taken too much damage. you are too weak to continue.");
                break;
            }
        }
        else if (option.ans === "2.Take Health potion") {
            if (numHealthPotion > 0) {
                heroHealth += healthPotionHealthAmount;
                numHealthPotion--;
                console.log(`you use health potion for ${healthPotionHealthAmount}`);
                console.log(`you now have ${heroHealth} health`);
                console.log(`you have ${numHealthPotion}health potion left`);
            }
            else {
                console.log(` you have no health potion left. defeat enemy for a chanceget health potion`);
            }
        }
        else if (option.ans === "3.Run") {
            console.log(`you run away from ${enemy}`);
            continue GAME;
        }
    }
    if (heroHealth < 1) {
        console.log(`you are out from Battle.yoou are too weak.`);
        break;
    }
    console.log(`${enemy} was Defeated`);
    console.log(`you have${heroHealth} health.`);
    let randomNumber = Math.floor(Math.random() * 100 + 1);
    if (randomNumber < healthPotionDropChance) {
        numHealthPotion++;
        console.log(`Enemy give you health potion`);
        console.log(`your health is ${heroHealth}`);
        console.log(`your health potion is ${numHealthPotion}`);
    }
    let useroption = await inquirer.prompt([
        {
            name: "ans",
            type: "list",
            message: "What would you like to do now",
            choices: ["1.Continue", "2.Exit"]
        }
    ]);
    if (useroption.ans === "1.Continue") {
        console.log("you are continue on your Adventure");
    }
    else {
        console.log("You successfully Exit from DeadZone");
        break;
    }
    console.log("*".repeat(40));
    console.log(chalk.yellow.bold.underline("☠️☠️☠️==== TAHNKYOU  FOR PLAYING ====☠️☠️☠️\n"));
    console.log("*".repeat(40));
}
