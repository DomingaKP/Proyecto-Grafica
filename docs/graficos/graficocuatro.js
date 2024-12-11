(function(vegaEmbed) {
    var spec = {"config": {"view": {"continuousWidth": 400, "continuousHeight": 300}}, "data": {"name": "data-82ab3e1e86e6566ef50f0999dabbdd2b"}, "mark": "bar", "background": "transparent", "encoding": {"color": {"field": "subsistema", "legend": null, "scale": {"domain": ["Subsistema Abierto", "Subsistema Cerrado", "Subsistema Postpenitenciario"], "range": ["#8e44ad", "#9b59b6", "#c39bd3"]}, "type": "nominal"}, "tooltip": [{"field": "subsistema", "title": "Subsistema", "type": "nominal"}, {"field": "atendidos", "format": ",.0f", "title": "Atendidas", "type": "quantitative"}], "x": {"axis": {"format": ",.0f"}, "field": "atendidos", "title": "Total Atendidas", "type": "quantitative"}, "y": {"field": "subsistema", "sort": "-x", "title": "Subsistema", "type": "nominal"}}, "height": 400, "title": "Total de Mujeres Atendidas por Subsistema (Datos hasta octubre de 2024)", "width": 600, "$schema": "https://vega.github.io/schema/vega-lite/v4.17.0.json", "datasets": {"data-82ab3e1e86e6566ef50f0999dabbdd2b": [{"subsistema": "Subsistema Abierto", "atendidos": 9294}, {"subsistema": "Subsistema Cerrado", "atendidos": 5136}, {"subsistema": "Subsistema Postpenitenciario", "atendidos": 2473}]}};
    var embedOpt = {"mode": "vega-lite"};

    function showError(el, error){
        el.innerHTML = ('<div class="error" style="color:red;">'
                        + '<p>JavaScript Error: ' + error.message + '</p>'
                        + "<p>This usually means there's a typo in your chart specification. "
                        + "See the javascript console for the full traceback.</p>"
                        + '</div>');
        throw error;
    }
    const el = document.getElementById('graficocuatro');
    vegaEmbed("#graficocuatro", spec, embedOpt)
      .catch(error => showError(el, error));
  })(vegaEmbed);