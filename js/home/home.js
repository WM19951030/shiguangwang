/**
 * Created by jingming on 2017/3/21.
 */
var app = angular.module('starter.home',[]);
app.controller('homeCtrl',function ($scope,$http,$timeout,$ionicSlideBoxDelegate) {

$scope.loadding  =true;
  //封装一个数据请求
  function requestData() {
    //模拟耗时
    $timeout(function () {
      //网络请求1
      var url1 = 'js/home/index.json';
      $http.get(url1).then(function (data) {
        console.log(data);
        $scope.data = data.data;
        $scope.loadding  =false;
        console.log($scope.data.data.topPosters);
        //更新一下轮播图
        $ionicSlideBoxDelegate.update()
      })

      var url2 = "js/home/movie.json"
      $http.get(url2).then(function (data) {
        console.log(data);
        $scope.movies = data.data.movies;
      })
      //news
      var url3 = 'js/home/news.json';
      $http.get(url3).then(function (data) {
        console.log(data)
        $scope.news = data.data.data;
      })


    },1000)
  }

  requestData();

  $scope.doRefresh = function () {
    requestData();
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.loadMore = function () {
    console.log('1');
    //$scope.news 10条数据
    //继续请求
    $timeout(function () {
      var url3 = 'js/home/news2.json';
      $http.get(url3).then(function (data) {
        console.log(data)
        var newArray = data.data.data;
        $scope.news =  $scope.news.concat(newArray);
        //停止刷新 显示界面
        $scope.$broadcast('scroll.infiniteScrollComplete');
      })
    },1000)

  }


})
