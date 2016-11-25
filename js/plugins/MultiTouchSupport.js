//=============================================================================
// Multi Touch Support
// MultiTouchSupport.js
// Version: 1.00
//=============================================================================
var Imported = Imported || {};
Imported.Kien_MultiTouchSupport = true;

var Kien = Kien || {};
Kien.MultiTouchSupport = {};
//=============================================================================
/*:
 * @plugindesc Allow Multi Touch screen to function properly.
 * @author Kien
 *
 * @param Flick Length
 * @desc Length in Frames to let a swipe consider as Flick/Short Touch.
 * 60 Frames = 1 Second.
 * @default 20
 *
 * @param Long Touch Length
 * @desc Length in Frames to let a swipe consider as Hold Touch.
 * 60 Frames = 1 Second.
 * @default 90
 *
 * @param MultiTouch Threshold
 * @desc Amount of frames that allow multiple touches considered as "Touch in same time"
 * 60 Frames = 1 Second.
 * @default 5
 *
 * @param Swipe Threshold
 * @desc Amount of pixels the touch point need to move to consider as swipe/flick.
 * Screen Touch that is moved below this value will be considered as Touch/Long Touch.
 * @default 10
 *
 * @param Debug Mode
 * @desc Output Debug Information from this plugin.
 * Will always not enabled when not in test-play.
 * @default false
 *
 * @help
 *
//=============================================================================
// Multi Touch Support
// MultiTouchSupport.js
// Version: 1.00
//=============================================================================
  Allow the multi touch screen function properly.

//=============================================================================
// Warning
//=============================================================================
  This plugin is directed at plugin maker, to allow them create touch UI with
less effort. By default, this plugin don't provide too many functionalities.
  This Plugin will overwrite a very large portion of core plugin. If you con-
tact me, I MAY try to fix conflicts with other plugins, but this is NOT promis-
ed.
//=============================================================================
// API Documentation
//=============================================================================
*/


Kien.MultiTouchSupport.parameters = PluginManager.parameters("MultiTouchSupport");
Kien.MultiTouchSupport.flikLength = parseInt(Kien.MultiTouchSupport.parameters["Flick Length"]);
Kien.MultiTouchSupport.longTouchLength = parseInt(Kien.MultiTouchSupport.parameters["Long Touch Length"]);
Kien.MultiTouchSupport.multiTouchThreshold = parseInt(Kien.MultiTouchSupport.parameters["MultiTouch Threshold"]);
Kien.MultiTouchSupport.swipeThreshold = parseInt(Kien.MultiTouchSupport.parameters["Swipe Threshold"]);
Kien.MultiTouchSupport.debugMode = eval(Kien.MultiTouchSupport.parameters["Debug Mode"]);


if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

//-----------------------------------------------------------------------------
// TouchPoint
//
//   Represents a single touch point. Also provide functionalities to examine 
// The movement.

TouchPoint.flickLength = Kien.MultiTouchSupport.flickLength;
TouchPoint.longTouchLength = Kien.MultiTouchSupport.longTouchLength;
TouchPoint.swipeThreshold = Kien.MultiTouchSupport.swipeThreshold;
TouchPoint.multiTouchThreshold = Kien.MultiTouchSupport.multiTouchThreshold;

function TouchPoint() {
	this.initialize.apply(this, arguments);
}

Object.defineProperty(TouchPoint.prototype, 'x', {
	get: function() {
		return this._x;
	},
	configurable: true
});

Object.defineProperty(TouchPoint.prototype, 'y', {
	get: function() {
		return this._y;
	},
	configurable: true
});

TouchPoint.prototype.initialize = function(touch) {
	this._identifier = touch.identifier;
	this._x = Graphics.pageToCanvasX(touch.pageX);
	this._y = Graphics.pageToCanvasY(touch.pageY);
	this._initX = this._x;
	this._initY = this._y;
	this._path = [];
	this._startFrame = Graphics.frameCount;
	this._isTouched = false;
	this._isTouching = true;
	this._isSwipe = false;
	this._isFlick = false;
	this._swipeDistance = -1;
	this._swipeStrength = -1;
	this._isLongTouch = false;
	this._finish = false;
	this._duration = -1;
}

TouchPoint.prototype.isTouched = function() {
	return this._isTouched;
}

TouchPoint.prototype.isTouching = function() {
	return this._isTouching;
}

TouchPoint.prototype.isSwipe = function() {
	return this._isSwipe;
}

TouchPoint.prototype.isFlick = function() {
	return this._isFlick;
}

TouchPoint.prototype.isLongTouch = function() {
	return this._isLongTouch;
}

