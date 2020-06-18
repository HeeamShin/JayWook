function daysLeft() {
    var today = new Date();
    var startDate = new Date(2020, 0, 28);
    var endDate = new Date(2021, 7, 4);

    var _toDoDate = endDate.getTime() - today;
    var toDoDate = Math.floor(_toDoDate / (1000 * 60 * 60 * 24));

    var _daysLeft = String(toDoDate);

    return _daysLeft;
}