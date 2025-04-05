function showCarInfo() {
  const carName = document.getElementById('user-input').value.trim().toLowerCase();
  const carInfoSection = document.getElementById('car-info');

  if (carsData[carName]) {
    const car = carsData[carName];
    carInfoSection.style.display = "flex";

    let enginesContent = "<ul>";
    car.engines.forEach(engine => {
      enginesContent += `<li>${engine.type} - ${engine.capacity} - ${engine.power}</li>`;
    });
    enginesContent += "</ul>";

    let dimensionsContent = `<ul>
      <li>Length: ${car.dimensions.length}</li>
      <li>Width: ${car.dimensions.width}</li>
      <li>Height: ${car.dimensions.height}</li>
    </ul>`;

    let productionContent = `<ul>
      <li>First year: ${car.production_years['first']}</li>
      <li>Last year: ${car.production_years['last']}</li>
      <li>Facelift: ${car.production_years['facelift']}</li>
    </ul>`;

    let transmissionContent = "<ul>";
    car.gearbox.forEach(gear => {
      transmissionContent += `<li>${gear}</li>`;
    });
    transmissionContent += "</ul>";

    let tractionContent = "<ul>";
    car.traction.forEach(trc => {
      tractionContent += `<li>${trc}</li>`;
    });
    tractionContent += "</ul>";

    let bodyContent = `<ul><li>${car["body_type"]}</li></ul>`;
    let weightContent = `<ul><li>${car["weight"]}</li></ul>`;

    carInfoSection.innerHTML = `
      <section class="info-container">
        <span class="subtitle">Engines</span>
        ${enginesContent}
        <br>
        <span class="subtitle">Dimensions</span>
        ${dimensionsContent}
        <br>
        <span class="subtitle">Production</span>
        ${productionContent}
        <br>
        <span class="subtitle">Gearboxes</span>
        ${transmissionContent}
        <br>
        <span class="subtitle">Traction types</span>
        ${tractionContent}
        <br>
        <span class="subtitle">Body type</span>
        ${bodyContent}
        <br>
        <span class="subtitle">Weight</span>
        ${weightContent}
        <button id="close-btn">CLOSE</button>
      </section>
    `;

    document.getElementById('close-btn').addEventListener('click', function () {
      carInfoSection.style.display = "none";
      document.getElementById('user-input').value = "";
    });
  } else {
    carInfoSection.innerHTML = "<p>This car does not exist in our database.</p>";
  }
}

// Când dai click pe buton
document.getElementById('submit-btn').addEventListener('click', showCarInfo);

// Când apeși Enter în input
document.getElementById('user-input').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    showCarInfo();
  }
});
