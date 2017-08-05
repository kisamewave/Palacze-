	window.onload = function () {
		var chart = new CanvasJS.Chart("chartSlupkowy",
		{
			theme: "theme3",
                        animationEnabled: true,
			title:{
				text: "Regularne palenie a wiek",
				fontSize: 30
			},
			toolTip: {
				shared: true
			},
			axisY: {
				title: "Dane w %"
			},

			data: [
			{
				type: "column",
				name: "Mężczyźni",
				legendText: "Mężczyźni",
				showInLegend: true,
				dataPoints:[
				{label: "15-19", y: 14},
				{label: "20-29", y: 36},
				{label: "30-39", y: 39},
				{label: "40-49", y: 32},
				{label: "50-59", y: 29},
				{label: "60+", y: 30},


				]
			},
			{
				type: "column",
				name: "Kobiety",
				legendText: "Kobiety",
				axisYType: "secondary",
				showInLegend: true,
				dataPoints:[
				{label: "15-19", y: 10},
				{label: "20-29", y: 19},
				{label: "30-39", y: 31},
				{label: "40-49", y: 24},
				{label: "50-59", y: 29},
				{label: "60+", y: 16},



				]
			}

			],
          legend:{
            cursor:"pointer",
            itemclick: function(e){
              if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              	e.dataSeries.visible = false;
              }
              else {
                e.dataSeries.visible = true;
              }
            	chart.render();
            }
          },
        });

chart.render();


var chart2 = new CanvasJS.Chart("chartContainer",
{
	title:{
		text: "Popularność palenia ze względu na wykształcenie "
	},
			animationEnabled: true,
	legend:{
		verticalAlign: "center",
		horizontalAlign: "left",
		fontSize: 20,
		fontFamily: "Helvetica"
	},

	theme: "theme2",
	data: [
	{
		type: "pie",
		indexLabelFontFamily: "Garamond",
		indexLabelFontSize: 20,
		indexLabel: "{label} {y}%",
		startAngle:-20,
		showInLegend: true,
		toolTipContent:"{legendText} {y}%",
		dataPoints: [
			{  y: 35, legendText:"podstawowe", label: "podstawowe" },
			{  y: 36, legendText:"zawodowe", label: "zawodowe" },
			{  y: 20, legendText:"wyższe", label: "wyższe" },
			{  y: 9, legendText:"inni" , label: "inni"},

		]
	}
	]
});
chart2.render();
    var chart3 = new CanvasJS.Chart("chartSlupkowy2",
    {
      title:{
        text: " Regularne palenie a sytuacja materialna "    
      },  axisY2: {
        title:"Dane w %"
      },
      
      animationEnabled: true,
      axisY: {
        title: "Legenda"
      },
      axisX :{
        labelFontSize: 12
      },
      legend: {
        verticalAlign: "center"
      },
      data: [

      {        
        type: "bar",
		axisYType: "secondary",		
        showInLegend: true, 
        legendText: "Mężczyźni",
        dataPoints: [      
         { x: 10, y:25, label: "dobra" },
        { x: 20, y:30, label: "średnia"},
        { x: 30, y:41 , label: "zła"},
        { x: 40, y:55 , label: "bezrobotni"},


        ]
      },
      {        
        type: "bar",  
        
        showInLegend: true,
        legendText: "Kobiety",
        dataPoints: [      
        { x: 10, y:17, label: "dobra" },
        { x: 20, y:24, label: "średnia"},
        { x: 30, y:25 , label: "zła"},
        { x: 40, y:43 , label: "bezrobotni"},
      


        ]
      }

      ],
      legend: {
        cursor:"pointer",
        itemclick : function(e){
          if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          }
          else{
            e.dataSeries.visible = true;
          }
          chart.render();
        }
      }
    });

chart3.render();
}
