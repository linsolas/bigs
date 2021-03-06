var d = document;
var wasACRSelected = 0;

function Timeout(fn, interval) {
    var id = setTimeout(fn, interval);
    this.cleared = false;
    this.clear = function () {
        this.cleared = true;
        clearTimeout(id);
    };
}
var buttonElem1, buttonElem2, buttonElem3, buttonElem4;

function changingMenuState(whichSteAreWe) {

	if (whichSteAreWe == "1") {
		d.getElementById('navStepMenu').className = "state1";
	} else if (whichSteAreWe == "2") {
		d.getElementById('navStepMenu').className = "state2";
	} else if (whichSteAreWe == "3") {
		d.getElementById('navStepMenu').className = "state3";
	} else if (whichSteAreWe == "4") {
		d.getElementById('navStepMenu').className = "state4";
	}
}


//	Dashboard Menu navigation animations
var DashButtonElem1, DashButtonElem2, DashButtonElem3;
function changingDashMenuState(whichSteAreWe) {
	if (whichSteAreWe == "1") {
		DashButtonElem1.className = "blue";
		DashButtonElem2.className = "dark";
		DashButtonElem3.className = "dark";
	} else if (whichSteAreWe == "2") {
		DashButtonElem1.className = "dark";
		DashButtonElem2.className = "blue";
		DashButtonElem3.className = "dark";
	} else if (whichSteAreWe == "3") {
		DashButtonElem1.className = "dark";
		DashButtonElem2.className = "dark";
		DashButtonElem3.className = "blue";
	} else if (whichSteAreWe == "4") {
		DashButtonElem1.className = "dark";
		DashButtonElem2.className = "dark";
		DashButtonElem3.className = "dark";
	}
}


function onMyTransitionEnd(previouslyAnimatedElem,previousSelectorKind,previousWhichOne,nextAnimatedElem,selectorKind,whichOne,newClass,newStyle,styleValue) {

	var previous, transition;

	if(previousSelectorKind == "getElementsByClassName") {
		previous = d.getElementsByClassName(previouslyAnimatedElem);
	} else if(previousSelectorKind == "getElementsByTagName") {
		previous = d.getElementsByTagName(previouslyAnimatedElem);
	} else if(previousSelectorKind == "getElementById") {
			previous = d.getElementById(previouslyAnimatedElem);
	}

	if('ontransitionend' in window) {
	  transition = 'transitionend';
	} else if('onwebkittransitionend' in window) {
	  transition = 'webkitTransitionEnd';
	} else if('onotransitionend' in previous || navigator.appName == 'Opera') {
	  transition = 'oTransitionEnd';
	} else {
	  transition = false;
	}

	previous.addEventListener(transition, function(){
		
		if(selectorKind == "getElementsByClassName") {
			
			next = d.getElementsByClassName(nextAnimatedElem);
			
			if(whichOne == "all") {

				for (var i = 0; i < next.length; i++) {		
					if(newStyle) {
						next[i].style.newStyle = styleValue;
					} else {
						next[i].className = newClass;
					}
				}
			} else {
				if(newStyle) {
					next[whichOne].style.newStyle = styleValue;
				} else {
					next[whichOne].className = newClass;
				}
			}
		} else if(selectorKind == "getElementsByTagName") {
			next = d.getElementsByTagName(nextAnimatedElem);
			
			if(whichOne == "all") {
				for (var i = 0; i < next.length; i++) {
					if(newStyle) {
						next[i].style.newStyle = styleValue;
					} else {
						next[i].className = newClass;
					}
				}
			} else {
				if(newStyle) {
					next[whichOne].style.newStyle = styleValue;
				} else {
					next[whichOne].className = newClass;
				}
			}
		} else if(selectorKind == "getElementById") {
				next = d.getElementById(nextAnimatedElem);

				if(newStyle) {
					next.style.newStyle = styleValue;
				} else {
					next.className = newClass;
				}
		}
	}, false);
}

function fakingFalseParallax() {

	d.getElementById('delayingArrival').className = 'displayArrival';
}

function splashscreen() {
	
	d.getElementById('site').style.opacity = "1";

	window.setTimeout(function(){d.getElementsByTagName('header')[0].style.opacity = "1";d.getElementById('searchDocsForm').style.opacity = "1"},1000);
	d.getElementById('splash').style.visibility = "hidden";
	d.getElementById('content').className = "siteShown";
	d.getElementById('requests').className = "siteShown";


	var t = new Timeout(function () {
    	
		fakingFalseParallax();
		
	}, 1300);
	//t.clear();

}

function settingUpNav() {

	if(document.getElementById('dash1')) {
			//	Dashboard Menu navigation animation
			DashButtonElem1 = document.getElementById('dash1');
			DashButtonElem2 = document.getElementById('dash2');
			DashButtonElem3 = document.getElementById('dash3');
			DashButtonElem1.setAttribute('onclick', "changingDashMenuState('1');runningDashAjaxCall('verify-dashboard.html');"); // startingChart
			DashButtonElem2.setAttribute('onclick', "changingDashMenuState('2');runningDashAjaxCall('verify-documents.html');");
			DashButtonElem3.setAttribute('onclick', "changingDashMenuState('3');runningDashAjaxCall('verify-summury.html');");
	}

	if (document.getElementsByClassName('request')) {

		var request = document.getElementsByClassName('request');

		for(var i=0; i < request.length; i++) {
			request[i].setAttribute('onclick', "dashContent('content','content','verify-dashboard.html');")
		}
	}
}



//	Top Menu navigation animations

/*buttonElem1 = d.getElementById('stepOne');
buttonElem2 = d.getElementById('stepTwo');
buttonElem3 = d.getElementById('stepThree');
buttonElem4 = d.getElementById('stepFour');

stepNumber1 = d.getElementById('stepNumber1');
stepNumber2 = d.getElementById('stepNumber2');
stepNumber3 = d.getElementById('stepNumber3');
stepNumber4 = d.getElementById('stepNumber4');

step12 = d.getElementById('step12');
step23 = d.getElementById('step23');
step34 = d.getElementById('step34');
buttonElem1.setAttribute('onclick',"didYouSelectYourCr('1', 'index.html', hidingMenu, 'One');");
buttonElem2.setAttribute('onclick',"didYouSelectYourCr('2', 'verify-dashboard.html', creditRequestSelected, 'Two');");
buttonElem3.setAttribute('onclick',"didYouSelectYourCr('3' , 'action.html', '', 'Three');");
buttonElem4.setAttribute('onclick',"didYouSelectYourCr('4', 'submit.html', hidingMenu, 'Four');");*/

	buttonElem1 = d.getElementById('stepOne');
	buttonElem2 = d.getElementById('stepTwo');
	buttonElem3 = d.getElementById('stepThree');
	buttonElem4 = d.getElementById('stepFour');
	buttonElem1.setAttribute('onclick',"didYouSelectYourCr('1', 'index.html', hidingMenu, 'One');");
	buttonElem2.setAttribute('onclick',"didYouSelectYourCr('2', 'verify-dashboard.html', creditRequestSelected, 'Two');");
	buttonElem3.setAttribute('onclick',"didYouSelectYourCr('3' , 'action.html', '', 'Three');");
	buttonElem4.setAttribute('onclick',"didYouSelectYourCr('4', 'submit.html', '', 'Four');");	



