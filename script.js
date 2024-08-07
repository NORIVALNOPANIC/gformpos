// Funzione per precompilare i campi del modulo
function prefillGoogleForm(businessId, locationId, userName, locationName) {
  var formFrame = document.getElementById('googleForm');
  var formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScj4rtdUHA24IaYMc2IVkv0e2AHdhyzV0G3hxE6yU9vBdDX6A/viewform?embedded=true&' +
                'entry.1605097273=' + encodeURIComponent(businessId) + '&' +
                'entry.518398102=' + encodeURIComponent(locationId) + '&' +
                'entry.171201712=' + encodeURIComponent(userName) + '&' +
                'entry.1069044044=' + encodeURIComponent(locationName);
  formFrame.src = formUrl;
}

// Esempio di variabili da Lightspeed (da sostituire con le variabili reali)
var businessId = '12345'; // Sostituisci con {businessId}
var locationId = '67890'; // Sostituisci con {locationId}
var userName = 'John Doe'; // Sostituisci con {userName}
var locationName = 'Sample Location'; // Sostituisci con {locationName}

// Precompila il modulo
prefillGoogleForm(businessId, locationId, userName, locationName);
