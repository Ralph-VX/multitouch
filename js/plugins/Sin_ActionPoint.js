
Game_Action.prototype.actMpCost = function() {
	return this._item.isSkill() ? this.subject().skillMpCost($dataSkills[this._item._itemId]) : 0;
};

Game_Action.prototype.actTpCost = function() {
	return this._item.isSkill() ? this.subject().skillTpCost($dataSkills[this._item._itemId]) : 0;
};

Game_Action.prototype.actApCost = function() {
	return this._item.isSkill() ? this.subject().skillApCost($dataSkills[this._item._itemId]) : 0;
};


Game_BattlerBase.prototype.skillApCost = function(skill) {
	value = parseInt($dataSkills[skill.id].meta.apcost);
	if (!value) {value = 1};
	return value;
};

var Sc_canUse = Game_BattlerBase.prototype.canPaySkillCost;
Game_BattlerBase.prototype.canPaySkillCost = function(skill) {
	if ($gameParty.inBattle() && this.isActor()) {
		var apc = this.TotalApSkillCost(skill) + this.skillApCost(skill)
		var tpc = this.TotalTpSkillCost(skill) + this.skillTpCost(skill)
		var mpc = this.TotalMpSkillCost(skill) + this.skillMpCost(skill)
		return this._tp >= tpc && this._mp >= mpc && this._ap >= apc;
	} else { Sc_canUse.call(this, arguments) };
};

Object.defineProperties(Game_BattlerBase.prototype, {
	ap: { get: function() { return this._ap; }, configurable: true },
});

ScAp_initMembers = Game_BattlerBase.prototype.initMembers
Game_BattlerBase.prototype.initMembers = function() {
    ScAp_initMembers.apply(this, arguments);
    this._ap = 0;
};

Game_BattlerBase.prototype.setAp = function(ap) {
	this._ap = ap;
};

Game_BattlerBase.prototype.gainAp = function(value) {
	this.setAp(this._ap + value);
};

Game_BattlerBase.prototype.maxAp = function() {
	if (!this.numActions()) return 1
	return this.numActions()
};

Game_Battler.prototype.TotalMpSkillCost = function() {
	var value = 0;
	this._actions.forEach(function(act) { console.log(act._item)
		value += act.actMpCost()});
	return value;
};

Game_BattlerBase.prototype.TotalTpSkillCost = function(skill) {
	var value = 0;
	this._actions.forEach(function(act) { 
		if (act.isSkill() && act.item() == skill) {
			skill = null;
			return;
		}
		value += act.actTpCost()
	};
	return value;
};

Game_BattlerBase.prototype.TotalApSkillCost = function() {
	var value = 0;
	this._actions.forEach(function(act) { value += act.actApCost()});
	return value;
};

ScAp_paySkillCost = Game_BattlerBase.prototype.paySkillCost
Game_BattlerBase.prototype.paySkillCost = function(skill) {
	ScAp_paySkillCost.apply(this, arguments);
    this._ap -= this.skillApCost(skill);
};

Game_BattlerBase.prototype.set_start_patb_val_norm = function() {
    if ($gameSystem.patb.atb_start_code === "agi") {
        this._patb_val.atb = this._max_patb_val * this.agi / this.paramMax(6);
    } else {
        this._patb_val.atb = 0;
    }
    this._apbar = this._patb_val.atb;
};

ScAp_update_patb = Game_Battler.prototype.update_patb
Game_Battler.prototype.update_patb = function() {
	this.update_ap_val(this._max_patb_val)
	ScAp_update_patb.apply(this, arguments);
};

Game_Battler.prototype.update_ap_val = function(cap) {
	if (this.ap >= this.maxAp()) {return};
	var rate = this.get_patb_rate()
	this._apbar += rate
	if (this._apbar < cap) {return};
	this._apbar = 0
	this.setAp(this.ap + 1)
};

ScAp_confirm_patb_act = Game_Actor.prototype.confirm_patb_act;
Game_Actor.prototype.confirm_patb_act = function() {
	ScAp_confirm_patb_act.apply(this, arguments);
	if (this.TotalApSkillCost() >= this.ap) {
		this._actions.forEach(function(act) {if (act){act.patb_confirm = true} });
	};
};

var ScAp_drawActorName = Window_Base.prototype.drawActorName
Window_Base.prototype.drawActorName = function(actor, x, y, width) {
    ScAp_drawActorName.apply(this, arguments);
    if ($gameParty.inBattle()) {this.drawText(actor.ap, x, y + 24, width)};
};