function didYouSelectYourCr(newState,url,initCallback,amIGoing) {
	changingMenuState(newState);
}


function didYouSelectYourCr(newState,url,initCallback,amIGoing) {
	if(wasACRSelected != 0) {
		if(initCallback) {
			if(url == "index.html") {
				wasACRSelected = 0;

				if(d.getElementById('displayAsThumbnails')) {
					d.getElementById('displayAsThumbnails').style.opacity = 1;	
				}
				if(d.getElementById('thumbNails')) {
					d.getElementById('thumbNails').style.opacity = 1;	
				}
				if(d.getElementById('listNails')) {
					d.getElementById('listNails').style.opacity = 1;	
				}
				
			} else {

				if(d.getElementById('displayAsThumbnails')) {				
					d.getElementById('displayAsThumbnails').style.opacity = 0;
				}
				if(d.getElementById('thumbNails')) {
					d.getElementById('thumbNails').style.opacity = 1;
				}
				if(d.getElementById('listNails')) {				
					d.getElementById('listNails').style.opacity = 1;	
				}
			}

			var menuItemElem = "step" + amIGoing;

			if (d.getElementById(menuItemElem).className == "setToBlue") {
				if(amIGoing == "One") {
					if (buttonElem2.className == "setToBlue")
					
						runningAjaxCall(url,initCallback);

						backToInitState();
				} else if (amIGoing == "Two") {
					if (buttonElem3.className == "setToBlue")

						runningAjaxCall(url,initCallback);
						backToInitState();
				} else if (amIGoing == "Three") {

					if (buttonElem4.className == "setToBlue")
						runningAjaxCall(url,initCallback);
						backToInitState();
				} else {		

						runningAjaxCall(url,initCallback);
						backToInitState();
				}
			} else {
				runningAjaxCall(url,initCallback);				
				backToInitState();
			}

		} else {
			if(url == "index.html") {
				wasACRSelected = 0;
				d.getElementById('displayAsThumbnails').style.opacity = 1;

				d.getElementById('thumbNails').style.opacity = 1;
				d.getElementById('listNails').style.opacity = 1;				
				d.getElementsByClassName('swipePrevious')[0].style.opacity = 0;
				d.getElementsByClassName('swipeNext')[0].style.opacity = 0;				
			}

			var menuItemElem = "step" + amIGoing;

			if (d.getElementById(menuItemElem).className != "setToBlue") {
				runningAjaxCall(url);
				backToInitState();

			}					
		}

		changingMenuState(newState);

	} else {
		var currentElems = d.getElementById('navStepMenu');
		var aInCurrent = currentElems.getElementsByTagName('a');

		
	}	
}


function swapClasses(elem,newClass){
	d.getElementById(elem).className = newClass;
}

function disapear(elem) {
	d.getElementById(elem).style.opacity = "0";

	//window.setTimeout('function(){d.getElementById('+elem+').style.opacity = "1";}', 750);

	var t = new Timeout(function () {
    	d.getElementById('+elem+').style.opacity = "1";
	}, 750);

}



function createLoaderOnTheFly(daddy) {

 var newDiv = document.createElement("div");
  newDiv.innerHTML = "<h1></h1>";
	
	newDiv.setAttribute('id', 'loader');
	newDiv.innerHTML = " ";

	daddy.appendChild(newDiv);
}



function dashContent(currentSecOrigine,currentSecDest,currentURL) {
	var href= currentURL;
	// getting the desired element for working with it later
		currentSecOrigine = d.getElementById('loader').parentNode;
		
		var $wrap = $('#'+currentSecOrigine.id+'');	


	$wrap
	    // removing old data
	    .html('')

	    // slide it up
	    .slideUp()

	  //      $wrap.slideDown();
	        settingUpNav();
	     //   createLoaderOnTheFly(currentSecOrigine);


};

function queryingStuffForAcceptance() {
    $( "#slider-vertical" ).slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 100,
      value: 50,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value );
      }
    });
    $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
}

function swapClasses(elem,newClass){
	d.getElementById(elem).className = newClass;
}

function erasingFormerContentSection() {
	var contentSec = d.getElementById('content');

	contentSec.parentNode.removeChild(contentSec);

	getContentOverAjax("content","content","verify-dashboard.html");

	swapClasses("navStepMenu","dashboard");
//	settingUpNav();
}


function swappingContentWithLoadingScreen() {
	d.getElementById('loader').style.opacity = "1";
	d.getElementById('content').style.opacity = "none";

	//window.setTimeout(erasingFormerContentSection, 500);

	var t = new Timeout(function () {
    	erasingFormerContentSection();
	}, 500);
}


function swappingContent() {
	d.getElementById('requests').style.webkitTransform = "scale(0.75,0.75)";
	d.getElementById('mySwipe').style.top = "15px";

	d.getElementsByClassName('swipePrevious')[0].style.top = "200px";
	d.getElementsByClassName('swipeNext')[0].style.top = "200px";

	//window.setTimeout(swappingContentWithLoadingScreen, 1500);

	var t = new Timeout(function () {
    	swappingContentWithLoadingScreen();
	}, 1500);
}

