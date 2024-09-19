var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var BASE_URL = 'https://nbaserver-q21u.onrender.com/api/filter/';
function getPlayer(player) {
    return __awaiter(this, void 0, void 0, function () {
        var response, playerList, players_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch(BASE_URL, {
                            method: "POST",
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify(player)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("network error");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    playerList = _a.sent();
                    players_1 = [];
                    playerList.forEach(function (player) {
                        var newPlayer = {
                            points: player.points,
                            threePercent: player.threePercent,
                            twoPercent: player.twoPercent,
                            position: player.position
                        };
                        players_1.push(newPlayer);
                    });
                    return [2 /*return*/, playerList];
                case 3:
                    error_1 = _a.sent();
                    console.log("error", error_1);
                    throw new Error;
                case 4: return [2 /*return*/];
            }
        });
    });
}
var chooseBtn = document.querySelector('#choose-btn');
chooseBtn.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var rolePlayer, points, FG, treeP, newPlayers;
    return __generator(this, function (_a) {
        rolePlayer = document.querySelector('#role-player');
        points = document.querySelector('#points');
        FG = document.querySelector('#FG');
        treeP = document.querySelector('#tree');
        newPlayers = {
            points: parseInt(points.value),
            threePercent: parseInt(treeP.value),
            twoPercent: parseInt(FG.value),
            position: rolePlayer.value
        };
        renderData(newPlayers);
        return [2 /*return*/];
    });
}); });
var renderData = function (nweplayersetings) { return __awaiter(_this, void 0, void 0, function () {
    var result, tbody;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getPlayer(nweplayersetings)];
            case 1:
                result = _a.sent();
                tbody = document.querySelector('tbody');
                tbody.innerHTML = '';
                result.forEach(function (player) {
                    var row = document.createElement('tr');
                    var nameCell = document.createElement('td');
                    var PositionCell = document.createElement('td');
                    var PointsCell = document.createElement('td');
                    var FGCell = document.createElement('td');
                    var treePCell = document.createElement('td');
                    var actionsCell = document.createElement('td');
                    nameCell.innerHTML = "".concat(player.playerName);
                    PositionCell.innerHTML = "".concat(player.position);
                    PointsCell.innerHTML = "".concat(player.points);
                    FGCell.innerHTML = "".concat(player.twoPercent);
                    treePCell.innerHTML = "".concat(player.threePercent);
                    var editBtn = document.createElement('button');
                    editBtn.innerText = 'edit';
                    editBtn.addEventListener('click', function () {
                        var playerElement = document.querySelector("#".concat(player.position));
                        var list = document.createElement('ul');
                        var name = document.createElement('li');
                        var points = document.createElement('li');
                        var position = document.createElement('li');
                        var FG = document.createElement('li');
                        var treeP = document.createElement('li');
                        name.innerHTML = "name: ".concat(player.playerName);
                        points.innerHTML = "points: ".concat(player.points);
                        position.innerHTML = "position: ".concat(player.position);
                        FG.innerHTML = "FG: ".concat(player.twoPercent);
                        treeP.innerHTML = "treeP: ".concat(player.threePercent);
                        list.appendChild(name);
                        list.appendChild(points);
                        list.appendChild(position);
                        list.appendChild(FG);
                        list.appendChild(treeP);
                        playerElement === null || playerElement === void 0 ? void 0 : playerElement.appendChild(list);
                    });
                    actionsCell.appendChild(editBtn);
                    row.appendChild(nameCell);
                    row.appendChild(PositionCell);
                    row.appendChild(PointsCell);
                    row.appendChild(FGCell);
                    row.appendChild(treePCell);
                    row.appendChild(actionsCell);
                    tbody.appendChild(row);
                });
                return [2 /*return*/];
        }
    });
}); };
