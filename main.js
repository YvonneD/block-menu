var t1 = new TimelineMax({
	paused: true
});
t1.staggerTo(".block", 1.2, {
	width: "25%",
	ease: Power4.easeInOut
}, 0.2);
t1.staggerFrom('.menu ul li', 0.9, {
	y: 50,
	opacity: 0,
	ease: Bounce.easeOut
}, 0.2);
t1.reverse();
$(document).on('click', '.trigger-btn', function() {
	t1.reversed(!t1.reversed());
});