function startingCharts() {
	if(document.getElementById("chartDoughnutRW")) {
(function(){

	  var //ctxOR = document.getElementById("chartDoughnutOR").getContext("2d"),
	        ctxRW = document.getElementById("chartDoughnutRW").getContext("2d"),
	        //ctxValue = document.getElementById("lineChartValue").getContext("2d"),
	        dataOR =  [
	          {
	            value: 360,
	            color:"#ccc"
	          },
	          {
	            value : 180,
	            color : "#ccc"
	          }
	      ],
	      dataRW = [
	          {
	            value: 162,
	            color: '#000'
	          },
	          {
	            value : 198,
	            color : "#dbdbdb"
	          }
	      ],

	      dataValue =  {
	          labels : ["OCT 2013", "NOV 2013", "DEC 2013", "JAN 2014", "FEV 2014", "MAR 2014"],
	                  datasets : [
	                    {
	                      fillColor : "#e85038",
	                      // pointColor : "rgba(220,220,220,1)",
	                      // pointStrokeColor : "#fff",
	                      data : [65,59,90,81,56,40]
	                    },
	                    {
	                          // fillColor : "rgba(138, 148, 225, 0.61)",
	                          fillColor : "rgba(127, 138, 224, 0.8)",
	                          pointColor : "#049bda",
	                          pointStrokeColor : "#fff",
	                          data : [59,90,65,56,81,70]
	                    },
	          ]
	      },

	      optionsDoughnut = {
	        //Boolean - Whether we should show a stroke on each segment
	          segmentShowStroke : false,

	          //String - The colour of each segment stroke
	          // segmentStrokeColor : "#fff",

	          //Number - The width of each segment stroke
	          // segmentStrokeWidth : 2,

	          //The percentage of the chart that we cut out of the middle.
	          percentageInnerCutout : 70,

	          //Boolean - Whether we should animate the chart
	          animation : true,

	          //Number - Amount of animation steps
	          animationSteps : 150,

	          //String - Animation easing effect
	          animationEasing : "easeOutBounce",

	          //Boolean - Whether we animate the rotation of the Doughnut
	          animateRotate : true,

	          //Boolean - Whether we animate scaling the Doughnut from the centre
	          animateScale : true,

	          //Function - Will fire on animation completion.
	          onAnimationComplete : null
	      },

	      optionsLineChart = {
	        //Boolean - If we show the scale above the chart data
	          scaleOverlay : true,

	          //Boolean - If we want to override with a hard coded scale
	          scaleOverride : false,

	          //** Required if scaleOverride is true **
	          //Number - The number of steps in a hard coded scale
	          scaleSteps : null,
	          //Number - The value jump in the hard coded scale
	          scaleStepWidth : null,
	          //Number - The scale starting value
	          scaleStartValue : null,

	          //String - Colour of the scale line
	          scaleLineColor : "rgba(0,0,0,.1)",

	          //Number - Pixel width of the scale line
	          scaleLineWidth : 0,

	          //Boolean - Whether to show labels on the scale
	          scaleShowLabels : false,

	          //Interpolated JS string - can access value
	          scaleLabel : "<%=value%>",

	          //String - Scale label font declaration for the scale label
	          scaleFontFamily : "'Helvetica Neue'",

	          //Number - Scale label font size in pixels
	          scaleFontSize : 10,

	          //String - Scale label font weight style
	          scaleFontStyle : "normal",

	          //String - Scale label font colour
	          scaleFontColor : "#666",

	          //Boolean - Whether grid lines are shown across the chart
	          scaleShowGridLines : false,

	          //String - Colour of the grid lines
	          scaleGridLineColor : "rgba(0,0,0,.05)",

	          //Number - Width of the grid lines
	          scaleGridLineWidth : 1,

	          //Boolean - Whether the line is curved between points
	          bezierCurve : true,

	          //Boolean - Whether to show a dot for each point
	          pointDot : true,

	          //Number - Radius of each point dot in pixels
	          pointDotRadius : 3,

	          //Number - Pixel width of point dot stroke
	          pointDotStrokeWidth : 1,

	          //Boolean - Whether to show a stroke for datasets
	          datasetStroke : true,

	          //Number - Pixel width of dataset stroke
	          datasetStrokeWidth : 2,

	          //Boolean - Whether to fill the dataset with a colour
	          datasetFill : true,

	          //Boolean - Whether to animate the chart
	          animation : true,

	          //Number - Number of animation steps
	          animationSteps : 200,

	          //String - Animation easing effect
	          animationEasing : "easeOutQuart",

	          //Function - Fires when the animation is complete
	          onAnimationComplete : null
	      };



	  var //chartDoughnutOR = new Chart(ctxOR).Doughnut(dataOR, optionsDoughnut),
	        chartDoughnutRW = new Chart(ctxRW).Doughnut(dataRW, optionsDoughnut);
	        //lineChartValue = new Chart(ctxValue).Line(dataValue, optionsLineChart);

	})();
	}
}

function chacingColorOfSlider() {

	if (d.getElementById('rangeSlider').value < 50) {
		d.getElementById('rangeLine').className = "green";

		d.getElementById('accept').className = "rangeValidated";

	} else if ( (d.getElementById('rangeSlider').value > 50) && (d.getElementById('rangeSlider').value < 70) ) {
		d.getElementById('rangeLine').className = "neutral";

		d.getElementById('accept').className = "range";

	} else if (d.getElementById('rangeSlider').value > 70) {
		d.getElementById('rangeLine').className = "red";

		d.getElementById('accept').className = "rangeCanceled";

	}				  		
}

function hackingIOS7() {
	if(d.getElementById('rangeSlider')) {
		if((navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 6_\d/i)) || (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 5_\d/i)) || (navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 5_\d/i))) {
		//	d.getElementById('rangeSlider').style.marginLeft = "-85px";
		} 
		d.getElementById('rangeSlider').addEventListener( 'touchend', touchEnd, false);
		addingClickBehaviour();

	}
}

//custom function handler for event                  
function touchEnd(event){
     event.preventDefault();
  	chacingColorOfSlider();
};

document.ontouchstart = function(e) {
//    stickingThings();
};

document.ontouchmove = function(e) {
//    stickingThings();
};

document.ontouchend = function(e) {

	if ( (d.getElementById('rangeSlider').value > 50) && (d.getElementById('rangeSlider').value < 70) ) {
		d.getElementById('rangeLine').className = "neutral";
		d.getElementById('accept').className = "range";
		d.getElementById('rangeSlider').value = 51;

	} else if ( (d.getElementById('rangeSlider').value < 50) &&  (d.getElementById('rangeSlider').value > 25) ) {
		d.getElementById('rangeLine').className = "orange";
		d.getElementById('accept').className = "rangeOrange";
		d.getElementById('rangeSlider').value = 26;

	} else if (d.getElementById('rangeSlider').value < 25) {
		d.getElementById('rangeLine').className = "green";
		d.getElementById('accept').className = "rangeValidated";
		d.getElementById('rangeSlider').value = 0;

	} else if (d.getElementById('rangeSlider').value > 70) {
		d.getElementById('rangeLine').className = "red";
		d.getElementById('accept').className = "rangeCanceled";
		d.getElementById('rangeSlider').value = 100;
	}
};

window.setInterval("hackingIOS7()", 5);


function creditRequestSelected(jsonAccountID) {


	d.getElementById('displayAsThumbnails').style.opacity = 0;
	d.getElementById('displayAsList').style.opacity = 0;
	if(	d.getElementById('thumbNails')) {
		d.getElementById('thumbNails').style.opacity = 0;	
	}
	if(	d.getElementById('thumbNails')) {	
		d.getElementById('listNails').style.opacity = 0;	
	}
	if(d.getElementById('documentsSearchTools')){
		d.getElementById('documentsSearchTools').style.display = "none";	
	}
	

	wasACRSelected++;
	changingMenuState('2');
	backToInitState();
	if(d.getElementById('requests')) {
		d.getElementById('requests').className = "scaleSmall";
		d.getElementsByClassName('swipePrevious')[0].style.opacity = 0;
		d.getElementsByClassName('swipeNext')[0].style.opacity = 0;
	};
	var newTarget;
	if(jsonAccountID) {
		newTarget = jsonAccountID;
	} else {
		newTarget = currentCRSelected;
	}
	 	
	var t = new Timeout(function () {
    	runningAjaxCall('verify-dashboard.html');
	}, 1000);
	
	var t = new Timeout(function () {
    	readingSpecificJson("proxy-list-fake.php?requestCode=" + newTarget, startingCharts);
	}, 2500);

	settingUpNav();	
}

