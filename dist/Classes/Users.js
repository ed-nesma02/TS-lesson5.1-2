"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.sortedList = void 0;
var sortedList;
(function (sortedList) {
    sortedList["increase"] = "increase";
    sortedList["decreasing"] = "decreasing";
})(sortedList || (exports.sortedList = sortedList = {}));
class Users {
    userList = [];
    add(user) {
        this.userList.push(user);
    }
    remove(id) {
        const user = this.get(id);
        if (user) {
            const index = this.userList.indexOf(user);
            this.userList.splice(index, 1);
            return true;
        }
        return false;
    }
    get(id) {
        return this.userList.find((user) => user.id === id) ?? null;
    }
    increase(a, b) {
        if (a.id > b.id)
            return 1;
        if (a.id == b.id)
            return 0;
        return -1;
    }
    decreasing(a, b) {
        if (a.id < b.id)
            return 1;
        if (a.id == b.id)
            return 0;
        return -1;
    }
    sorted(typeSort) {
        if (typeSort === 'increase') {
            return this.userList.sort(this.increase);
        }
        return this.userList.sort(this.decreasing);
    }
}
exports.Users = Users;
