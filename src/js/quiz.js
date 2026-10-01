function calcularResultado() {
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);

    const total = q1 + q2 + q3;

    const box = document.getElementById('resultadoBox');
    const title = document.getElementById('resTitle');
    const desc = document.getElementById('resDesc');

    let resultado = '';
    box.classList.remove('hidden');

    if (total >= 8) {
        resultado = 'Excelente Nivel de Autocuidado';
        title.innerHTML = '<i class="fa-solid fa-circle-check text-green-600 mr-2"></i> ¡Excelente Nivel de Autocuidado!';
        desc.innerHTML = 'Usted mantiene un equilibrio muy saludable entre su labor en VATCO Group y su bienestar emocional. Continúe practicando la escucha activa y sirva de inspiración empática para sus compañeros de equipo.';
    } else if (total >= 5) {
        resultado = 'Nivel Moderado: Oportunidad de Mejora';
        title.innerHTML = '<i class="fa-solid fa-triangle-exclamation text-yellow-600 mr-2"></i> Nivel Moderado: Oportunidad de Mejora';
        desc.innerHTML = 'Presenta algunos niveles de sobrecarga o autocrítica. Le recomendamos realizar el <strong>Test de Autocompasión de Kristin Neff</strong> escaneando el código QR superior y aplicar pausas activas durante su jornada laboral.';
    } else {
        resultado = 'Alerta de Carga Emocional Elevada';
        title.innerHTML = '<i class="fa-solid fa-triangle-exclamation text-red-600 mr-2"></i> Alerta de Carga Emocional Elevada';
        desc.innerHTML = 'Sus respuestas sugieren un alto desgaste o dificultad para gestionar el estrés. Le invitamos a acercarse a los canales de bienestar de Colsubsidio/Colsanitas y conversar con su líder o equipo de SST en VATCO Group. ¡Su bienestar es nuestra prioridad!';
    }

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwec9l4pBIOTiJR5IJs2hT6BP_pM7GFAfMI_Qnm6FlFfVzlkM6WsU4LBknRZ_93AN6o/exec';

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({
            q1: q1,
            q2: q2,
            q3: q3,
            total: total,
            resultado: resultado
        })
    })
    .then(() => { console.log('Respuesta enviada a Google Sheets.'); })
    .catch((error) => { console.error('Error al enviar la respuesta:', error); });

    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}