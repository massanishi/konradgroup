angular.module('App', [])
    .controller('MainController', function($scope, $timeout) {
        var win = $(window);
        var overHeroPos = 522;

        win.scroll(function() {

            if (win.scrollTop() > 522) {
                $timeout(function() {
                    $scope.showNav = true;
                }, 10);

            } else {
            	$timeout(function() {
                    $scope.showNav = false;
                }, 10);
            }

            console.log("You've scrolled " + win.scrollTop() + " pixels");
        });
    })
    .controller('ServiceController', function($scope) {
        $scope.services = [{
            title: 'Strategy',
            contents: ['Digital Strategy', 'Enterprise Application', 'Strategy UX Strategy', 'Strategic Innovation', 'Mobile Strategy', 'Digital Transformation']
        }, {
            title: 'Design',
            contents: ['User Experience Design', 'Mobile & Tablet Design', 'User Interface Design', 'Motion Graphics & Animation', 'Usability Testing & User Research']
        }, {
            title: 'Technology',
            contents: ['Web Application', 'Mobile & Tablet Applications', 'E-commerce & M-commerce', 'Content Management Systems (CMS) Implementation', 'System Architecture & Enterprise Integration', 'Prototyping & Product Development']
        }, {
            title: 'Marketing',
            contents: ['Brand Strategy', 'Identity Design', 'Customer Engagement Strategy', 'Marketing Automation', 'Media Production and Planning', 'Brochure & Collateral Production']
        }]
    })
  