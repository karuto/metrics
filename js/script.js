$(function(){ // DOM Ready
 
	// get hold of the API object
    var g = $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [390, 100], /* 1170 container width /3 = 390 */
		max_cols: 4,
		resize: {
			enabled: true,
			max_size: [4, 4],
			min_size: [1, 1]
		}
    }).data('gridster');
	
	// Add a new widget to the grid
	// g.add_widget('<li class="new">The HTML of the widget...</li>', 2, 1);
 
});