function runningAjaxCall(currentURL,callback) {

	removingDocViewer();

	d.getElementById('UXLoader').style.display = "none";
	if(d.getElementById('documentsSearchTools')) {
		d.getElementById('documentsSearchTools').style.display = "none";	
	}
	
	d.getElementById('dashMainContentDumentsSection').style.display = "none";

	var container = d.getElementById('content');
	container.className = "contentToBeRemoved";
	var currentSections = container.getElementsByTagName('section');

	if(d.getElementById('dashMainContentSection')) {
		d.getElementById('dashMainContentSection').style.opacity = 0;
	}

	if(d.getElementsByClassName('navDashBoard')[0]) {
		d.getElementsByClassName('navDashBoard')[0].style.opacity = 0;
	}

	d.getElementById('UXLoader').style.display = "block";

	var t = new Timeout(function () {

		for (var i = 0; i < currentSections.length; i++) {
			currentSections[i].style.display = "none";
		}

		var secToBeKept;

		if(currentURL == "index.html") {

			d.getElementById('topNavBarBackButton').style.opacity = 0;
			d.getElementById('nextButton').style.opacity = 0;
			window.setTimeout(function(){d.getElementById('topNavBarBackButton').style.display = "none"},500);
			window.setTimeout(function(){d.getElementById('nextButton').style.display = "none"},500);
			d.getElementById('navStepMenu').style.paddingLeft = "110px";

			d.getElementById('indexSection').style.display = "block";
			d.getElementById('requests').className = "scaleNormal";
			d.getElementById('requests').style.display = "block";
			d.getElementById('content').style.position = "fixed";
			window.setTimeout(function(){d.getElementById('delayingArrival').className = "displayArrival"}, 750);
			

		} else if(currentURL == "verify-dashboard.html") {

	 		d.getElementById('navStepMenu').style.paddingLeft = "0px";

			d.getElementById('topNavBarBackButton').style.display = "inline-block";
			d.getElementById('nextButton').style.display = 'inline-block';

			var newOnclick = d.getElementById('stepOne').getAttribute('onclick');
			d.getElementById('topNavBarBackButton').setAttribute('onclick', newOnclick);
			
			var newOnclick2 = d.getElementById('stepThree').getAttribute('onclick');
			d.getElementById('nextButton').setAttribute('onclick', newOnclick2);			

			window.setTimeout(function(){d.getElementById('topNavBarBackButton').style.opacity = 1},500);
			window.setTimeout(function(){d.getElementById('nextButton').style.opacity = 1},500);

			
			d.getElementById('dashMain').style.display = "block";
			d.getElementById('content').style.position = "relative";
			d.getElementsByClassName('navDashBoard')[0].style.display = "block";
			window.setTimeout(function(){d.getElementsByClassName('navDashBoard')[0].style.opacity = 1;}, 1000);
			d.getElementById('dashMainContentSection').style.display = "block";
			window.setTimeout(function(){d.getElementById('dashMainContentSection').style.opacity = 1},500);
			

	 	} else if(currentURL == "action.html") {

	 		d.getElementById('navStepMenu').style.paddingLeft = "0px";
			d.getElementById('topNavBarBackButton').style.display = "inline-block";
			d.getElementById('nextButton').style.display = 'inline-block';
			
			var newOnclick = d.getElementById('stepTwo').getAttribute('onclick');
			d.getElementById('topNavBarBackButton').setAttribute('onclick', newOnclick);
			
			var newOnclick2 = d.getElementById('stepFour').getAttribute('onclick');
			d.getElementById('nextButton').setAttribute('onclick', newOnclick2);	

			window.setTimeout(function(){d.getElementById('topNavBarBackButton').style.opacity = 1},500);
			window.setTimeout(function(){d.getElementById('nextButton').style.opacity = 1},500);	 		

	 		d.getElementById('content').style.position = "relative";
	 		d.getElementById('actionForm').style.display = "block";
			d.getElementById('content').style.position = "fixed";

	 	} else if(currentURL == "submit.html") {

	 		d.getElementById('navStepMenu').style.paddingLeft = "0px";
			d.getElementById('topNavBarBackButton').style.display = "inline-block";
			d.getElementById('nextButton').style.opacity = 0;

			var newOnclick = d.getElementById('stepThree').getAttribute('onclick');
			d.getElementById('topNavBarBackButton').setAttribute('onclick', newOnclick);

			window.setTimeout(function(){d.getElementById('topNavBarBackButton').style.opacity = 1},500);
			window.setTimeout(function(){d.getElementById('nextButton').style.display = "none"},500);

	 		d.getElementById('content').style.position = "relative";
	 		d.getElementById('submitSection').style.display = "block";
			d.getElementById('content').style.position = "fixed";

	 	}

		d.getElementById('UXLoader').style.display = "none";

		settingUpFixedNav();
		d.getElementById('content').className = "contentReset";
		if(callback) {
			callback();	
		};
		if(d.getElementById('dash1')) {
			settingUpNav();
			/*
			if(currentURL == "index.html") {
				//notInitStartSwipeCarouel();
			}
			*/
		}	 	

	}, 1000);

	if(d.getElementById('delayingArrival')) {
		window.setTimeout(function(){d.getElementById('delayingArrival').className = "hiddenArrival"},750);	
	}
}


