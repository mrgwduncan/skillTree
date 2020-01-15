const skills = require('./skills.js')
function character(name,) {
  this.name = name;
  this.homeTown="ireland"
  this.stats = [["str",1],["dex",1],["con",1],["min",1],["per",1],["spi",1],["prime",0]],
  this.remainingstats ={
    used: 0,
    remaining: 0,
    max: 351,
    skillPointsUsed:0,
    skillPointsRemaining:0,
    skillPointsMax:53
  },
  this.potential = skills.skillList,
  this.chosen = {},
  this.findRequiredStat = () => {
    for (i=0; i < this.stats.length; i++){
      let stat = this.stats[i][0]
      for (var name in this.chosen){
        if (this.chosen[name].statRequirement[stat] > this.stats[i][1]){
        this.stats[i][1] = ( this.chosen[name].statRequirement[stat])
        }
      }
    }
  },
  this.checkProhibited = function(obj){
    if (this.potential[obj].prohibited !== undefined){
      for (i=0; i < this.potential[obj].prohibited.length;i++){
        for (name in this.chosen){
          if (this.potential[obj].prohibited[i] === name){
            console.log("can not add " + obj + " " + "because " + name + " is known" )
            return false
          }
        } 
      }
      return true
      } else {
      return true
      }   
  }
  this.checkrequired = function(obj){
    if(this.potential[obj].requirements !== undefined ){
      var numOfrequirements = (this.potential[obj].requirements.length)
      var count=0
      for (var name in this.chosen){
          if (this.potential[obj].requirements[count] === name){
            count++
          }
        if (count === numOfrequirements) {  
        return true;
        }
      }  
    }
    else {
    return true 
    }
  }
  this.checkHomeTown = function (obj){
        if (this.potential[obj].homeTown !== undefined){
          for (i=0; i < this.potential[obj].homeTown.length;i++){
            if (this.potential[obj].homeTown[i] == this.homeTown){
            return true;  
            }
          }
    } else {
      return true;
    }
  }
  this.addToChosen = function (obj) {
    this.chosen[obj]=Object.assign({},this.potential[obj])
  }
  this.calcRemainingStats = function() {
    this.remainingstats.used = 0
    for (i=0; i < this.stats.length;i++){
      this.remainingstats.used += this.stats[i][1]
      } 
    this.remainingstats.remaining = (this.remainingstats.max - this.remainingstats.used)
    this.remainingstats.skillPointsUsed=(Object.keys(this.chosen).length)
    this.remainingstats.skillPointsRemaining=(this.remainingstats.skillPointsMax - this.remainingstats.skillPointsUsed )
 }
 this.removeProhibited = function(obj) {
   let prohibitedSkills = this.chosen[obj].prohibited
   if (prohibitedSkills !== undefined ){
     for (i=0;i < prohibitedSkills.length;i++) {
        var remove =(this.chosen[obj].prohibited[i])
        delete this.potential[remove]
     }
   }
  }

  this.addSkill = function (obj) {
    if (this.potential[obj] !== undefined){
      if (this.checkrequired(obj) === true && this.checkProhibited(obj) === true && this.checkHomeTown(obj) === true)
      this.addToChosen(obj)
      this.removeProhibited(obj)
      this.findRequiredStat()
      this.calcRemainingStats()
      }
    }
} 

module.exports = character
    