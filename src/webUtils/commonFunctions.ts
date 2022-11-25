export const shuffleArray = (array:any[]) => {
    let array_len = array.length,currIndex;
    for (currIndex=array_len-1;currIndex>=0;currIndex--){
        let randIndex = Math.floor(Math.random()*(currIndex+1))
        var temp = array[currIndex];
        array[currIndex] = array[randIndex];
        array[randIndex] = temp;
    }
    return array;
}