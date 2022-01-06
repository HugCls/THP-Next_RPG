class Game {
    constructor(playersArray, turnLeft = 10) {
        this._playersArray = playersArray;
        this._turnLeft = this.validateTurnLeft(turnLeft);
    }

    get playersArray() {
        return this._playersArray;
    }

    set playersArray(newPlayersArray) {
        this._playersArray = newPlayersArray;
    }

    get turnLeft() {
        return this._turnLeft;
    }

    set turnLeft(newTurnLeft) {
        this._turnLeft = this.validateTurnLeft(newTurnLeft);
    }

    validateTurnLeft(newTurnLeft) {
        if (newTurnLeft >= 1 && newTurnLeft <= 250) {
            return newTurnLeft;
        } else {
            alert("Le nombre de tours à jouer dans une partie doit être compris entre 1 et 250 !");
            return 1;
        }
    }

    newTurn() {
        if (this._turnLeft >= 1) {
            this._turnLeft--;
        }
        if (this._turnLeft === 0) {
            this._playersArray.map(function(player) {
                if (player._hp > 0) {
                    player.status = "winner";
                }
            });
        }
    }
    onlyOnePlayerIsStillAliveOrNone() {
        let result = false;
        result = this.playersArray.filter(function(player) { return player._hp > 0; }).length <= 1;
        return result;
    }

    reset() {
        let newTurnLeft = prompt("Combien souhaitez-vous jouer de tours pour cette partie? (10 par défaut)");
        if (newTurnLeft === null) {
            newTurnLeft = 10;
        }
        this.turnLeft = newTurnLeft;
        this.playersArray.map(function(player) {
            player.reset();
        });
        this._turn = new Turn();
    }

    watchStats() {
        document.getElementById("p1");
        p1.value = this._playersArray[0].getAllInfo();

        document.getElementById("p2");
        p1.value = this._playersArray[1].getAllInfo();

        document.getElementById("p3");
        p1.value = this._playersArray[2].getAllInfo();

        document.getElementById("p4");
        p1.value = this._playersArray[3].getAllInfo();

        document.getElementById("p5");
        p1.value = this._playersArray[4].getAllInfo();

        document.getElementById("p6");
        p1.value = this._playersArray[5].getAllInfo();

        document.getElementById("p7");
        p1.value = this._playersArray[6].getAllInfo();
    }
}