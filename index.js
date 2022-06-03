import { getDatabase, ref, query, limitToLast, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

const db = getDatabase()

const led1Calidad = document.querySelector('.led1Calidad') 
const led2Calidad = document.querySelector('.led2Calidad') 
const costoCalidad = document.querySelector('.costoCalidad')

const led1Ensamblaje = document.querySelector('.led1Ensamblaje') 
const led2Ensamblaje = document.querySelector('.led2Ensamblaje') 
const costoEnsamblaje = document.querySelector('.costoEnsamblaje')

const led1Alimentacion= document.querySelector('.led1Alimentacion') 
const led2Alimentacion = document.querySelector('.led2Alimentacion') 
const costoAlimentacion= document.querySelector('.costoAlimentacion')

const led1Procesos = document.querySelector('.led1Procesos') 
const led2Procesos = document.querySelector('.led2Procesos') 
const costoProcesos = document.querySelector('.costoProcesos')

const led1Mecanizado = document.querySelector('.led1Mecanizado') 
const led2Mecanizado = document.querySelector('.led2Mecanizado') 
const costoMecanizado = document.querySelector('.costoMecanizado')



const getQualityData = () => {
	const lastestData = query(ref(db, 'estacionCalidad'), limitToLast(1))
	onValue(lastestData, (snapshot) => {
		if (snapshot.val()) {
			let key = Object.keys(snapshot.val())
			let cost = snapshot.val()[key].time * 100
			costoCalidad.innerHTML = `$${cost.toFixed(1)} COP`
			if ( snapshot.val()[key].disp == 1 ) {
				led2Calidad.style.display = 'none'
				led1Calidad.style.display = 'inline-block'
			} else {
				led2Calidad.style.display = 'inline-block'
				led1Calidad.style.display = 'none'
			}
		}
	}) 
}

const getEnsamblajeData = () => {
	const lastestData = query(ref(db, 'estacionEnsamble'), limitToLast(1))
	onValue(lastestData, (snapshot) => {
		if (snapshot.val()) {
			let key = Object.keys(snapshot.val())
			let cost = snapshot.val()[key].time * 100
			costoEnsamblaje.innerHTML = `$${cost.toFixed(1)} COP`
			if ( snapshot.val()[key].disp == 1 ) {
				led2Ensamblaje.style.display = 'none'
				led1Ensamblaje.style.display = 'inline-block'
			} else {
				led2Ensamblaje.style.display = 'inline-block'
				led1Ensamblaje.style.display = 'none'
			}
		}
	}) 
}

const getAlimentacionData = () => {
	const lastestData = query(ref(db, 'estacionAlimentacion'), limitToLast(1))
	onValue(lastestData, (snapshot) => {
		if (snapshot.val()) {
			let key = Object.keys(snapshot.val())
			let cost = snapshot.val()[key].time * 100
			costoAlimentacion.innerHTML = `$${cost.toFixed(1)} COP`
			if ( snapshot.val()[key].disp == 1 ) {
				led2Alimentacion.style.display = 'none'
				led1Alimentacion.style.display = 'inline-block'
			} else {
				led2Alimentacion.style.display = 'inline-block'
				led1Alimentacion.style.display = 'none'
			}
		}
	}) 
}

const getProcesosData = () => {
	const lastestData = query(ref(db, 'estacionProcesos'), limitToLast(1))
	onValue(lastestData, (snapshot) => {
		if (snapshot.val()) {
			let key = Object.keys(snapshot.val())
			let cost = snapshot.val()[key].time * 100
			costoProcesos.innerHTML = `$${cost.toFixed(1)} COP`
			if ( snapshot.val()[key].disp == 1 ) {
				led2Procesos.style.display = 'none'
				led1Procesos.style.display = 'inline-block'
			} else {
				led2Procesos.style.display = 'inline-block'
				led1Procesos.style.display = 'none'
			}
		}
	}) 
}

const getMecanizadoData = () => {
	const lastestData = query(ref(db, 'estacionMecanizado'), limitToLast(1))
	onValue(lastestData, (snapshot) => {
		if (snapshot.val()) {
			let key = Object.keys(snapshot.val())
			let cost = snapshot.val()[key].time * 100
			costoMecanizado.innerHTML = `$${cost.toFixed(1)} COP`
			if ( snapshot.val()[key].disp == 1 ) {
				led2Mecanizado.style.display = 'none'
				led1Mecanizado.style.display = 'inline-block'
			} else {
				led2Mecanizado.style.display = 'inline-block'
				led1Mecanizado.style.display = 'none'
			}
		}
	}) 
}

getMecanizadoData()
getEnsamblajeData()
getQualityData()
getAlimentacionData()
getProcesosData()
