fetch("https://swapi.dev/api/people")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displaydetail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displaydetail(data)
  {  //grid-1
    const g1=data.results[0];
    const g1Div = document.getElementById("g1");
    const g1Name = g1.name;
    const g1height = g1.height;
    const g1gender = g1.gender;
    const g1birth_year = g1.birth_year;
    const g1mass = g1.mass;

    const name1 = document.createElement("p");
    name1.innerHTML ="name:"+ g1Name;
    g1Div.appendChild(name1);

    const height1 = document.createElement("p");
    height1.innerHTML = "height:"+ g1height;
    g1Div.appendChild(height1);

    const gender1 = document.createElement("p");
    gender1.innerHTML ="gender:"+ g1gender;
    g1Div.appendChild(gender1);

    const mass1 = document.createElement("p");
    mass1.innerHTML = "mass:"+g1mass;
    g1Div.appendChild(mass1);

    const year1 = document.createElement("p");
    year1.innerHTML ="birth-year:"+ g1birth_year;
    g1Div.appendChild(year1);

    //grid-2
    const g2=data.results[1];
    const g2Div = document.getElementById("g2");
    const g2Name = g2.name;
    const g2height = g2.height;
    const g2gender = g2.gender;
    const g2birth_year = g2.birth_year;
    const g2mass = g2.mass;

    const name2 = document.createElement("p");
    name2.innerHTML ="name:"+ g2Name;
    g2Div.appendChild(name2);

    const height2 = document.createElement("p");
    height2.innerHTML = "height:"+ g2height;
    g2Div.appendChild(height2);

    const gender2 = document.createElement("p");
    gender2.innerHTML ="gender:"+ g2gender;
    g2Div.appendChild(gender2);

    const mass2 = document.createElement("p");
    mass2.innerHTML = "mass:"+g2mass;
    g2Div.appendChild(mass2);

    const year2 = document.createElement("p");
    year2.innerHTML ="birth-year:"+ g2birth_year;
    g2Div.appendChild(year2);

//grid-3

const g3=data.results[2];
const g3Div = document.getElementById("g3");
const g3Name = g3.name;
const g3height = g3.height;
const g3gender = g3.gender;
const g3birth_year = g3.birth_year;
const g3mass = g3.mass;

const name3 = document.createElement("p");
name3.innerHTML ="name:"+ g3Name;
g3Div.appendChild(name3);

const height3 = document.createElement("p");
height3.innerHTML = "height:"+ g3height;
g3Div.appendChild(height3);

const gender3 = document.createElement("p");
gender3.innerHTML ="gender:"+ g3gender;
g3Div.appendChild(gender3);

const mass3 = document.createElement("p");
mass3.innerHTML = "mass:"+g3mass;
g3Div.appendChild(mass3);

const year3 = document.createElement("p");
year3.innerHTML ="birth-year:"+ g3birth_year;
g3Div.appendChild(year3);

//grid4
const g4=data.results[3];
const g4Div = document.getElementById("g4");
const g4Name = g4.name;
const g4height = g4.height;
const g4gender = g4.gender;
const g4birth_year = g4.birth_year;
const g4mass = g4.mass;

const name4 = document.createElement("p");
name4.innerHTML ="name:"+ g4Name;
g4Div.appendChild(name4);

const height4 = document.createElement("p");
height4.innerHTML = "height:"+ g4height;
g4Div.appendChild(height4);

const gender4 = document.createElement("p");
gender4.innerHTML ="gender:"+ g4gender;
g4Div.appendChild(gender4);

const mass4 = document.createElement("p");
mass4.innerHTML = "mass:"+g4mass;
g4Div.appendChild(mass4);

const year4 = document.createElement("p");
year4.innerHTML ="birth-year:"+ g4birth_year;
g4Div.appendChild(year4);

//grid5

const g5=data.results[4];
const g5Div = document.getElementById("g5");
const g5Name = g5.name;
const g5height = g5.height;
const g5gender = g5.gender;
const g5birth_year = g5.birth_year;
const g5mass = g5.mass;

const name5 = document.createElement("p");
name5.innerHTML ="name:"+ g5Name;
g5Div.appendChild(name5);

const height5 = document.createElement("p");
height5.innerHTML = "height:"+ g5height;
g5Div.appendChild(height5);

const gender5 = document.createElement("p");
gender5.innerHTML ="gender:"+ g5gender;
g5Div.appendChild(gender5);

const mass5 = document.createElement("p");
mass5.innerHTML = "mass:"+g5mass;
g5Div.appendChild(mass5);

const year5 = document.createElement("p");
year5.innerHTML ="birth-year:"+ g5birth_year;
g5Div.appendChild(year5);

//grid6

const g6=data.results[5];
const g6Div = document.getElementById("g6");
const g6Name = g6.name;
const g6height = g6.height;
const g6gender = g6.gender;
const g6birth_year = g6.birth_year;
const g6mass = g6.mass;

const name6 = document.createElement("p");
name6.innerHTML ="name:"+ g6Name;
g6Div.appendChild(name6);

const height6 = document.createElement("p");
height6.innerHTML = "height:"+ g6height;
g6Div.appendChild(height6);

const gender6 = document.createElement("p");
gender6.innerHTML ="gender:"+ g6gender;
g6Div.appendChild(gender6);

const mass6 = document.createElement("p");
mass6.innerHTML = "mass:"+g6mass;
g6Div.appendChild(mass6);

const year6 = document.createElement("p");
year6.innerHTML ="birth-year:"+ g6birth_year;
g6Div.appendChild(year6);

//grid-7

const g7=data.results[6];
const g7Div = document.getElementById("g7");
const g7Name = g7.name;
const g7height = g7.height;
const g7gender = g7.gender;
const g7birth_year = g7.birth_year;
const g7mass = g7.mass;

const name7 = document.createElement("p");
name7.innerHTML ="name:"+ g7Name;
g7Div.appendChild(name7);

const height7 = document.createElement("p");
height7.innerHTML = "height:"+ g7height;
g7Div.appendChild(height7);

const gender7 = document.createElement("p");
gender7.innerHTML ="gender:"+ g7gender;
g7Div.appendChild(gender7);

const mass7 = document.createElement("p");
mass7.innerHTML = "mass:"+g7mass;
g7Div.appendChild(mass7);

const year7 = document.createElement("p");
year7.innerHTML ="birth-year:"+ g7birth_year;
g7Div.appendChild(year7);

//grid8

const g8=data.results[7];
const g8Div = document.getElementById("g8");
const g8Name = g8.name;
const g8height = g8.height;
const g8gender = g8.gender;
const g8birth_year = g8.birth_year;
const g8mass = g8.mass;

const name8 = document.createElement("p");
name8.innerHTML ="name:"+ g8Name;
g8Div.appendChild(name8);

const height8 = document.createElement("p");
height8.innerHTML = "height:"+ g8height;
g8Div.appendChild(height8);

const gender8 = document.createElement("p");
gender8.innerHTML ="gender:"+ g8gender;
g8Div.appendChild(gender8);

const mass8 = document.createElement("p");
mass8.innerHTML = "mass:"+g8mass;
g8Div.appendChild(mass8);

const year8 = document.createElement("p");
year8.innerHTML ="birth-year:"+ g8birth_year;
g8Div.appendChild(year8);

//grid9

const g9=data.results[8];
const g9Div = document.getElementById("g9");
const g9Name = g9.name;
const g9height = g9.height;
const g9gender = g9.gender;
const g9birth_year = g9.birth_year;
const g9mass = g9.mass;

const name9 = document.createElement("p");
name9.innerHTML ="name:"+ g9Name;
g9Div.appendChild(name9);

const height9 = document.createElement("p");
height9.innerHTML = "height:"+ g9height;
g9Div.appendChild(height9);

const gender9 = document.createElement("p");
gender9.innerHTML ="gender:"+ g9gender;
g9Div.appendChild(gender9);

const mass9 = document.createElement("p");
mass9.innerHTML = "mass:"+g9mass;
g9Div.appendChild(mass9);

const year9 = document.createElement("p");
year9.innerHTML ="birth-year:"+ g9birth_year;
g9Div.appendChild(year9);

}