TouchPoint.prototype.distance = function() {
	return this._swipeDistance;
}

TouchPoint.prototype.strength = function() {
	return this._swipeStrength;
}

TouchPoint.prototype.onMove = function(touch) {
	this._path.push({x: this._x, y: this._y});
	this._x = Graphics.pageToCanvasX(touch.pageX);
	this._y = Graphics.pageToCanvasY(touch.pageY);
}

TouchPoint.prototype.onEnd = function(touch) {
	this._path.push({x: this._x, y: this._y});
	this._x = Graphics.pageToCanvasX(touch.pageX);
	this._y = Graphics.pageToCanvasY(touch.pageY);
	this._isTouching = false;
	this.examinePath();
}

TouchPoint.prototype.examinePath = function() {
	var endFrame = Graphics.frameCount;
	var dx = this._x - this._initX;
	var dy = this._y - this._initY;
	var dt = endFrame - this._startFrame;
	var dis = Math.sqrt(dx * dx + dy * dy);
	if (dis < TouchPoint.swipeThreshold) {
		if (dt < TouchPoint.longTouchLength) {
			this._isLongTouch = true;
		} else {
			this._isTouched = true;
		}
		this._duration = TouchPoint.multiTouchThreshold;
	} else {
		if (dt < TouchPoint.flickLength) {
			this._isFlick = true;
		} else {
			this._isSwipe = true;
		}
	}
	this._swipeDistance = dis;
	this._swipeStrength = dis / dt;
	this._finish = true;
}

//-----------------------------------------------------------------------------
/**
 * The static class that handles input data from the mouse and touchscreen.
 *
 * @class TouchInput
 */

Kien.MultiTouchSupport.TouchInput_clear = TouchInput.clear;
TouchInput.clear = function() {
	Kien.MultiTouchSupport.TouchInput_clear.call(this);
	this._kienTouches = {};
	this._kienReturnedTouchIdentifiers = []
	this._kienNewTouches = [];
	this._kienTouchIdentifiers = [];
	this._kienFrameCount = Graphics.frameCount;
	this.clearKienEvent();
}

Kien.MultiTouchSupport.TouchInput_update = TouchInput.update;
TouchInput.update = function() {
	Kien.MultiTouchSupport.TouchInput_update.call(this);
	this.clearFinishedTouch();
	this.updateKienTouch();
	if (Graphics.frameCount != this._kienFrameCount) {
		this.clearKienEvent();
		this._kienFrameCount = Graphics.frameCount;
	}
}

TouchInput.clearFinishedTouch = function() {
	var callback = function(obj) { 
		var ti = TouchInput._kienTouchIdentifiers[obj]
		return TouchInput._kienTouches[ti]._finish && TouchInput._kienTouches[ti]._duration <= 0; 
	};
	var i = this._kienTouchIdentifiers.findIndex(callback);
	while (i >= 0) {
		var ti = this._kienTouchIdentifiers[i];
		var callback2 = function(obj) {return obj._identifier == ti};
		this._kienTouchIdentifiers.splice(i, 1);
		delete this._kienTouches[ti];
		var ii = this._kienNewTouches.findIndex(callback2);
		if (ii >= 0) {
			this._kienNewTouches.splice(ii, 1);
		}
		i = this._kienTouchIdentifiers.findIndex(callback);
	}
}

TouchInput.clearKienEvent = function() {
	this._kienTouchStartEvent = [];
	this._kienTouchMoveEvent = [];
	this._kienTouchEndEvent = [];
}

TouchInput.updateKienTouch = function() {
	for (var n = 0; n < this._kienTouchIdentifiers.length; n++) {
		var ti = this._kienTouchIdentifiers[n];
		var tp = this._kienTouches[ti];
		if (tp._finish && tp._duration > 0) {
			tp._duration--;
		}
	}
	for (var n = 0; n < this._kienTouchMoveEvent.length; n++ ) {
		var touch = this._kienTouchMoveEvent[n];
		var tp = this._kienTouches[touch.identifier];
		if (tp) {
			tp.onMove(touch);
		}
	}
	for (var n = 0; n < this._kienTouchEndEvent.length; n++ ) {
		var touch = this._kienTouchEndEvent[n];
		var tp = this._kienTouches[touch.identifier];
		if (tp) {
			tp.onEnd(touch);
		}
	}
	if (Kien.MultiTouchSupport.debugMode) {
		for (var n = 0; n < this._kienTouchIdentifiers.length; n++) {
			var ti = this._kienTouchIdentifiers[n];
			var tp = this._kienTouches[ti];
			console.log('id: ' + ti + ', x: ' + tp.x + ', y: ' + tp.y);
		}
	}
}

