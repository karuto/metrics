$(function(){ //DOM Ready
 
    $(".gridster ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [140, 140],
		resize: {
			enabled: true,
			max_size: [4, 4],
			min_size: [1, 1]
		}
    });
 
});