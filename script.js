const weapons = [
    { emoji: '🏹', rarity: 'Common', damage: 10 },
    { emoji: '🪃', rarity: 'Common', damage: 10 },
    { emoji: '🗡️', rarity: 'Uncommon', damage: 15 },
    { emoji: '🛡️', rarity: 'Uncommon', damage: 15 },
    { emoji: '🪓', rarity: 'Uncommon', damage: 15 },
    { emoji: '⚔️', rarity: 'Rare', damage: 20 },
    { emoji: '🔫', rarity: 'Rare', damage: 20 },
    { emoji: '🧨', rarity: 'Epic', damage: 30 },
    { emoji: '💣', rarity: 'Legendary', damage: 50 },
];

let playerLevel = 1;
let playerXP = 0;
let playerHealth = 100;
let botHealth = 100;
let currentWeapon = null;

document.getElementById('fightButton').addEventListener('click', startFight);

function startFight() {
    currentWeapon = rollWeapon();
    document.getElementById('weaponDisplay').innerText = `You rolled: ${currentWeapon.emoji} (${currentWeapon.rarity})`;
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('fight').classList.remove('hidden');
    resetHealth();
    updateHealthBars();
    botHealth = 100; // Reset bot health
    fight();
}

function rollWeapon() {
    return weapons[Math.floor(Math.random() * weapons.length)];
}

function resetHealth() {
    playerHealth = 100;
    botHealth = 100;
}

function updateHealthBars() {
    document.getElementById('playerHealth').style.width = `${playerHealth}%`;
    document.getElementById('botHealth').style.width = `${botHealth}%`;
}

function fight() {
    const botDamage = Math.floor(Math.random() * 10) + 5; // Random bot damage
    const playerDamage = currentWeapon.damage;

    const interval = setInterval(() => {
        botHealth -= playerDamage;
        playerHealth -= botDamage;

        updateHealthBars();

        if (playerHealth <= 0) {
            clearInterval(interval);
            alert('You lost! Try again.');
            resetGame();
        } else if (botHealth <= 0) {
            clearInterval(interval);
            alert('You won! You
