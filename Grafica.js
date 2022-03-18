$(document).ready(inicializar); //si el documento está listo llame a inicializar

function inicializar(){
	$.jqplot('grafico', [[[-1, 1],[3, 5.12],[5, 13.1],]],
	{ 
		title:'Gráfico lineal. Conecta los puntos X,Y dados.',
		axes:{yaxis:{min:-100, max:220}},
		series:[{color:'#5FAB78'}]
	});
}