function runningDashAjaxCall(currentURL,callback) {

	removingDocViewer();

	d.getElementById('UXLoader').style.display = "none";
	if(d.getElementById('documentsSearchTools')) {
		d.getElementById('documentsSearchTools').style.display = "none";	
	}
	if(d.getElementById('dashMainContentDumentsSection')) {
		d.getElementById('dashMainContentDumentsSection').style.display = "none";
	}
	

	var container = d.getElementById('dashMain');
	container.className = "dashMainContentSectionToBeRemoved";
	var currentSections = container.getElementsByTagName('section');

	if(d.getElementById('dashMainContentSection').style.display) {
		d.getElementById('dashMainContentSection').style.opacity = 0;
	}

	d.getElementById('UXLoader').style.display = "block";

	var t = new Timeout(function () {

		for (var i = 0; i < currentSections.length; i++) {
			currentSections[i].style.display = "none";
		}
		if(currentURL == "verify-documents.html") {

			d.getElementById('navStepMenu').style.paddingLeft = "0px";
			d.getElementById('topNavBarBackButton').style.display = "inline-block";
			d.getElementById('nextButton').style.display = 'inline-block';

			var newOnclick = d.getElementById('stepOne').getAttribute('onclick');
			d.getElementById('topNavBarBackButton').setAttribute('onclick', newOnclick);

			var newOnclick2 = d.getElementById('stepThree').getAttribute('onclick');
			d.getElementById('nextButton').setAttribute('onclick', newOnclick2);			

			window.setTimeout(function(){d.getElementById('topNavBarBackButton').style.opacity = 1},500);
			window.setTimeout(function(){d.getElementById('nextButton').style.opacity = 1},500);	 

			d.getElementById('dashMainContentDumentsSection').style.display = "block";
			container.className = "dashMainContentSectionReset";
			d.getElementById('UXLoader').style.display = "none";
			if(d.getElementById('documentsSearchTools')) {
				d.getElementById('documentsSearchTools').style.display = "block";
			}
			

		} else  if (currentURL == "verify-summury.html") {
			
			d.getElementById('navStepMenu').style.paddingLeft = "0px";
			d.getElementById('topNavBarBackButton').style.display = "inline-block";
			d.getElementById('nextButton').style.display = 'inline-block';

			var newOnclick = d.getElementById('stepOne').getAttribute('onclick');
			d.getElementById('topNavBarBackButton').setAttribute('onclick', newOnclick);

			var newOnclick2 = d.getElementById('stepThree').getAttribute('onclick');
			d.getElementById('nextButton').setAttribute('onclick', newOnclick2);

			window.setTimeout(function(){d.getElementById('topNavBarBackButton').style.opacity = 1},500);
			window.setTimeout(function(){d.getElementById('nextButton').style.opacity = 1},500);	 

			d.getElementById('dashMainContentSummarySection').style.display = "block";
			container.className = "dashMainContentSectionReset";
			d.getElementById('UXLoader').style.display = "none";
		} else  if (currentURL == "verify-dashboard.html") {

			d.getElementById('navStepMenu').style.paddingLeft = "0px";
			d.getElementById('topNavBarBackButton').style.display = "inline-block";
			d.getElementById('nextButton').style.display = 'inline-block';

			var newOnclick = d.getElementById('stepOne').getAttribute('onclick');
			d.getElementById('topNavBarBackButton').setAttribute('onclick', newOnclick);

			var newOnclick2 = d.getElementById('stepThree').getAttribute('onclick');
			d.getElementById('nextButton').setAttribute('onclick', newOnclick2);

			window.setTimeout(function(){d.getElementById('topNavBarBackButton').style.opacity = 1},500);
			window.setTimeout(function(){d.getElementById('nextButton').style.opacity = 1},500);			

			d.getElementById('dashMainContentSection').style.display = "block";
			container.className = "dashMainContentSectionReset";
			d.getElementById('UXLoader').style.display = "none";
			window.setTimeout(function(){d.getElementById('dashMainContentSection').style.opacity = 1},50);
		}

	}, 1000);
}


function settingUpFixedNav() {
	d.getElementsByTagName('header')[0].style.position = "fixed";
	d.getElementsByTagName('header')[0].style.top = "0px";
	d.getElementsByTagName('header')[0].style.height = "85px";
}

function displayingCreditRequest(presentationStyle) {

	if(presentationStyle == "list") {
		var currentCRContainer = d.getElementById('mySwipe');
		currentCRContainer.className = "swipe CRList";
		d.getElementById('mySwipe').style.marginBottom = "50px";

		var extralines = d.getElementsByClassName('swipeBreak');
		for (var i = 0; i < extralines.length; i++) {
			extralines[i].style.display = "none";
		}

	} else if (presentationStyle == "thumbnails") {
		var currentCRContainer = d.getElementById('mySwipe');
		currentCRContainer.className = "swipe";
		d.getElementById('mySwipe').style.marginBottom = "0px";

		var extralines = d.getElementsByClassName('swipeBreak');
		for (var i = 0; i < extralines.length; i++) {
			extralines[i].style.display = "block";
		}		
	}
}

function hookingCreditRequest() {

	if($(".crCard")) {

		$("#displayAsThumbnails").click(function() {
			displayingCreditRequest('thumbnails');
		});
	
	};
}
/*	SWIPE 2 Carousel	*/

// pure JS

function startingSwipeCarousel() {

	var bullets = document.getElementById('position').getElementsByTagName('li');

	var elem = document.getElementById('mySwipe');
	window.mySwipe = Swipe(elem, {
		continuous: true,
	    callback: function(pos) {      
	      var i = bullets.length;
	      while (i--) {
	        bullets[i].className = ' ';
	      }
	      bullets[pos].className = 'on';

	    }		
	  // startSlide: 4,
	  // auto: 3000,
	  // continuous: true,
	  // disableScroll: true,
	  // stopPropagation: true,
	  // callback: function(index, element) {},
	  // transitionEnd: function(index, element) {}
	});

	// with jQuery
	// window.mySwipe = $('#mySwipe').Swipe().data('Swipe');
	hookingCreditRequest();
}

function hidingMenu() {
	if(d.getElementById('dashboardClientSelected')) {

		d.getElementsByClassName('navDashBoard')[0].style.display = "none";
		d.getElementById('dashboardClientSelected').style.opacity = "0";
		window.setTimeout(function(){d.getElementById('dashboardClientSelected').style.display = "none"}, 500);
	}
}

function notInitStartSwipeCarouel() {
	
	readingMainJson('proxy-list-fake.php', startingSwipeCarousel);

	hookingCreditRequest();
	if(d.getElementById('requests')) {
		if(d.getElementById('requests').className == "siteHidden") {
			d.getElementById('requests').className = "siteShown";
			//window.setTimeout(fakingFalseParallax, 1000);
			var t = new Timeout(function () {
		    	fakingFalseParallax();
			}, 1000);			
			
		}
	}

	$("#displayAsThumbnails").click(function() {
		displayingCreditRequest('thumbnails');
	});

	$("#displayAsList").click(function() {
		displayingCreditRequest('list');
	});
}

/*	END OF SWIPE 2 Carousel	*/


/*	JSON Reader features 	*/

function ajaxJsonRequest(){
	var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]
	if (window.ActiveXObject){
		for (var i=0; i<activexmodes.length; i++){
			try {
				return new ActiveXObject(activexmodes[i])
			}
			catch(e){
			
			}
		}
	} else if (window.XMLHttpRequest)
	return new XMLHttpRequest()
	else
	return false
}

