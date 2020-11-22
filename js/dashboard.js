(function($) {
  'use strict';
  $(function() {

    if ($('.circle').length) {
      $('.circle').circleProgress({
        size: 84,
        thickness: 8,
        startAngle: -Math.PI / 4 * 3,
        lineCap: 'round',
      });
    }

    if ($("#pieChart").length) {
      const datasets = $('#pieChart').data('sets');
      const datasetsArray = datasets.split(',');

      var doughnutPieData = {
        datasets: [{
          data: datasetsArray,
          backgroundColor: [
            '#4880FF',
            '#FF5660',
            '#FFC400',
            '#B3C3FF',
            '#24CCB8',
          ]
        }],
      };

      var doughnutPieOptions = {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips: {
          enabled: false
        },
        elements: {
          arc: {
            borderWidth: 0
          }
        }
      };

      var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
      var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: doughnutPieData,
        options: doughnutPieOptions
      });
    }

  });
})(jQuery);