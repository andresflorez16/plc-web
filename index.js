import { getDatabase, ref, query, limitToLast, onValue } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";

const db = getDatabase()

const led1Calidad = document.querySelector('.led1Calidad') 
const led2Calidad = document.querySelector('.led2Calidad') 
const costoCalidad = document.querySelector('.costoCalidad')

const getQualityData = () => {
	const lastestData = query(ref(db, 'estacionCalidad'), limitToLast(1))
	onValue(lastestData, (snapshot) => {
		if (snapshot.val()) {
			let key = Object.keys(snapshot.val())
			costoCalidad.innerHTML = snapshot.val()[key].value
		}
	}) 
}

getQualityData()
