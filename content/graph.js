google.load('visualization', '1.0', { 'packages': ['corechart'] });
    
// 그래프 API 로드가 완료되면 실행할 수 있도록 이벤트 지정 
google.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    var today = new Date();
    var startDate = new Date(2020, 0, 28);
    var endDate = new Date(2021, 7, 4);

    var _doneDate = today.getTime() - startDate.getTime();
    var doneDate = Math.floor(_doneDate / (1000 * 60 * 60 * 24));
    var _toDoDate = endDate.getTime() - today;
    var toDoDate = Math.floor(_toDoDate / (1000 * 60 * 60 * 24));
    var _totalDate = endDate.getTime() - startDate.getTime();
    var totalDate = Math.floor(_totalDate / (1000 * 60 * 60 * 24));

    var _donePercent = doneDate / totalDate * 100;
    var donePercent = _donePercent.toFixed(2) + '%';
    var _toDoPercent = toDoDate / totalDate * 100;
    var toDoPercent = 'To do: ' + _toDoPercent.toFixed(2) + '%';

    data.addColumn('string', 'Type');
    data.addColumn('number', 'RemainDate');

    data.addRows([
        ['Done', doneDate],
        ['To do', toDoDate],
    ]);

    // 그래프의 옵션을 지정 
    var opt = {
        // 'title': 'Jay Wook Days',
        // 'width': 600,
        // 'height': 400,
        // pieSliceText: 'label',
        // legend: 'none'
        hAxis: {
            titleTextStyle: {color: '#607d8b'}, 
            gridlines: { count:0}, 
            textStyle: { color: '#b0bec5', fontName: 'Roboto', fontSize: '12', bold: true}
            },
        vAxis: {
            minValue: 0, 
            gridlines: {color:'#37474f', count:4}, 
            baselineColor: 'transparent'
        },
        legend: {position: 'top', alignment: 'center', textStyle: {color:'#607d8b', fontName: 'Roboto', fontSize: '12'} },
        colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39"],
        areaOpacity: 0.24,
        lineWidth: 1,
        backgroundColor: 'transparent',
        chartArea: {
            backgroundColor: "transparent",
            width: '100%',
            height: '80%'
        },
        height:'100%', // example height, to make the demo charts equal size
        width:'100%',
        pieSliceBorderColor: '#263238',
        pieSliceTextStyle:  {color:'#607d8b' },
        pieHole: 0.9,
        bar: {groupWidth: "40" },
        colorAxis: {colors: ["#3f51b5","#2196f3","#03a9f4","#00bcd4"] },
        backgroundColor: 'transparent',
        datalessRegionColor: '#37474f',
        displayMode: 'regions'
    };

    var chart = new google.visualization.PieChart(
        document.getElementById('chart_div'));
    chart.draw(data, opt);
}