google.load('visualization', '1.0', { 'packages': ['corechart'] });
    
// 그래프 API 로드가 완료되면 실행할 수 있도록 이벤트 지정 
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    
    var _today = new Date();
    var _year = _today.getFullYear();
    var _month = _today.getMonth();
    var _day = _today.getDate();
    var today = new Date(_year, _month, _day);

    var startDate = new Date(2020, 0, 28);
    var endDate = new Date(2021, 7, 4);

    var _doneDate = today.getTime() - startDate.getTime();
    var doneDate = (_doneDate / (1000 * 60 * 60 * 24)) + 1;
    var _toDoDate = endDate.getTime() - today.getTime();
    var toDoDate = _toDoDate / (1000 * 60 * 60 * 24);

    var totalDate = doneDate + toDoDate;

    var _donePercent = doneDate / totalDate * 100;
    var _toDoPercent = toDoDate / totalDate * 100;

    data.addColumn('string', 'Type');
    data.addColumn('number', 'RemainDate');

    data.addRows([
        ['Done', doneDate],
        ['To do', toDoDate],
    ]);

    // 그래프의 옵션을 지정 
    var opt = {
        // hAxis: {
        //     titleTextStyle: {color: '#3f51b5'}, 
        //     gridlines: { count:0}, 
        //     textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
        //     },
        // vAxis: {
        //     minValue: 0, 
        //     gridlines: {color:'#37474f', count:4}, 
        //     baselineColor: 'transparent'
        // },
        // legend: {position: 'top', alignment: 'center', textStyle: {color:'#607d8b', fontName: 'Roboto', fontSize: '12'} },
        // colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
        // areaOpacity: 0.24,
        // lineWidth: 1,
        // backgroundColor: 'transparent',
        // chartArea: {
        //     backgroundColor: "transparent",
        //     width: '100%',
        //     height: '80%'
        // },
        // height:'100%', // example height, to make the demo charts equal size
        // width:'100%',
        // pieSliceBorderColor: '#263238',
        // pieSliceTextStyle:  {color:'#607d8b' },
        // pieHole: 0.9,
        // bar: {groupWidth: "80" },
        // colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
        // backgroundColor: 'transparent',
        // datalessRegionColor: '#37474f',
        // displayMode: 'regions',
        chartArea: {width: 400, height: 400},
        title: 'JW Days',
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
    };

    var chart = new google.visualization.PieChart(
        document.getElementById('chart_div'));
    chart.draw(data, opt);
}