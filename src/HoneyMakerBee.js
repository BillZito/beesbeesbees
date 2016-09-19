var HoneyMakerBee = function() {
	Bee.call(this);

};

//sets prototype
HoneyMakerBee.prototype = Object.create(Bee.prototype);
//sets constructor
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
