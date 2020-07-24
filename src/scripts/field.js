

const farmArray = []
//addplant has a perameter of seedObj and is checking for seed if object is an array.
//The for statement is looping the array and pushes each indiviual object into the array.
//the else state is pushing anything that isn't an array into the farmArray.
export const addPlant = (seedObj) => {
    if(Array.isArray(seedObj)){
        for(const seed of seedObj) {
            farmArray.push(seed)
        }
    }
    else {

        farmArray.push(seedObj)
    }
    
}
export const usePlants = () => {
    return farmArray.slice()

}