import { createCorn } from "./seeds/corn.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower} from "./seeds/sunflower.js"
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
    for(const row of yearlyPlan) {
        // console.log("rows", row)
        for(const plant of row) {
            // console.log("plant rows", plant)
            if(plant === "Corn") {
                addPlant(createCorn()) 
            } else if(plant == "Asparagus") {
                addPlant(createAsparagus())
            } else if(plant === "Potato") {
                addPlant(createPotato())
            } else if(plant === "Soybean") {
                addPlant(createSoybean()) 
            } else if(plant === "Wheat") {
                addPlant(createWheat())
            } else if(plant ==="Sunflower") {
                addPlant(createSunflower())
            }
        }
    }
}