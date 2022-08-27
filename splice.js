const months = ["Jan","Feb","march","April","May","June"];

const indexNumber = months.indexOf("march");

if(indexNumber != -1){
    const updateMonth = months.splice(indexNumber,1,"March");
    // console.log(updateMonth);
    console.log(months);
}
else{
    console.log("Data not found.");
}