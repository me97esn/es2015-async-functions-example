function doSomethingWithPromises(){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>resolve(':)'), 100)	
	})
}
let foo = {}

function callAsyncAFewTimes(){
	let result = doSomethingWithPromises()
	console.log('result', result)
}
module.exports = foo