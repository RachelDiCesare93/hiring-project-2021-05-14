// function to get weather data


$(document).ready(function(){
    $.ajax({
      type: 'GET',
      url: "https://api.worldweatheronline.com/premium/v1/weather.ashx?key=&q=30.404251,-97.849442&num_of_days=31&format=json",
      success: function(data) {
        Highcharts.stockChart('highs-lows-container', {
            chart: {
                events: {
                    load: function () {
        
                        // set up the updating of the chart each second
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.round(Math.random() * 100);
                            series.addPoint([x, y], true, true);
                        }, 1000);
                    }
                }
            },
        
            time: {
                useUTC: false
            },
        
            rangeSelector: {
                buttons: [{
                    count: 1,
                    type: 'day',
                    text: 'Cd'
                }, {
                    count: 1,
                    type: 'week',
                    text: '1w'
                }, {
                    count: 1,
                    type: 'month',
                    text: '1m'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                inputEnabled: false,
                selected: 0
            },
        
            title: {
                text: '3-Hour Highs and Lows'
            },
            rangeSelector: {
                selected: 1,
                inputDateFormat: '%Y-%d-%m',
                inputEditDateFormat: '%Y-%d-%m'
            },
        
            exporting: {
                enabled: false
            },
        
            series: [{
                name: 'Highs and Lows',
                data: (function () {
                    // generate an array of random data
                    var data = [],
                        time = (new Date()).getTime(),
                        i;
        
                    for (i = -999; i <= 0; i += 1) {
                        data.push([
                            time + i * 1000,
                            Math.round(Math.random() * 100)
                        ]);
                    }
                    return data;
                }())
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            align: 'center',
                            verticalAlign: 'bottom',
                            layout: 'horizontal'
                        }
                    }
                }]
            },
        });
      }
    });
  });