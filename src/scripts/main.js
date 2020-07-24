import { createPlan } from "./plan.js";
import { addPlant, usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
const planArray = usePlants()
const harvest = harvestPlants(planArray)
// console.log(planArray)
// console.log("yearPlan", yearlyPlan)
console.log(harvest)