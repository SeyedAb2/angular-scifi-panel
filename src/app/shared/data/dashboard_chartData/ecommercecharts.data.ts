
export let SalesData: any = {
    chart: {
        height: 300,
        width: 100,
        type: "radialBar",
    },
    series: [48],
    colors: ["var(--primary-color)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#4b9bfa",
                    fontSize: "11px",
                    show: true,
                    fontWeight: 500
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Followers"]
 }

 export let RevenueData: any = {
    chart: {
        height: 120,
        width: 100,
        type: "radialBar",
    },
    series: [62],
    colors: ["var(--primary-color)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#4b9bfa",
                    fontSize: "11px",
                    show: true,
                    fontWeight: 500
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Followers"]
  }

 export let ViewsData: any = {
    chart: {
        height: 120,
        width: 100,
        type: "radialBar",
    },
    series: [80],
    colors: ["var(--primary-color)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#4b9bfa",
                    fontSize: "11px",
                    show: true,
                    fontWeight: 500
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Followers"]
  }

 export let ProfitData: any = {
    chart: {
        height: 120,
        width: 100,
        type: "radialBar",
    },
    series: [25],
    colors: ["var(--primary-color)"],
    plotOptions: {
        radialBar: {
            hollow: {
                margin: 0,
                size: "50%",
                background: "#fff"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "#4b9bfa",
                    fontSize: "10px",
                    show: false
                },
                value: {
                    offsetY: 5,
                    color: "#4b9bfa",
                    fontSize: "11px",
                    show: true,
                    fontWeight: 500
                }
            }
        }
    },
    stroke: {
        lineCap: "round"
    },
    labels: ["Followers"]
  }

  export let StatisticsData: any = { 
    series: [
        {
            name: "Sales",
            data: [100, 210, 180, 454, 230, 320, 656, 830, 350, 350, 210, 410],
        },
        {
            name: "Refunds",
            data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480],
        }
    ],
    chart: {
        type: "area",
        height: 300,
        toolbar: {
            show: false
        }
    },
    colors: [
        "var(--primary-color)",
        "rgb(0, 227, 210)",
    ],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary-color)",
                        opacity: 1
                    },
                    {
                        offset: 50,
                        color: "var(--primary-color)",
                        opacity: 0.2
                    },
                    {
                        offset: 100,
                        color: "var(--primary-color)",
                        opacity: 0.0
                    }
                ],
                [
                    {
                        offset: 0,
                        color: "rgb(0, 227, 210)",
                        opacity: 1
                    },
                    {
                        offset: 50,
                        color: "rgb(0, 227, 210)",
                        opacity: 0.2
                    },
                    {
                        offset: 100,
                        color: "rgb(0, 227, 210)",
                        opacity: 0.0
                    }
                ],
            ]
        }
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
        offsetX: 0,
        offsetY: 8,
        markers: {
            width: 5,
            height: 5,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
        },
    },
    stroke: {
        curve: 'smooth',
        width: [1, 1],
        lineCap: 'round',
    },
    grid: {
        borderColor: "#edeef1",
        strokeDashArray: 2,
    },
    yaxis: {
        axisBorder: {
            show: true,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            formatter: function (y: any) {
                if (typeof y !== 'undefined' && y !== null) {
                    return y.toFixed(0) + "";
                }
                return ""; // or handle the case where y is undefined or null
            }
        }
    },
    xaxis: {
        type: "month",
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "sep",
            "oct",
            "nov",
            "dec",
        ],
        axisBorder: {
            show: false,
            color: "rgba(119, 119, 142, 0.05)",
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: false,
            borderType: "solid",
            color: "rgba(119, 119, 142, 0.05)",
            width: 6,
            offsetX: 0,
            offsetY: 0,
        },
        labels: {
            rotate: -90,
        },
    }
   }

   export let AnalysisData: any = {
    chart: {
        height: 250,
        type: 'radialBar',
        responsive: 'true',
    },
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 135,
            size: 120,
            imageWidth: 50,
            imageHeight: 50,
            track: {
                strokeWidth: "0",
            },
            dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                bottom: 0,
                blur: 3,
                opacity: 0.5
            },
            dataLabels: {
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 30,
                },
                hollow: {
                    size: "60%"
                },
                value: {
                    offsetY: -10,
                    fontSize: '22px',
                    color: undefined,
                    formatter: function (val:any) {
                        return val + "%";
                    }
                }
            }
        }
    },
    colors: ['var(--primary-color)'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        type: "horizontal",
        gradientToColors: ["rgb(0, 227, 210)"],
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
        dashArray: 3
    },
    series: [92],
    labels: ["Profit"]

    }
    var data:any = [];
    let XAXISRANGE = 777600000;

export let WebTrafficData: any = {
        series: [{
          name:'population',
          data: [8, 5, 6, 4, 3,8, 5, 6, 4, 3,8, 5, 6, 4, 3]
        }],
        chart: {
          id: 'realtime',
          height: 300,
          type: 'bar',
          animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                  speed: 1000
              }
          },
          toolbar: {
              show: false
          },
          zoom: {
              enabled: false
          }
      },
      plotOptions: {
          bar: {
              columnWidth: "20%",
              borderRadius: 0
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          curve: 'smooth'
      },
      colors: ["var(--primary-color)"],
      markers: {
          size: 0
      },
      // xaxis: {
      //     type: 'datetime',
      //     labels: {
      //         show: true,
      //     },
      //     axisBorder: {
      //         show: false,
      //     },
      //     axisTicks: {
      //         show: false,
      //     },
      //     crosshairs: {
      //         show: false,
      //     }
      // },
      // yaxis: {
      //     max: 100,
      //     labels: {
      //         show: false,
      //     },
      //     axisBorder: {
      //         show: false,
      //     },
      //     axisTicks: {
      //         show: false,
      //     },
      //     crosshairs: {
      //         show: false,
      //     }
      // },
      legend: {
          show: false
      },
      
    };
   