var currentCRSelected;
function readingMainJson(fileUrl,callback) {
	var mygetrequest=new ajaxJsonRequest()
	mygetrequest.onreadystatechange=function(){

		if (mygetrequest.readyState==4){

			if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){

				var myObject = eval('(' + mygetrequest.responseText + ')');

				var elemToBeGenerated = "";

				var j = 0;
				var k = 0;
				
				for (var i = 0; i < myObject.length; i++) {

					var z = Math.floor((Math.random()*8)+1);
					if(k == 0) {
						elemToBeGenerated += "<div>";
					}

					if(myObject[i].requestStatusLbl == "Not submitted") {
						mainColor = 'crCardDark';
					} else {
						mainColor = 'crCard';
					}

					currentCRSelected = myObject[i].requestCode;
					elemToBeGenerated += "<span onclick=\"creditRequestSelected('"+currentCRSelected+"')\" class='"+mainColor+"'>";

						elemToBeGenerated += "<span class='crTitle crTitle"+z+"'>";
						//elemToBeGenerated += "<b>" + myObject[i].requestCode + "</b>";
						elemToBeGenerated += "<b>" + myObject[i].counterparty + "</b>";
						elemToBeGenerated += "</span>";
						elemToBeGenerated += "<span class='crRequester'>";
						elemToBeGenerated +=  myObject[i].requestLbl;
						elemToBeGenerated += "</span>";

						elemToBeGenerated += "<span class='crPricing'>";
						if(myObject[i].details) {
							if(myObject[i].details.facilities) {
								if(myObject[i].details.facilities[0].pricing) {
									var currentPricing = myObject[i].details.facilities[0].total;
								}
							}
						}
						elemToBeGenerated += currentPricing;
						elemToBeGenerated += " M€</span>";

						elemToBeGenerated += "<span class='crDeadline'>";
						var deadline = new Date(myObject[i].deadlineDate);
						elemToBeGenerated +=  "Deadline : " + deadline.getDate() + "/" + deadline.getMonth() + "/" + deadline.getYear();
						elemToBeGenerated +=  "<br/>" + "Initiator : " + myObject[i].initiator;
						elemToBeGenerated += "</span>";
						elemToBeGenerated += "<span class='crStatus'>";
						elemToBeGenerated +=  myObject[i].requestStatusLbl;
						elemToBeGenerated += "</span>";
						elemToBeGenerated += "</span>";

					j++;

					if(j == 4) {
						elemToBeGenerated += "<br class='swipeBreak' />";
						j = 0;
					}

					k++;

					if(k == 8) {
						elemToBeGenerated += "</div>";
						k = 0;
					}
				}

				d.getElementsByClassName('swipe-wrap')[0].innerHTML = elemToBeGenerated;

				if(callback) {
					callback();
				}

			} else {
				alert("An error has occured making the request")
			}
		}
	}

	mygetrequest.open("GET", fileUrl, true)
	mygetrequest.send(null)
}

