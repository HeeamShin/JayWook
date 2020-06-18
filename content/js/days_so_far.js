function daysSoFar() {
    var today = new Date();
    var startDate = new Date(2020, 0, 28);

    var _doneDate = today.getTime() - startDate.getTime();
    var doneDate = Math.floor(_doneDate / (1000 * 60 * 60 * 24));

    var _daysSoFar = String(doneDate);
    $('#daySF').attr('data-to', _daysSoFar);
}