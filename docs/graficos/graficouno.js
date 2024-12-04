(function(vegaEmbed) {
    var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "layer": [{"mark": "bar", "encoding": {"color": {"field": "A\u00f1o", "scale": {"range": ["#7fc97f", "#beaed4", "#fdc086"]}, "title": "A\u00f1o", "type": "nominal"}, "tooltip": [{"field": "A\u00f1o", "title": "A\u00f1o", "type": "nominal"}, {"field": "D\u00edas de flujo", "title": "D\u00edas de Flujo", "type": "nominal"}, {"field": "Promedio Mensual CLP", "title": "Suma de Promedio Mensual ($CLP)", "type": "nominal"}], "x": {"axis": {"labelAngle": 0}, "field": "D\u00edas de flujo", "title": "D\u00edas de Flujo", "type": "nominal"}, "y": {"field": "Promedio Mensual", "title": "Suma de Promedios Mensuales ($CLP)", "type": "quantitative"}}}, {"mark": {"type": "text", "align": "center", "baseline": "bottom", "dy": 5, "fontSize": 10}, "encoding": {"text": {"field": "Promedio Mensual CLP", "type": "nominal"}, "x": {"field": "D\u00edas de flujo", "type": "nominal"}, "y": {"field": "Promedio Mensual", "type": "quantitative"}}}], "background": "rgba(0, 0, 0, 0)", "data": {"name": "data-5f502b0cf89660a8270543baeec4bf71"}, "height": 400, "title": "Suma de Promedios Mensuales (Toallas Desechables + \u00c1cido Mefen\u00e1mico) por D\u00edas de Flujo", "width": 200, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-5f502b0cf89660a8270543baeec4bf71": [{"A\u00f1o": 2021, "D\u00edas de flujo": 3, "Promedio Mensual": 3749, "Promedio Mensual CLP": "3.749"}, {"A\u00f1o": 2021, "D\u00edas de flujo": 5, "Promedio Mensual": 5887, "Promedio Mensual CLP": "5.887"}, {"A\u00f1o": 2021, "D\u00edas de flujo": 7, "Promedio Mensual": 7498, "Promedio Mensual CLP": "7.498"}, {"A\u00f1o": 2022, "D\u00edas de flujo": 3, "Promedio Mensual": 4480, "Promedio Mensual CLP": "4.480"}, {"A\u00f1o": 2022, "D\u00edas de flujo": 5, "Promedio Mensual": 7467, "Promedio Mensual CLP": "7.467"}, {"A\u00f1o": 2022, "D\u00edas de flujo": 7, "Promedio Mensual": 10454, "Promedio Mensual CLP": "10.454"}, {"A\u00f1o": 2023, "D\u00edas de flujo": 3, "Promedio Mensual": 4729, "Promedio Mensual CLP": "4.729"}, {"A\u00f1o": 2023, "D\u00edas de flujo": 5, "Promedio Mensual": 7882, "Promedio Mensual CLP": "7.882"}, {"A\u00f1o": 2023, "D\u00edas de flujo": 7, "Promedio Mensual": 11034, "Promedio Mensual CLP": "11.034"}]}};
    var embedOpt = {"mode": "vega-lite"};

    function showError(el, error){
        el.innerHTML = ('<div class="error" style="color:red;">'
                        + '<p>JavaScript Error: ' + error.message + '</p>'
                        + "<p>This usually means there's a typo in your chart specification. "
                        + "See the javascript console for the full traceback.</p>"
                        + '</div>');
        throw error;
    }
    const el = document.getElementById('graficouno');
    vegaEmbed("#graficouno", spec, embedOpt)
      .catch(error => showError(el, error));
  })(vegaEmbed);