function readingSpecificJson(fileUrl,callback) {

	var mygetrequest=new ajaxJsonRequest()
	mygetrequest.onreadystatechange=function(){

		if (mygetrequest.readyState==4){

			if (mygetrequest.status==200 || window.location.href.indexOf("http")==-1){

				var myObject = eval('(' + mygetrequest.responseText + ')');

				if(d.getElementsByClassName('dashboardClientSelected')) {

					var elemToBeGenerated = "";
					var z = Math.floor((Math.random()*8)+1);
					elemToBeGenerated += "<span class='clientLogo clientLogo"+z+"'><img src='' alt='' /></span>";					
					elemToBeGenerated += "<span class='clientNameRLabel'>" + myObject.counterparty + "&#160;&#160; <span id='requestLbl'>" + myObject.requestLbl + "</span></span>";

					d.getElementById('dashboardClientSelected').innerHTML = elemToBeGenerated;

					var elemToBeGenerated = "";

					elemToBeGenerated += "<div class='navMainTableOverContentTable'>";
						elemToBeGenerated += "<div class='navMainTableOverContent'>";
							elemToBeGenerated += "<span class='navMainTableCellOverContent'>";
								elemToBeGenerated += "<span class='stylingHeadDetailsTitle' style='font-size: 0.8em'>Deadline</span><br/>";	
								elemToBeGenerated += "<span class='stylingHeadDetailsTitleBold dateCurrent' style='font-size: 1.2em; font-weight: 500'>";
									elemToBeGenerated += new Date(myObject.deadlineDate).toDateString();	
								elemToBeGenerated += "</span>";								
							elemToBeGenerated += "</span>";
							elemToBeGenerated += "<span class='navMainTableCellOverContent' style='font-size: 0.8em; text-align: center'>";
								elemToBeGenerated += "<span class='stylingHeadDetailsTitle'>Amount</span>";	
								elemToBeGenerated += "<span class='stylingHeadDetailsTitleBold' style='font-size: 1.4em; font-weight: 500;'> ";
									elemToBeGenerated += myObject.details.facilities[0].total;
								elemToBeGenerated += "</span> million";							
							elemToBeGenerated += "</span>";
							elemToBeGenerated += "<span class='navMainTableCellOverContent' style='font-size: 0.8em; text-align: center'>";
								elemToBeGenerated += "<span class='stylingHeadDetailsTitle'>OR</span> ";	
								elemToBeGenerated += "<span class='stylingHeadDetailsTitleBold' style='font-size: 1.4em; font-weight: 500'>";
									elemToBeGenerated += myObject.details.glfi_rating.or;
								elemToBeGenerated += "</span>";								
							elemToBeGenerated += "</span>";
							elemToBeGenerated += "<span class='navMainTableCellOverContent' style='font-size: 0.8em; text-align: center'>";
								elemToBeGenerated += "<span class='stylingHeadDetailsTitle'>Currency</span> ";	
								elemToBeGenerated += "<span class='stylingHeadDetailsTitleBold' style='font-size: 1.4em; font-weight: 500'>";
									elemToBeGenerated += myObject.details.currency;
								elemToBeGenerated += "</span>";						
							elemToBeGenerated += "</span>";
						elemToBeGenerated += "</div>";
					elemToBeGenerated += "</div>";

					//elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Credit Request Information</span><span class='creditRequestR'></span></div>";
					elemToBeGenerated += "<div class='tableCategories'><p class='tableCategoriesTitle'>Credit Request Information</p><div class='redLine'></div><div class='clear'></div></div>";

					elemToBeGenerated += "<div class='tableRow tableRow1'><span class='creditRequestL'>ID</span><span class='creditRequestR'>"+myObject.requestCode+"</span></div>";
					elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Form of Request</span><span class='creditRequestR'>"+myObject.requestType+"</span></div>";
					elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Deadline</span><span class='creditRequestR'>"+new Date(myObject.deadlineDate)+"</span></div>";
					elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Amount</span><span class='creditRequestR'>"+myObject.details.facilities[0].pricing + "</span></div>";
					elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Guarantors</span><span class='creditRequestR'>"+myObject.details.guarantors + "</span></div>";
					elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Description</span><span class='creditRequestR'>"+myObject.details.description+"</span></div>";

							elemToBeGenerated += "<div class='tableCategories'><p class='tableCategoriesTitle'>FINANCIAL INFORMATION</p><div class='redLine' style='width:535px;'></div><div class='clear'></div></div>";

							elemToBeGenerated += "<div class='tableFinanceHead'>";
							elemToBeGenerated += "<div id='financeHead1'>Dept Facilities</div>";
							elemToBeGenerated += "<div class='financeHead' id='financeHead2'>Tranche</div>";
							elemToBeGenerated += "<div class='financeHead' id='financeHead3'>Total(€M)</div>";
							elemToBeGenerated += "<div class='financeHead' id='financeHead4'>SG</div>";
							elemToBeGenerated += "<div class='financeHead' id='financeHead5'>Pricing</div>";
							elemToBeGenerated += "<div class='financeHead' id='financeHead6'>Repayment</div>";
							elemToBeGenerated += "<div class='financeHead' id='financeHead7'>Maturity</div>";
							elemToBeGenerated += "<div class='clear'></div></div>";
							elemToBeGenerated += "<div class='tableFinanceRow'>";
							elemToBeGenerated += "<div id='financeRow1'></div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow2'>"+myObject.details.facilities[0].tranche+"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow3'>"+myObject.details.facilities[0].total +"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow4'>"+myObject.details.facilities[0].sg +"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow5'>"+myObject.details.facilities[0].pricing + "</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow6'>"+myObject.details.facilities[0].repayment + "</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow7'>"+myObject.details.facilities[0].maturity +"</div>";
							elemToBeGenerated += "<div class='clear'></div></div>";
							elemToBeGenerated += "<div class='tableFinanceRow tableFinanceRowGray'>";
							elemToBeGenerated += "<div id='financeRow1'></div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow2'>"+myObject.details.facilities[0].tranche+"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow3'>"+myObject.details.facilities[0].total +"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow4'>"+myObject.details.facilities[0].sg +"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow5'>"+myObject.details.facilities[0].pricing + "</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow6'>"+myObject.details.facilities[0].repayment + "</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow7'>"+myObject.details.facilities[0].maturity +"</div>";
							elemToBeGenerated += "<div class='clear'></div></div>";
							elemToBeGenerated += "<div class='tableFinanceRow'>";
							elemToBeGenerated += "<div id='financeRow1'></div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow2'>"+myObject.details.facilities[0].tranche+"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow3'>"+myObject.details.facilities[0].total +"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow4'>"+myObject.details.facilities[0].sg +"</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow5'>"+myObject.details.facilities[0].pricing + "</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow6'>"+myObject.details.facilities[0].repayment + "</div>";
							elemToBeGenerated += "<div class='financeRow' id='financeRow7'>"+myObject.details.facilities[0].maturity +"</div>";
							elemToBeGenerated += "<div class='clear'></div></div>";
							elemToBeGenerated += "<div class='tableFinanceRow'>";
							elemToBeGenerated += "<div id='financeRow1'></div>";
							elemToBeGenerated += "<div id='financeRowComment'>We contemplate an equal risk sharing between MET, EXT and BHM i.e 1/3 1/3 1/3</div>";
							elemToBeGenerated += "<div class='clear'></div></div>";

							elemToBeGenerated += "<div style='height:30px;'></div>";

						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Currency</span><span class='creditRequestR'>"+ myObject.details.currency.toLowerCase() +"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Hedging</span><span class='creditRequestR'>"+myObject.details.hedging+"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Flat Fee</span><span class='creditRequestR'>"+myObject.details.flat_fee+"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Commitment Fee</span><span class='creditRequestR'>"+myObject.details.commitment_fee+"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Security Package</span><span class='creditRequestR'>"+myObject.details.security_package+"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Ownership</span><span class='creditRequestR'>"+myObject.details.ownership+"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>SG Role</span><span class='creditRequestR'>"+myObject.details.sg_role+"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>PCRU</span><span class='creditRequestR'>"+myObject.details.pcru+"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Or</span><span class='creditRequestR'>"+myObject.details.rating+"</span></div>";
						elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'></span><span class='creditRequestR crediRequestComment'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>";
						//elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Scarce Resources</span><span class='creditRequestR'>"+myObject.details.scarce_resources+"</span></div>";
						//elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Risk Rating</span><span class='creditRequestR'>"+myObject.details.risk_rating+"</span></div>";
						//elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Country Limit</span><span class='creditRequestR'>"+myObject.details.country_limit+"</span></div>";
						//elemToBeGenerated += "<div class='tableRow'><span class='creditRequestL'>Categorization</span><span class='creditRequestR'>"+myObject.details.categorization+"</span></div>";

							//elemToBeGenerated += "<div class='tableCategories'><span>FACILITIES</span></div>";
							elemToBeGenerated += "<div class='tableCategories'><p class='tableCategoriesTitle'>RISK ANALYSE</p><div class='redLine' style='width:637px;'></div><div class='clear'></div></div>";

							elemToBeGenerated += "<div class='riskRangeLeft'>";
								elemToBeGenerated += "<div class='riskLeft1'>Risk Rating and Profitability</div>";
								elemToBeGenerated += "<div class='riskLeft2'>Country Limit</div>";
								elemToBeGenerated += "<div class='riskLeft3'>Environmental Development Categorization</div>";
								elemToBeGenerated += "<div class='riskLeft4'>GLFI Risk Rating and Profitability</div>";
							elemToBeGenerated += "</div>";

							elemToBeGenerated += "<div class='riskRangeRight'>";

								elemToBeGenerated += "<div class='riskRight1'>";
									elemToBeGenerated += "<div class='riskRight1Left'>Funding / Use of assets</div>";
									elemToBeGenerated += "<div class='riskRight1Right'>";
										elemToBeGenerated += "<div class='riskRight1RightTop'>20% rule : eligibility of the transaction, amount to be reserved</div>";
										elemToBeGenerated += "<div class='riskRight1RightBot'>Concentration issue if anybreak (break of SUE/declic tresholds</div>";
									elemToBeGenerated += "</div>";
									elemToBeGenerated += "<div class='clear'></div>";
								elemToBeGenerated += "</div>";

								elemToBeGenerated += "<div class='riskRight2'>As of January 2013, €31M of available country limit for Romania</div>";
								elemToBeGenerated += "<div class='riskRight3'><span id='span1'>Project Categorization (A,B,C)</span><span id='span2'>Not applicable , telecom equipment</span></div>";

								elemToBeGenerated += "<div class='riskRight4'>";
									elemToBeGenerated += "<div class='riskLeft4Top'>Deal Id : L0688513 - Profitability based on 100% of the transaction, equally shared between EXT and MET</div>";
									elemToBeGenerated += "<div class='tableRiskHead'>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead1'>OR</div>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead2'>PD</div>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead3'>LGD</div>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead4'>RW</div>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead5'>EL bppa</div>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead6'>REVA</div>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead7'>RARORC</div>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead8'>RARORC after LCR</div>";
										elemToBeGenerated += "<div class='riskHead' id='riskHead9'>Return on funding</div>";
										elemToBeGenerated += "<div class='clear'></div>";
									elemToBeGenerated += "</div>";
									elemToBeGenerated += "<div class='tableRiskRow'>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow1'>"+myObject.details.glfi_rating.or+"</div>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow2'>"+myObject.details.glfi_rating.pd+"</div>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow3'>"+myObject.details.glfi_rating.lgd+"</div>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow4'>"+myObject.details.glfi_rating.rw+"</div>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow5'>"+myObject.details.glfi_rating.el_bppa+"</div>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow6'>"+myObject.details.glfi_rating.reva+"</div>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow7'>"+myObject.details.glfi_rating.rarorc+"</div>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow8'>"+myObject.details.glfi_rating.rarorc_after_lcr+"</div>";
										elemToBeGenerated += "<div class='riskRow' id='riskRow9'>"+myObject.details.glfi_rating.return_on_funding+"</div>";
										elemToBeGenerated += "<div class='clear'></div>";
									elemToBeGenerated += "</div>";
								elemToBeGenerated += "</div>";

							elemToBeGenerated += "</div>";
							elemToBeGenerated += "<div class='clear'></div>";

							elemToBeGenerated += "<div class='tableCategories'><div class='redLine' style='width: 820px; margin-left: 20px;'></div><div class='clear'></div></div>";

					d.getElementById('dashMainContentSection').innerHTML = elemToBeGenerated;


				}

				if(callback) {
					callback();
				}
					d.getElementsByClassName('navDashBoard')[0].style.display = "block";

					d.getElementById('dashboardClientSelected').style.display = "block";
					window.setTimeout(function(){d.getElementById('dashboardClientSelected').style.opacity = "1"},500);


					//testSticky();
					//stickingThings();

			} else {
				alert("An error has occured making the request")
			}
		}
	}
	//if (document.URL.indexOf('?') === -1)
	if( (fileUrl.indexOf('?') === -1) && (currentCRSelected) && (currentCRSelected != '') )  {
		mygetrequest.open("GET", "proxy-list-fake.php?requestCode=" + currentCRSelected, true)
		mygetrequest.send(null);
	} else {
		mygetrequest.open("GET", fileUrl, true)
		mygetrequest.send(null);
	}	
}





