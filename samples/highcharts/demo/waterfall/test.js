function test(chart) {
	var point = chart.series[0].points[4],
		offset = $(chart.container).offset();

	// Set hoverPoint
	point.onMouseOver();

	chart.pointer.onContainerMouseMove({
		type: 'mousemove',
		pageX: point.plotX + chart.plotLeft + offset.left,
		pageY: point.plotY + chart.plotTop + offset.top,
		target: chart.container
	});
}