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
 
});