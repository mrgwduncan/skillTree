const skills = require('./skills.js')
const character = require('./function.js')

var harlequin= new character("harlequin")


harlequin.addSkill("rage")
harlequin.addSkill("bandage")
harlequin.addSkill("herblore")
harlequin.addSkill("poultice")
harlequin.addSkill("brew")
harlequin.addSkill("powder")
harlequin.addSkill("augment")
harlequin.addSkill("bowman")
harlequin.addSkill("archer")
harlequin.addSkill("deadeye")

function displaychar (char){
    console.log("Character: "+char.name)
    console.log("Minimum stats required for skills" )
    console.log(char.stats)
    console.log("Used stat points: " + char.remainingstats.used)
    console.log("Remaining stat points: " + char.remainingstats.remaining)
    console.log("Total stat points: " + char.remainingstats.max)
    console.log("chosen skills " + char.remainingstats.skillPointsUsed + "/" + char.remainingstats.skillPointsMax )
    console.log(Object.keys(char.chosen))
    console.log("potential Skills count" )
    console.log(Object.keys(char.potential).length)
    
}
displaychar(harlequin)