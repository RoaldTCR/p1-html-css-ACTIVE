
        document.addEventListener('DOMContentLoaded', function () {
            var player;
            var slime;

            function Character(name, health, attack, defense) {
                this.name = name;
                this.health = health;
                this.attack = attack;
                this.defense = defense;
            }

            function playerAttackZ() {
                if (slime.health > 0) {
                    var damage = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
                    slime.health -= damage;
                    if (slime.health < 0) {
                        slime.health = 0;
                    }
                    updateLog(`Player used fireball and dealt ${damage} damage!`);
                } else {
                    updateLog(`${slime.name} has already been defeated!`);
                }
            }

            function playerAttackX() {
                if (slime.health > 0) {
                    var damage = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
                    slime.health -= damage;
                    if (slime.health < 0) {
                        slime.health = 0;
                    }
                    updateLog(`Player used lightning bolt and dealt ${damage} damage!`);
                } else {
                    updateLog(`${slime.name} has already been defeated!`);
                }
            }

            function playerAttackC() {
                if (slime.health > 0) {
                    var damage = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
                    slime.health -= damage;
                    if (slime.health < 0) {
                        slime.health = 0;
                    }
                    updateLog(`Player used slash and dealt ${damage} damage!`);
                } else {
                    updateLog(`${slime.name} has already been defeated!`);
                }
            }

            function slimeAttackSlap() {
                if (player.health > 0) {
                    var damage = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
                    player.health -= damage;
                    if (player.health < 0) {
                        player.health = 0;
                    }
                    updateLog(`Slime used slap and dealt ${damage} damage!`);
                } else {
                    updateLog(`${player.name} has already been defeated!`);
                }
            }

            function slimeAttackBite() {
                if (player.health > 0) {
                    var damage = Math.floor(Math.random() * (11 - 8 + 1)) + 8;
                    player.health -= damage;
                    if (player.health < 0) {
                        player.health = 0;
                    }
                    updateLog(`Slime used bite and dealt ${damage} damage!`);
                } else {
                    updateLog(`${player.name} has already been defeated!`);
                }
            }

            function slimeAttackSpew() {
                if (player.health > 0) {
                    var damage = Math.floor(Math.random() * (14 - 9 + 1)) + 9;
                    player.health -= damage;
                    if (player.health < 0) {
                        player.health = 0;
                    }
                    updateLog(`Slime used spew and dealt ${damage} damage!`);
                } else {
                    updateLog(`${player.name} has already been defeated!`);
                }
            }

            function battleKeyListener(event) {
                if (event.key === 'z') {
                    playerAttackZ();
                } else if (event.key === 'x') {
                    playerAttackX();
                } else if (event.key === 'c') {
                    playerAttackC();
                }

                slimeRandomAttack();

                document.body.style.transform = 'translate(-2px, 2px)';
                setTimeout(function () {
                    document.body.style.transform = 'translate(0, 0)';
                }, 100);
            }

            function slimeRandomAttack() {
                var randomAttack = Math.floor(Math.random() * 3);
                if (randomAttack === 0) {
                    slimeAttackSlap();
                } else if (randomAttack === 1) {
                    slimeAttackBite();
                } else {
                    slimeAttackSpew();
                }
            }

            function updateLog(message) {
                var logContainer = document.getElementById('log');
                var logEntry = document.createElement('div');
                logEntry.textContent = message;
                logContainer.appendChild(logEntry);
                logContainer.scrollTop = logContainer.scrollHeight;

                // Update displayed HP values
                document.getElementById('log').textContent = `${player.name} HP: ${player.health} | ${slime.name} HP: ${slime.health}`;
            }

            player = new Character("Player", 100, 20, 10);
            slime = new Character("Slime", 50, 8, 5);

            document.addEventListener('keydown', battleKeyListener);
        });