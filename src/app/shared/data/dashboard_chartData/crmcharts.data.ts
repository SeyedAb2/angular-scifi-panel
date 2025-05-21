
export let RevenueData: any = { 
    series: [{
        data: [0, 32, 18, 58]
    }],
    chart: {
        height: 40,
        width: 100,
        type: 'area',
        fontFamily: 'Rajdhani',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [1],
        show: true,
        curve: 'smooth',
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["var(--primary-color)"],
    strokes: {
        width: [1.5],
    },
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.1,
            opacityTo: 1.8,
            stops: [0, 0],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: 'var(--primary02)',
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: 'var(--primary02)',
                        opacity: 0.1
                    }
                ],
            ]
        }
    },
}
export let CustomersData: any = { 
    series: [{
        data: [0, 32, 18, 58]
    }],
    chart: {
        height: 40,
        width: 100,
        type: 'area',
        fontFamily: 'Rajdhani',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [1.5],
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["var(--primary-color)"],
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.1,
            opacityTo: 1.8,
            stops: [0, 60],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: 'var(--primary02)',
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: 'var(--primary02)',
                        opacity: 0.1
                    }
                ],
            ]
        }
    },
}
export let RatioData: any = { 
    series: [{
        data: [0, 32, 18, 58]
    }],
    chart: {
        height: 40,
        width: 100,
        type: 'area',
        fontFamily: 'Rajdhani',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [1.5],
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["var(--primary-color)"],
   
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.1,
            opacityTo: 1.8,
            stops: [0, 60],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: 'var(--primary02)',
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: 'var(--primary02)',
                        opacity: 0.1
                    }
                ],
            ]
        }
    },
};
export let DealsData: any = { 
    series: [{
        data: [0, 32, 18, 58]
    }],
    chart: {
        height: 40,
        width: 100,
        type: 'area',
        fontFamily: 'Rajdhani',
        foreColor: '#5d6162',
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    tooltip: {
        enabled: true,
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        },
        marker: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: [1.5],
    },
    title: {
        text: undefined,
    },
    grid: {
        borderColor: 'transparent',
    },
    xaxis: {
        crosshairs: {
            show: false,
        }
    },
    colors: ["var(--primary-color)"],
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.1,
            opacityTo: 1.8,
            stops: [0, 60],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: 'var(--primary02)',
                        opacity: 1
                    },
                    {
                        offset: 60,
                        color: 'var(--primary02)',
                        opacity: 0.1
                    }
                ],
            ]
        }
    },
}

export let PerformanceData: any = {  
    series: [{
        name: "Profit",
        type: "column",
        data: [33, 21, 32, 37, 23, 32, 47, 31, 54, 32, 20, 38]
    }, {
        name: "Revenue",
        type: "area",
        data: [44, 55, 41, 42, 22, 43, 21, 35, 56, 27, 43, 27]
    }, {
        name: "Sales",
        type: "line",
        data: [30, 25, 36, 30, 45, 35, 64, 51, 59, 36, 39, 51]
    }],
    chart: {
        height: 290,
        type: "line",
        stacked: !1,
        toolbar: {
            show: !1
        }
    },
    stroke: {
        width: [0, 0, 1.5],
        dashArray: [0, 0, 2],
        show: true,
        curve: 'straight',
        lineCap: 'butt',
    },
    grid: {
        borderColor: '#f2f6f7',
    },
    xaxis: {
        axisBorder: {
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
    },
    tooltip: {
        y: [{
            formatter: function (e:any) {
                return void 0 !== e ? "$" + e.toFixed(0) : e
            }
        }, {
            formatter: function (e:any) {
                return void 0 !== e ? "$" + e.toFixed(0) : e
            }
        }, {
            formatter: function (e:any) {
                return void 0 !== e ? e.toFixed(0) : e
            }
        }]
    },
    plotOptions: {
        bar: {
            columnWidth: "20%",
        }
    },
    legend: {
        position: "top"
    },
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    markers: {
        size: 0
    },
    colors: ["var(--primary-color)", "rgba(255 ,255 ,255 ,0.05)", "rgb(235, 247, 72)"]

}

export let CountryData: any = { 
    series: [{
        name: 'Total',
        data: [41, 38, 34, 26, 18, 15]
    }],
    chart: {
        height: 290,
        type: 'bar',
        toolbar: {
            show: false,
        }
    },
    colors: ['var(--primary-color)'],
    plotOptions: {
        bar: {
            barHeight: '35%',
            distributed: true,
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontWeight: 400,
        fontSize: '11px',
        offsetX: 0,
        offsetY: 10,
        labels: {
            colors: '#74767c',
        },
        markers: {
            width: 6,
            height: 6,
            strokeWidth: 0,
            radius: 12,
            offsetX: 0,
            offsetY: 0
        },
        itemMargin: {
            horizontal: 5,
            vertical: 5
        },
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    xaxis: {
        categories: [
            ['Usa'],
            ['Russia'],
            ['Canada'],
            ['Indonesia'],
            ['China'],
            ['Uae'],
        ],
        labels: {
            show: false,
            style: {
                fontSize: '12px'
            },
        }
    },
    yaxis: {
        offsetX: 30,
        offsetY: 30,
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 300,
                cssClass: 'apexcharts-yaxis-label',
            },
            offsetY: 8,
        }
    },
    fill: {
        type: 'pattern',
        opacity: 1,
        pattern: {
            style: ['verticalLines', 'verticalLines', 'verticalLines', 'verticalLines', 'verticalLines', 'verticalLines'], // string or array of strings
        }
    },
    tooltip: {
        enabled: true,
        shared: false,
        intersect: true,
        x: {
            show: false
        }
    },
 }

export let LeadSourceData: any = { 
    series: [1754, 634, 878, 470],
    labels: ["Call", "Email", "Website", "Organic"],
    chart: {
        height: 250,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },

    legend: {
        show: false,
    },
    stroke: {
        show: true,
        curve: 'straight',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            expandOnClick: false,
            donut: {
                size: '85%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -25
                    },
                    value: {
                        show: true,
                        fontSize: '15px',
                        color: undefined,
                        offsetY: -20,
                        formatter: function (val:any) {
                            return val + "%"
                        }
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        label: 'Total',
                        fontSize: '22px',
                        fontWeight: 600,
                        color: '#495057',
                    }

                }
            }
        }
    },
    grid: {
        padding: {
            bottom: -90
        }
    },
    colors: ["var(--primary-color)", "var(--primary07)", "var(--primary04)", "var(--primary01)"],
}