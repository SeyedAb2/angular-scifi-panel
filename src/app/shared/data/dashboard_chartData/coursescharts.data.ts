export let LearningAnalysisData: any = {
    series: [{
        name: "This Year",
        data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
      }, {
        name: "Last Year",
        data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
      }],
      chart: {
        height: 328,
        type: "line",
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [1.5, 1.5],
        show: true,
        curve: ['straight', 'straight'],
      },
      grid: {
        borderColor: '#f3f3f3',
        strokeDashArray: 3
      },
      xaxis: {
        axisBorder: {
          color: 'rgba(119, 119, 142, 0.05)',
        },
      },
      legend: {
        show: false
      },
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      markers: {
        size: 0
      },
      colors: ["var(--primary-color)", "rgba(255,255,255,0.1)"],
      plotOptions: {
        bar: {
          columnWidth: "50%",
          borderRadius: 2,
        }
      },
}

export let  CourseCategoriesData: any = {
    series: [31, 21, 15, 10],
    chart: {
      // width: 270,
      height: 238,
      type: 'pie',
    },
    legend: {
      show: false,
      position: "bottom",
    },
    stroke: {
        width: 0
    },
    dataLabels: { 
      dropShadow: {
          enabled: false,
      }
    },
    colors: ["var(--primary-color)", "var(--primary08)","var(--primary06)","var(--primary04)"],
    labels: ['Sales', 'Marketing', 'IT', 'Consultancy'],
 }

 export let  CoursesProgressData: any = {
    series: [
        {
            name: "In Progress",
            data: [44, 42, 57, 86, 58, 55, 70],
        },
        {
            name: "Completed",
            data: [74, 72, 87, 116, 88, 85, 100],
        }
    ],
    chart: {
        stacked: true,
        type: "bar",
        height: 288,
    },
    grid: {
        borderColor: "#f5f4f4",
        strokeDashArray: 5,
        yaxis: {
            lines: {
                show: true, // Ensure y-axis grids are shown
            },
        },
    },
    colors: [
        "var(--primary-color)",
        "var(--primary01)",
    ],
    plotOptions: {
        bar: {
            columnWidth: "20%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "bottom",
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
    yaxis: {
        title: {
            text: "Courses Progress",
            style: {
                color: "#adb5be",
                fontSize: "14px",
                fontWeight: 400,
                cssClass: "apexcharts-yaxis-label",
            },
        },
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
            formatter: function (y:any) {
                return y.toFixed(0) + "";
            },
        },
    },
    xaxis: {
        type: "Week",
        categories: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
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
    },
    
 }
 export let  PayoutsData: any = {
    series: [{
		name: "Payment",
		data: [50, 50, 47, 47 , 51, 51, 53, 53, 50, 50, 52, 52]
	}],
	chart: {
		height: 260,
		type: "area",
		sparkline: {
			enabled: true
		}
	},
    dataLabels: {
        enabled: false
    },
	stroke: {
		width: [1.4],
		show: true,
		curve: ['smooth'],
	},
	grid: {
		borderColor: '#f3f3f3',
        strokeDashArray: 3
	},
	xaxis: {
		axisBorder: {
			color: 'rgba(119, 119, 142, 0.05)',
		},
		crosshairs: {
			show: false,
		}
	},
	legend: {
		show: false
	},
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
	markers: {
		size: 0
	},
	colors: ["var(--primary-color)"],
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
                color: "var(--primary01)",
                opacity: 0.5
              },
              {
                offset: 75,
                color: "var(--primary01)",
                opacity: 0.5
              },
              {
                offset: 100,
                color: 'var(--primary01)',
                opacity: 0.5
              }
            ]
          ]
        }
    },
 }