TouchInput._kienOnTouchStart = function(event) {
	for (var n = 0; n < event.changedTouches.length; n++) {
		var t = event.changedTouches[n];
		var tp = new TouchPoint(t);
		this._kienTouches[t.identifier] = tp;
		this._kienNewTouches.push(tp);
		this._kienTouchStartEvent.push(t);
		if (this._kienTouchIdentifiers.indexOf(t.identifier) === -1) {
			this._kienTouchIdentifiers.push(t.identifier);
		}
	}
	this._kienRemoveUnavailablePoint(event);
}

TouchInput._kienOnTouchMove = function(event) {
	for (var n = 0; n < event.changedTouches.length; n++) {
		var t = event.changedTouches[n];
		var tp = this._kienTouches[t.identifier];
		if (!tp) {
			// Prevent unexpected error. Add a new point into list.
			tp = new TouchPoint(t);
			this._kienTouches[t.identifier] = tp;
			if (this._kienTouchIdentifiers.indexOf(t.identifier) === -1) {
				this._kienTouchIdentifiers.push(t.identifier);
			}
		}
		this._kienTouchMoveEvent.push(t);
	}
	this._kienRemoveUnavailablePoint(event);
}

TouchInput._kienOnTouchEnd = function(event) {
	for (var n = 0; n < event.changedTouches.length; n++) {
		var t = event.changedTouches[n];
		var tp = this._kienTouches[t.identifier];
		if (!tp) {
			// Prevent unexpected error. Add a new point into list.
			tp = new TouchPoint(t);
			this._kienTouches[t.identifier] = tp;
			if (this._kienTouchIdentifiers.indexOf(t.identifier) === -1) {
				this._kienTouchIdentifiers.push(t.identifier);
			}
		}
		this._kienTouchEndEvent.push(t);
	}
}

// Find the identifier that is not exists in event, but still available in system.
TouchInput._kienRemoveUnavailablePoint = function(event) {
	var allidentifiers = [];
	var unavailableidentifier = [];
	for (var n = 0; n < event.touches.length; n++) {
		allidentifiers.push(event.touches[n].identifier);
	}
	for (var n = 0; n < this._kienTouchIdentifiers.length; n++) {
		var ti = this._kienTouchIdentifiers[n];
		if (!allidentifiers.contains(ti)) {
			unavailableidentifier.push(ti);
		}
	}
	for (var n = 0; n < unavailableidentifier.length; n++) {
		var ti = unavailableidentifier[n];
		var callback = function(o) { return o == ti; };
		var i = this._kienTouchIdentifiers.findIndex(callback);
		while (i >= 0) {
			this._kienTouchIdentifiers.splice(i,1);
			i = this._kienTouchIdentifiers.findIndex(callback);
		}
		delete this._kienTouches[ti];
	}
}

Kien.MultiTouchSupport.TouchInput_setupEventHandlers = TouchInput._setupEventHandlers;
TouchInput._setupEventHandlers = function() {
	Kien.MultiTouchSupport.TouchInput_setupEventHandlers.call(this);
	document.addEventListener('touchstart', this._kienOnTouchStart.bind(this));
	document.addEventListener('touchmove', this._kienOnTouchMove.bind(this));
	document.addEventListener('touchend', this._kienOnTouchEnd.bind(this));
	document.addEventListener('touchcancel', this._kienOnTouchEnd.bind(this));
}

// API Space

// TouchInput.isTouched(`ngers, forceNew)
//   return null if no touch action is performed, or the amount of finger is not enough.
//   return TouchPoint object if exists one, or an array of TouchPoint object when fingers is specified above 1.
//   When forceNew is set to true, this operation will limit to 'new' touches only.
TouchInput.isTouched = function(fingers,forceNew) {
	fingers = (fingers && fingers > 0 ) ? fingers : 1;
	if (fingers == 1) {
		var arr = this._kienTouchIdentifiers;
		if (!!forceNew) {
			arr = arr.filter(function(obj) {
				return this._kienReturnedTouchIdentifiers.indexOf(obj) === -1; 
			}.bind(this));
		}
		for (var i = 0; i < arr.length; n++) {
			var ti = arr[i];
			var tp = this._kienTouches[ti];
			if (tp._finish && tp._duration == 0) {
				if (this._kienReturnedTouchIdentifiers.indexOf(tp._identifier) === -1) {
					this._kienReturnedTouchIdentifiers.push(tp._identifier);
				}
				return tp;
			}
		}
	} else {

	}
	return null;
}
