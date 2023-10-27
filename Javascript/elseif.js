function findesig(x){
    if(x > 0 && x<2)
    {
        console.log("junior developer");
    }
    else if(x>3 && x<5)
    {
        console.log("senior developer");
    }
    else if(x>6 && x<8)
    {
        console.log("Team Lead");
    }
    else if(x>9 && x<12)
    {
        console.log("Project Manager");
    }
    else if(x>12 && x<16)
    {
        console.log("Sof Architect");
    }

    else{
        console.log("Not def");

    }
}
findesig(7)