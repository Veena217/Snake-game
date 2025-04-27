async function initial(){
    data1=document.getElementById("initial");
    data1.innerHTML=InitializingHacking;
    return data1

}
async function main(){
    data1=await initial();

}

main();