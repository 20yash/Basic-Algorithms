function towerOfHanoi(n,leftRodFROM,rightRodTO,middleRodUSING){
    if(n===1){
        console.log(`move disk 1 from ${leftRodFROM} to ${rightRodTO}`);
        return 
    }

    towerOfHanoi(n-1,leftRodFROM,middleRodUSING,rightRodTO)
    console.log(`moving disk ${n} from ${leftRodFROM} to ${rightRodTO}`);

    towerOfHanoi(n-1,middleRodUSING,rightRodTO,leftRodFROM)
    // console.log(`moving disk ${n} from ${middleRodUSING} to ${rightRodTO}`);



}

(towerOfHanoi(90,'A','C','B'));