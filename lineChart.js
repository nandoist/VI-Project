d3.csv("datasets/LineChart.csv").then(function(csv) {
      // Historical Exchange Rates Source: https://www.ofx.com/en-gb/forex-news/historical-exchange-rates/

      var colors = d3.ez.palette.categorical(3);
      var chart = d3.ez.chart.lineChart().colors(colors).yAxisLabel("Quantity");
      var legend = d3.ez.component.legend().title("Genre");
      var title = d3.ez.component.title().mainText("").subText("");

      // Convert csv to d3-ez data format
      dateConvert = function(dateYMD) {
        parser = d3.timeParse('%Y');
        var dateISO = parser(dateYMD).toISOString();
        var dateUnix = new Date(dateISO) / 1000;
        return dateUnix;
      }
      //Movie types: Action,Adventure,Animation,Biography,Comedy,Crime,Drama,Family,Fantasy,Horror,Mystery,Romance,Sci-Fi,SUM
      var dataAction = ["Action"];
      var dataAdventure = ["Adventure"];
      var dataAnimation = ["Animation"];
      var dataBiography = ["Biography"];
      var dataComedy = ["Comedy"];
      var dataCrime = ["Crime"];
      var dataDrama = ["Drama"];
      var dataFamily = ["Family"];
      var dataFantasy = ["Fantasy"];
      var dataHorror = ["Horror"];
      var dataMystery = ["Mystery"];
      var dataRomance = ["Romance"];
      var dataSciFi = ["Sci-Fi"];
      //Movie types: Action,Adventure,Animation,Biography,Comedy,Crime,Drama,Family,Fantasy,Horror,Mystery,Romance,Sci-Fi,SUM
      d3.map(csv).values().forEach(function(d) {
        dataAction.push(d['Action']);
        dataAdventure.push(d['Adventure']);
        dataAnimation.push(d['Animation']);
        dataBiography.push(d['Biography']);
        dataComedy.push(d['Comedy']);
        dataCrime.push(d['Crime']);
        dataDrama.push(d['Drama']);
        dataFamily.push(d['Family']);
        dataFantasy.push(d['Fantasy']);
        dataHorror.push(d['Horror']);
        dataMystery.push(d['Mystery']);
        dataRomance.push(d['Romance']);
        dataSciFi.push(d['Sci-Fi']);
      });



    var chart = c3.generate({
      bindto: '#lineChart',
      data: {
          x: 'x',
  //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
          columns: [
            //['x', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
            ['x', '1986-01-01', '1987-01-01', '1988-01-01', '1989-01-01', '1990-01-01', '1991-01-01', '1992-01-01', '1993-01-01', '1994-01-01', '1995-01-01', '1996-01-01', '1997-01-01', '1998-01-01', '1999-01-01', '2000-01-01', '2001-01-01', '2002-01-01', '2003-01-01', '2004-01-01', '2005-01-01', '2006-01-01', '2007-01-01', '2008-01-01', '2009-01-01', '2010-01-01', '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', '2016-01-01'],
              dataAction,
              dataAdventure,
              dataAnimation,
              dataBiography,
              dataComedy,
              dataCrime,
              dataDrama,
              dataFamily,
              dataFantasy,
              dataHorror,
              dataMystery,
              dataRomance,
              dataSciFi
          ],
          onclick: function (datum, element) {
            console.log("ola");
          }
      },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%Y'
              }
          }
      },
      legend: {
                   item: {
                       onclick: function legend_on_click(id) {
                         var $$ = this;
                         var regions = $$.mainRegion;
                         var genre = id;
                         var bubbles = d3.selectAll("[genre="+genre+"]");
                         console.log(bubbles);
                         if ($$.d3.event.altKey) {
                           $$.api.hide();
                           $$.api.show(id);
                         }
                         else {
                           $$.api.toggle(id);
                           $$.isTargetToShow(id) ? $$.api.focus(id) : $$.api.revert();
                           if ($$.isTargetToShow(id) == true) {
                               bubbles.attr("visibility", "visible");
                           }
                           else {
                               bubbles.attr("visibility", "hidden");
                           }
                         }
                      }
                   }
      }

  });
});