if(document.getElementById('mySwipe')) {
	readingMainJson('proxy-list-fake.php', startingSwipeCarousel);
}

function didYouChooseACR() {


}

var currentDashStylesState = 0;
var oldStyles;
var thisElem;

function stickingThings() {

	if (currentDashStylesState == 0) {

		thisElem = d.getElementsByClassName('dashLeftMenu')[0];	

		if (d.body.scrollTop > 85 && thisElem.className != 'navDashBoardFixed'){
			currentDashStylesState++;
			d.getElementsByClassName('navDashBoard')[0].className = "navDashBoardFixed";
		}		
	} else {

		thisElem = d.getElementsByClassName('navDashBoardFixed')[0];	

		if (d.body.scrollTop < 85 && thisElem.className == 'navDashBoardFixed'){ 

			currentDashStylesState = 0;
			d.getElementsByClassName('navDashBoardFixed')[0].className = "navDashBoard";		
		}
	}

	//window.setTimeout('stickingThings()', 10);	

	var t = new Timeout(function () {
    	stickingThings();
	}, 10);		
}


function clearingPotentialInterval() {
	clearInterval(stickingLeftDashMenu);
}

function swappingSearchKeysClasses(whichSelection) {

	if (whichSelection == "type") {
		d.getElementById('typeSortKey').className = "buttons";
		d.getElementById('nameSortKey').className = "buttonsUnselected";
		d.getElementById('dateSortKey').className = "buttonsUnselected";
	} else if (whichSelection == "name") {
		d.getElementById('typeSortKey').className = "buttonsUnselected";
		d.getElementById('nameSortKey').className = "buttons";
		d.getElementById('dateSortKey').className = "buttonsUnselected";
	} else if (whichSelection == "date") {
		d.getElementById('typeSortKey').className = "buttonsUnselected";
		d.getElementById('nameSortKey').className = "buttonsUnselected";
		d.getElementById('dateSortKey').className = "buttons";
	}
}


function backToInitState() {

	if( (d.getElementById('topNavBarBackButton').style.display == "inline-block") || (d.getElementById('topNavBarBackButton').style.display == "") ) {
		d.getElementById('topNavBarBackButton').style.display = "none";
		d.getElementById('navStepMenu').style.paddingLeft = "110px";
		d.getElementById('nextButton').style.display = "none;";
		d.getElementById('site').style.position = "absolute";

	} else if(d.getElementById('topNavBarBackButton').style.display == "none") {
		d.getElementById('topNavBarBackButton').style.display = "inline-block";
		d.getElementById('navStepMenu').style.paddingLeft = "0px";
		d.getElementById('nextButton').style.display = "inline-block";
		d.getElementById('site').style.position = "relative";

	}	
}

backToInitState();

if(d.getElementById('startingExperience')) {
	d.getElementById('startingExperience').setAttribute('onclick', "splashscreen()");	
}


function removingDocViewer() {
	if(d.getElementById('documentsOverlay')) {
		d.getElementById('documentsOverlay').style.opacity = 0;
	}
	
	window.setTimeout(function(){if(d.getElementById('documentsOverlay')){d.getElementById('documentsOverlay').style.display = "none"}}, 500);
}

function displayDocViewer() {
	if(d.getElementById('documentsOverlay')) {
		d.getElementById('documentsOverlay').style.display = "block";
		window.setTimeout(function(){d.getElementById('documentsOverlay').style.opacity = 1}, 500);
	}
	
}



function addingClickBehaviour() {
	if($( ".peopleUnfold1" )) {
		$( ".peopleUnfold1" ).click(function() {
		  $( ".peopleDocs1" ).toggle( "fold", 500 );
		});

		$( ".peopleUnfold2" ).click(function() {
		  $( ".peopleDocs2" ).toggle( "fold", 500 );
		});

		$( ".peopleUnfold3" ).click(function() {
		  $( ".peopleDocs3" ).toggle( "fold", 500 );
		});
	}	
}




/*


  function doOnOrientationChange()
  {
    switch(window.orientation) 
    {  
      case -90:
      case 90:
        alert('landscape');
        break; 
      default:
        alert('portrait');
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);

  // Initial execution if needed
  doOnOrientationChange();





*/


