const cityNm = document.getElementById("cityName");
const submitB = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_val = document.getElementById("temp_val");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityNm.value;
    if(cityVal === ""){
        city_name.innerText = "Please write the city before searching..."
        dataHide.classList.add("data_hide");
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=726fa143acea1c91a79b0ab495c84089&units=metric`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
            temp_val.innerText = arrData[0].main.temp;

            const tempMode = arrData[0].weather[0].main;
            //  condition to check sunny or cloudy
            if(tempMode == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style = 'color: #eccc68;'></i>";
            }else if(tempMode == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }else if(tempMode == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style = 'color: #a4b0be;'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style = 'color: #f1f2f6;'></i>";
            }

            dataHide.classList.remove("data_hide");
            // console.log(data);
        }catch{
            city_name.innerText = "Please write the city name properly...";
            dataHide.classList.add("data_hide");
        }
    }
}
submitB.addEventListener('click', getInfo);
