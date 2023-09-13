let url = "http://universities.hipolabs.com/search?name="
let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
    // console.log("button is pressed");
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getColleges(country);
    let state = document.querySelector("#state").value;
    if (country == "india" && state.length != 0){
        show_state(colleges, state);
    }
    else
    show(colleges);
})

function show_state (colleges, state) {
    let list = document.querySelector("#list");
    list.innerText = "";
    console.log(state);
    for (col of colleges)
    {
        //console.log(col['state-province']);
        if (col['state-province'] == state)
        {
            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
            console.log(col.name);
        }
    }
    console.log(colleges);
}

function show (colleges) {
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of colleges)
    {
        let li = document.createElement("li");
        li.innerText = col.name
        list.appendChild(li);
        console.log(col.name);
    }
}

async function getColleges (country){
    try{
        let res = await axios.get(url+country);
        return (res.data);
    } catch(e) {
        console.log("error : ", e);
        return [];
    }
};