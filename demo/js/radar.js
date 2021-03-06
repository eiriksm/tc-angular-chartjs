angular.module( 'app.radar', [] )
  .controller( 'RadarCtrl', function ( $scope ) {
    $scope.data = {
      labels : [ 'Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Partying', 'Running' ],
      datasets : [
        {
          fillColor : 'rgba(220,220,220,0.5)',
          strokeColor : 'rgba(220,220,220,1)',
          pointColor : 'rgba(220,220,220,1)',
          pointStrokeColor : '#fff',
          data : [ 65, 59, 90, 81, 56, 55, 40]
        },
        {
          fillColor : 'rgba(151,187,205,0.5)',
          strokeColor : 'rgba(151,187,205,1)',
          pointColor : 'rgba(151,187,205,1)',
          pointStrokeColor : '#fff',
          data : [ 28, 48, 40, 19, 96, 27, 100 ]
        }
      ]
    };
    $scope.options =  {
      segmentShowStroke : true,
      segmentStrokeColor : '#fff',
      segmentStrokeWidth : 24,
      percentageInnerCutout : 50,
      animation : true,
      animationSteps : 100,
      animationEasing : 'easeOutBounce',
      animateRotate : true,
      animateScale : false,
      onAnimationComplete : null
    };
  });