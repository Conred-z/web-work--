/**
 * echarts图表库
 */

import * as echarts from "echarts"
import china from "../assets/json/china.json"

export default {
    /* echarts挂载到Vue全局 */
    install:app =>{
        app.config.globalProperties.$line = (element, data) =>{
            // 加载 echarts 图标
            var myChart = echarts.init(document.getElementById(element))
            const option = {
                color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
                title: {
                  text: 'APPLE产品 - 周销售额'
                },
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'cross',
                    label: {
                      backgroundColor: '#6a7985'
                    }
                  }
                },
                legend: {
                  data: ['iPhone', 'iPad', 'Macbook', 'iWatch', 'VisionPro']
                },
                toolbox: {
                  feature: {
                    saveAsImage: {}
                  }
                },
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: [
                  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                  }
                ],
                yAxis: [
                  {
                    type: 'value'
                  }
                ],
                series: data
            }
            myChart.setOption(option)
        }, 
        app.config.globalProperties.$radar = (element, data) =>{
          var myChart = echarts.init(document.getElementById(element))
          const option = {
            title: {
              text: '产品区块链-使用分布',
              subtext: '全球行情',
              top: 10,
              left: 10
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              type: 'scroll',
              bottom: 10,
              data: (function () {
                var list = [];
                for (var i = 1; i <= 28; i++) {
                  list.push(i + 2000 + '');
                }
                return list;
              })()
            },
            visualMap: {
              top: 'middle',
              right: 10,
              color: ['red', 'yellow'],
              calculable: true
            },
            radar: {
              indicator: [
                { text: 'IE8-', max: 400 },
                { text: 'IE9+', max: 400 },
                { text: 'Safari', max: 400 },
                { text: 'Firefox', max: 400 },
                { text: 'Chrome', max: 400 }
              ]
            },
            series: (function () {
              var series = [];
              for (var i = 1; i <= 28; i++) {
                series.push({
                  type: 'radar',
                  symbol: 'none',
                  lineStyle: {
                    width: 1
                  },
                  emphasis: {
                    areaStyle: {
                      color: 'rgba(0,250,0,0.3)'
                    }
                  },
                  data: [
                    {
                      value: [
                        (40 - i) * 10,
                        (38 - i) * 4 + 60,
                        i * 5 + 10,
                        i * 9,
                        (i * i) / 2
                      ],
                      name: i + 2000 + ''
                    }
                  ]
                });
              }
              return series;
            })()
          }
          myChart.setOption(option)
        }, 
        app.config.globalProperties.$rose = (element, data) =>{
          var myChart = echarts.init(document.getElementById(element))
          const option = {
            legend: {
              top: 'bottom'
            },
            toolbox: {
              show: true,
              feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
              }
            },
            series: [
              {
                name: 'Nightingale Chart',
                type: 'pie',
                radius: [40, 160],
                center: ['50%', '50%'],
                roseType: 'area',
                itemStyle: {
                  borderRadius: 8
                },
                data: [
                  { value: 40, name: '昆明' },
                  { value: 38, name: '北京' },
                  { value: 32, name: '上海' },
                  { value: 30, name: '武汉' },
                  { value: 28, name: '西安' },
                  { value: 26, name: '南京' },
                  { value: 22, name: '成都' },
                  { value: 18, name: '南昌' }
                ]
              }
            ]
          }
          myChart.setOption(option)
        }, 
        app.config.globalProperties.$bar = (element, data) =>{
          var myChart = echarts.init(document.getElementById(element))
          const option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: 'Direct',
                type: 'bar',
                emphasis: {
                  focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
              },
              {
                name: 'Email',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
              },
              {
                name: 'Union Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                  focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
              },
              {
                name: 'Video Ads',
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                  focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
              },
              {
                name: 'Search Engine',
                type: 'bar',
                data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                emphasis: {
                  focus: 'series'
                },
                markLine: {
                  lineStyle: {
                    type: 'dashed'
                  },
                  data: [[{ type: 'min' }, { type: 'max' }]]
                }
              },
              {
                name: 'Baidu',
                type: 'bar',
                barWidth: 5,
                stack: 'Search Engine',
                emphasis: {
                  focus: 'series'
                },
                data: [620, 732, 701, 734, 1090, 1130, 1120]
              },
              {
                name: 'Google',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                  focus: 'series'
                },
                data: [120, 132, 101, 134, 290, 230, 220]
              },
              {
                name: 'Bing',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                  focus: 'series'
                },
                data: [60, 72, 71, 74, 190, 130, 110]
              },
              {
                name: 'Others',
                type: 'bar',
                stack: 'Search Engine',
                emphasis: {
                  focus: 'series'
                },
                data: [62, 82, 91, 84, 109, 110, 120]
              }
            ]
          }
          myChart.setOption(option)
        }, 
        app.config.globalProperties.$china = (element, data) =>{
          var myChart = echarts.init(document.getElementById(element))
          // 注册地图
          echarts.registerMap("china", china)
          const option = {
            // 鼠标点击弹窗
            tooltip:{
              triggerOn:"click",  // 点击触发
              enterable:true  // 是否出现弹窗
            },
            visualMap:{
              origin:"vertical", 
              type:"piecewise", 
              pieces: [
                { min: 0, max: 0, color: "#ffffff" },
                { min: 0, max: 10, color: "#ffcccc" },
                { min: 10, max: 20, color: "#ff9999" },
                { min: 20, max: 30, color: "#ff6666" },
                { min: 30, max: 40, color: "#ff3333" },
                { min: 40, max: 50, color: "#ff0000" },
                { min: 50, max: 60, color: "#cc0000" },
            ]
            }, 
            series:[{
              name:"中国地图", 
              type:"map", 
              map:"china", 
              roam:false, // 鼠标滚轮是否可以缩放
              zoom:1.2,   // 默认地图缩放倍数
              label:{
                show:true, // 是否显示地图上的文本信息
                fontSize:8
              }, 
              itemStyle:{
                areaColor:"rgba(255, 255, 255, 1)", 
                borderColor:"rgba(0, 0, 0, 0.2)"
              }, 
              data:[
                {name:"内蒙古", value:10}, 
                {name:"云南", value:20}, 
                {name:"四川", value:30}, 
                {name:"浙江", value:40}, 
                {name:"上海", value:50},
                {name:"北京", value:60},
                {name:"天津", value:70},
                {name:"重庆", value:80},
                {name:"广东", value:90},
                {name:"福建", value:100},
                {name:"湖南", value:110},
                {name:"湖北", value:120},
                {name:"山东", value:130},
                {name:"河南", value:140},
                {name:"河北", value:150},
                {name:"山西", value:160},
                {name:"安徽", value:170},
                {name:"江西", value:180},
                {name:"江苏", value:190},
                {name:"广西", value:200},
                {name:"海南", value:210},
                {name:"贵州", value:220},
                {name:"西藏", value:230},
                {name:"青海", value:240},
                {name:"宁夏", value:250},
                {name:"新疆", value:260},
                {name:"甘肃", value:270},
                {name:"陕西", value:280},
                {name:"吉林", value:290},
                {name:"辽宁", value:300},
                {name:"黑龙江", value:310}
              ]
            }]
          }
          myChart.setOption(option)
        }
    }
}