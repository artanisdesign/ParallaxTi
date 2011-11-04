var _GLOBALS = {};
Titanium.UI.setBackgroundColor('#000');
var window = Ti.UI.createWindow();
	window.fullscreen = true;
	window.orientationModes = [
		Titanium.UI.LANDSCAPE_RIGHT
	];
var canvas = Ti.UI.createView(),
	frontView = Ti.UI.createView({
		width:480,
		height:320,
		backgroundImage:'/images/space3.gif',
		left:0
	}),
	frontFollowView = Ti.UI.createView({
		width:480,
		height:320,
		backgroundImage:'/images/space3.gif',
		left:-480
	}),
	middleView = Ti.UI.createView({
		width:480,
		height:320,
		backgroundImage:'/images/space2.gif',
		left:0
	}),
	middleFollowView = Ti.UI.createView({
		width:480,
		height:320,
		backgroundImage:'/images/space2.gif',
		left:-480
	}),
	backView = Ti.UI.createView({
		width:480,
		height:320,
		backgroundImage:'/images/space1.gif',
		left:0
	}),
	backFollowView = Ti.UI.createView({
		width:480,
		height:320,
		backgroundImage:'/images/space1.gif',
		left:-480
	});
canvas.add(backView);
canvas.add(backFollowView);
canvas.add(middleView);
canvas.add(middleFollowView);
canvas.add(frontView);
canvas.add(frontFollowView);
var spaceShip = Ti.UI.createView({
	width:100,
	height:50,
	backgroundImage:'/images/SpaceShip.png'
});
canvas.add(spaceShip);
setInterval(function() {
	frontView.left = frontView.left + 0.9;
	frontFollowView.left = frontFollowView.left + 0.09;
	if (frontView.center.x >= 720) {
		frontView.left = -480
	}
	if (frontFollowView.center.x >= 720) {
		frontFollowView.left = -480
	}
    middleView.left = middleView.left + 0.6;
    middleFollowView.left = middleFollowView.left + 0.06;
    if (middleView.center.x >= 720) {
		middleView.left = -480
	}
	if (middleFollowView.center.x >= 720) {
		middleFollowView.left = -480
	}
	
    backView.left = backView.left + 0.3;
    backFollowView.left = backFollowView.left + 0.03;
    if (backView.center.x >= 720) {
		backView.left = -480
	}
	if (backFollowView.center.x >= 720) {
		backFollowView.left = -480
	}
}, 1);
window.add(canvas);
window.open();