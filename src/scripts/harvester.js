export const harvestPlants = (farmArray) => {
    const harvestArray = []
    for (const plant of farmArray) {
        if (plant.type === "Corn") {
            plant.output /= 2
        }
        for (let i = 0; i < plant.output; i++) {
            harvestArray.push(plant)
        }

    }
return harvestArray
}