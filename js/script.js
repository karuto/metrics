$(function(){ // DOM Ready
 
	// get hold of the API object
    var g = $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [85, 100], /* 1170 container width /12 = 97.5 */
		// max_cols: 4,
		resize: {
			enabled: true,
			max_size: [12, 12],
			min_size: [3, 1]
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
					// backgroundColor: '#A66FA6',
	                type: 'line',
        			// Explicitly tell the width and height of a chart
        			height: 300,
					alignTicks: true,
		            zoomType: 'x'
	            },
				credits: {
					enabled: false
				},
				exporting: {
					enabled: true
				},
	            title: {
					align: "left",
	                text: ""
	            },
		        plotOptions: {
		            series: {
		                animation: {
		                    duration: 2000
		                }
		            }
		        },
	            // subtitle: {
	            //     text: 'Source: WorldClimate.com'
	            // },
	            xAxis: {
	                categories: ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']
	            },
	            yAxis: {
	                title: {
	                    text: 'Profit ($)'
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
	                text: ''
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
	                text: ''
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
	
	
	
	$('#ss-primary').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
		credits: {
			enabled: false
		},
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Sales volume ($)'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' Sales volume ($)'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Gross sales',
            data: [1502, 1635, 1809, 1947, 1402, 3634, 5268]
        }, {
            name: 'Net sales',
            data: [1633, 1607, 1979, 2133, 2221, 3767, 5766]
        }, {
            name: 'Order count',
            data: [1163, 1203, 1276, 1408, 1547, 1729, 1628]
        }]
    });
	
	
	$('#ss-secondary').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
		credits: {
			enabled: false
		},
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Sales volume ($)'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' Sales volume ($)'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Gross sales',
            data: [1502, 1635, 1809, 1947, 1402, 3634, 5268]
        }, {
            name: 'Net sales',
            data: [1633, 1607, 1979, 2133, 2221, 3767, 5766]
        }, {
            name: 'Order count',
            data: [1163, 1203, 1276, 1408, 1547, 1729, 1628]
        }]
    });
	
			
    $('#bubblechart').highcharts({

        chart: {
            type: 'bubble',
            zoomType: 'xy',
        },

        title: {
            text: ''
        },
       
        yAxis: {
            min: 0,
            title: {
                text: 'Item margin $',
            },
           
        },
		credits: {
			enabled: false
		},
       
        xAxis: {
            title: {
                text: 'Sales quantity',
            },
           
        },

        series: [{
            name: 'Highest Grossing Items',
            data: [[90, 2.30, 207], [21, 7.3, 153.3], [23, 5.79, 133.17]]
        }, {
            name: 'Highest Selling Items',
            data: [[104, .9, 93.6], [73, 1.6, 116.8],[90,2.3,207]],
        }, {
            name: 'Highest Margin Items',
            data: [[4, 9.87, 39.48], [10, 7.21, 72.10],[21,7.3,153.3]],
        }, {
            name: 'Lowest Margin Items',
            data: [[21, 1.13, 23.73], [3, 1.39, 4.17],[23,.8,18.4]],
        }, {
            name: 'Other Items',
            data: [[40, 2,80], [21, 6, 126],[15, 4,60],[16,5.5,88],[56,2,112],[42,3.08,128.52]],
       
        }]
    });
 
});