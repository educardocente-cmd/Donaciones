// Datos base del proyecto
const total = 52;
const realizadas = 27;
const restantes = total - realizadas;

// Calculos automaticos de KPIs
const porcRealizadas = ((realizadas / total) * 100).toFixed(1);
const porcRestantes = ((restantes / total) * 100).toFixed(1);

// Actualizar valores en la interfaz
document.getElementById('porc-realizadas').textContent = porcRealizadas + '% del total';
document.getElementById('porc-restantes').textContent = porcRestantes + '% del total';
document.getElementById('avance-total').textContent = porcRealizadas + '%';