$(function(){ // DOM Ready
 
	// get hold of the API object
    var g = $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [85, 100], /* 1170 container width /12 = 97.5 */
		// max_cols: 4,
		resize: {
			enabled: true,
			max_size: [4, 4],
			min_size: [1, 1]
		}
    }).data('gridster');
	
	// Add a new widget to the grid
	// g.add_widget('<li class="new">The HTML of the widget...</li>', 2, 1);
	
	/* Highcharts below */
    $('#herochart').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
	
	$('#dailysaleschart').highcharts({
	            chart: {
	                type: 'line',
        			// Explicitly tell the width and height of a chart
        			width: null
        			// height: 400
	            },
				credits: {
					enabled: false
				},
	            title: {
					align: "left",
	                text: 'Daily profit overview'
	            },
	            // subtitle: {
	            //     text: 'Source: WorldClimate.com'
	            // },
	            xAxis: {
	                categories: ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']
	            },
	            yAxis: {
	                title: {
	                    text: 'Sales ($)'
	                }
	            },
	            plotOptions: {
	                line: {
	                    dataLabels: {
	                        enabled: true
	                    },
	                    enableMouseTracking: false
	                }
	            },
	            series: [{
	                name: 'Hourly gross profit',
	                data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	            }, {
	                name: 'Tuesday daily average',
	                data: [7.2, 6.1, 8.5, 12.9, 18.8, 23.2, 24.7, 25.6, 24.1, 15.9, 13.4, 9.0]
	            }]
	});
	
	$('#vendorpurchases').highcharts({
	            chart: {
	                type: 'bar'
	            },
	            title: {
					align: "left",
	                text: 'Vendor purchases overview'
	            },
	            // subtitle: {
	            //     text: 'Source: Wikipedia.org'
	            // },
	            xAxis: {
	                categories: ['Italfoods, Inc', 'Cook Company Produce', 'Oakland Packaging & Supply', 'Kael Foods', 'Primizie Foods, Inc', 'Kaffa Coffee', 'Almare LLC', 'VNO Food and Wine', 'V & C Pizza'],
	                title: {
	                    text: null
	                }
	            },
	            yAxis: {
	                min: 0,
	                title: {
	                    text: 'Invoice totals ($)',
	                    align: 'high'
	                },
	                labels: {
	                    overflow: 'justify'
	                }
	            },
	            tooltip: {
	                valueSuffix: ' millions'
	            },
	            plotOptions: {
	                bar: {
	                    dataLabels: {
	                        enabled: true
	                    }
	                }
	            },
	            legend: {
	                enabled: false
	            },
	            credits: {
	                enabled: false
	            },
	            series: [{
	                name: 'Invoice',
	                data: [12981, 11914, 11054, 10732, 10034, 9839, 9482, 7109, 6031]
	            }]
	});
	
	$('#vendoritems').highcharts({
	            chart: {
	                type: 'bar'
	            },
	            title: {
					align: "left",
	                text: 'Vendor items overview'
	            },
	            // subtitle: {
	            //     text: 'Source: Wikipedia.org'
	            // },
	            xAxis: {
	                categories: ['Organic Oranges', 'Tomatoes', 'Washed Spinach', 'Organic Mushroom', 'Eggplant', 'Pork', 'Red Grapes', 'Watermelon Seedless', 'Zucchini', 'Blueberries'],
	                title: {
	                    text: null
	                }
	            },
	            yAxis: {
	                min: 0,
	                title: {
	                    text: 'Invoice totals ($)',
	                    align: 'high'
	                },
	                labels: {
	                    overflow: 'justify'
	                }
	            },
	            tooltip: {
	                valueSuffix: ' millions'
	            },
	            plotOptions: {
	                bar: {
	                    dataLabels: {
	                        enabled: true
	                    }
	                }
	            },
	            legend: {
	                enabled: false
	            },
	            credits: {
	                enabled: false
	            },
	            series: [{
	                name: 'Invoice',
	                data: [6083, 4914, 4332, 3193, 3055, 2789, 2394, 2207, 1759, 1208]
	            }]
	});
	
			
 
});