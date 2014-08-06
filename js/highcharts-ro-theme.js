/**
 * Grid theme for Highcharts JS
 * @author Torstein Honsi
 */

Highcharts.theme = {
	colors: ["#A66FA6", "#91A437", "#609732", "#983351"],
	chart: {
		backgroundColor: '#FFF',
		borderWidth: 0,
		plotShadow: true,
		plotBorderWidth: 0
	},
	title: {
		style: {
			color: '#000',
			font: 'bold 16px Roboto, Verdana, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#666666',
			font: 'bold 12px Roboto, Verdana, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 0,
		lineColor: '#666',
		tickColor: '#666',
		labels: {
			style: {
				color: '#000',
				font: '12px Roboto, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Roboto, Verdana, sans-serif'

			}
		}
	},
	yAxis: {
		lineColor: '#666',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#666',
		labels: {
			style: {
				color: '#609732',
				font: '12px Roboto, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Roboto, Verdana, sans-serif'
			}
		}
	},
	legend: {
		itemStyle: {
			font: '9pt Roboto, sans-serif',
			color: 'black'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b',
			fontWeight: 'normal',
		}
	},

	navigation: {
		buttonOptions: {
			theme: {
				stroke: '#CCCCCC'
			}
		}
	}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);