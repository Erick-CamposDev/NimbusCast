//CONSTANTES DE BUSCA
const locationSearch = document.getElementById("locationSearch");
const searchBtn = document.getElementById("searchBtn");

//NOME DA CIDADE
const cityTitle = document.getElementById("title");

//AREA PARA MENSAGENS DE ERRO
const messageArea = document.getElementById("messages");

//AREA DE CARREGAMENTO
const loading = document.querySelector(".city-name");
const spinner = document.querySelector(".spinner");

//TEXTO E IMAGEM PRINCIPAL
const weatherImg = document.querySelector(".weather-img");
const weatherTxt = document.querySelector(".weather-text");

//INFORMAÇÕES DE CLIMA
const mainInfo = document.querySelector(".weather-info");
const otherInfos = document.querySelector(".other-infos");

//TEXTO DE INFORMAÇÕES ADICIONAIS
const otherInfoTxt = document.querySelectorAll(".info-txt");

//FUNÇÃO DE CARREGAMENTO
function loadingCity() {
  loading.style.display = "flex";
}

//FUNÇÃO ASSÍNCRONA PARA BUSCAR CIDADE
async function searchCity() {
  const cityName = locationSearch.value;

  messageArea.style.display = "none";
  messageArea.style.color = "#0a0a0a";

  if (locationSearch.value === "" || !isNaN(locationSearch.value)) {
    showError("DIGITE UM VALOR VÁLIDO!");
    return;
  }

  loadingCity();

  const apiKey = "4c2757e20f7ff4a2dae4fdd1c795af39";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
    cityName
  )}&appid=${apiKey}&units=metric&lang=pt_br`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    if (response.ok) {
      showInfos({
        city: json.name,
        country: json.sys.country,
        temperature: json.main.temp,
        maxTemp: json.main.temp_max,
        minTemp: json.main.temp_min,
        humidity: json.main.humidity,
        description: json.weather[0].description,
        icon: json.weather[0].icon,
        windSpeed: json.wind.speed,
      });
    } else {
      showError("CIDADE NÃO ENCONTRADA!");
      loading.style.display = "none";
      return;
    }
  } catch (error) {
    showError("ERRO AO BUSCAR CIDADE!");
    console.log(error);
    return;
  }
}

//FUNÇÃO PARA MOSTRAR INFORMAÇÕES DO CLIMA
function showInfos(json) {
  spinner.style.display = "none";
  mainInfo.style.display = "flex";
  otherInfos.style.display = "flex";

  const otherInfosArray = [
    { value: json.maxTemp, unit: "°C" },
    { value: json.minTemp, unit: "°C" },
    { value: json.humidity, unit: "%" },
    { value: json.windSpeed, unit: "km/h" },
  ];

  cityTitle.innerHTML = `<p>${json.city}, ${json.country}`;
  weatherTxt.innerHTML = `<h2>${json.temperature}°C</h2>
                            <p>${json.description}</p>`;
  weatherImg.src = `https://openweathermap.org/img/wn/${json.icon}@2x.png`;
  weatherImg.alt = `Imagem sobre clima: ${json.description}`;

  otherInfoTxt.forEach((info, i) => {
    info.innerHTML = `<p>${otherInfosArray[i].value} ${otherInfosArray[i].unit}</p>`;
  });
}

locationSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchCity();
  }
});

//FUNÇÃO PARA EXIBIR MENSAGEM DE ERRO
function showError(msg) {
  messageArea.style.display = "flex";
  messageArea.style.color = "#ff0000";
  messageArea.innerHTML = `<p>${msg}</p>`;
}
