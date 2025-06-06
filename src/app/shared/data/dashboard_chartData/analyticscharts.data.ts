export let UsersData: any = { 
    series: [
        {
            type: 'bar',
            name: 'Revenue',
            chart: {
                dropShadow: {
                    enabled: true,
                    enabledOnSeries: undefined,
                    top: 5,
                    left: 0,
                    blur: 3,
                    color: '#000',
                    opacity: 0.1
                }
            },
            data: [
                {
                    x: 'Jan',
                    y: 180
                },
                {
                    x: 'Feb',
                    y: 620
                },
                {
                    x: 'Mar',
                    y: 476
                },
                {
                    x: 'Apr',
                    y: 220
                },
                {
                    x: 'May',
                    y: 520
                },
                {
                    x: 'Jun',
                    y: 780
                },
                {
                    x: 'Jul',
                    y: 435
                },
                {
                    x: 'Aug',
                    y: 515
                },
                {
                    x: 'Sep',
                    y: 738
                },
                {
                    x: 'Oct',
                    y: 454
                },
                {
                    x: 'Nov',
                    y: 525
                },
                {
                    x: 'Dec',
                    y: 230
                }
            ]
        },
        {
            type: 'bar',
            name: 'Profit',
            data: [
                {
                    x: 'Jan',
                    y: 100
                },
                {
                    x: 'Feb',
                    y: 210
                },
                {
                    x: 'Mar',
                    y: 180
                },
                {
                    x: 'Apr',
                    y: 454
                },
                {
                    x: 'May',
                    y: 230
                },
                {
                    x: 'Jun',
                    y: 320
                },
                {
                    x: 'Jul',
                    y: 656
                },
                {
                    x: 'Aug',
                    y: 830
                },
                {
                    x: 'Sep',
                    y: 350
                },
                {
                    x: 'Oct',
                    y: 350
                },
                {
                    x: 'Nov',
                    y: 210
                },
                {
                    x: 'Dec',
                    y: 410
                }
            ]
        }
    ],
    chart: {
        height: 357,
    },
    plotOptions: {
        bar: {
            columnWidth: '45%',
        }
    },
    colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
    dataLabels: {
        enabled: false
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    xaxis: {
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            formatter: function (value:any) {
                return "$" + value;
            }
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
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 15,
        height: 30,
        markers: {
            width: 5,
            height: 5
        },
    },
    markers: {
        hover: {
            sizeOffset: 5
        }
    }
}

export let SourceData: any = { 
    series: [
        // Organic Search
        {
            name: 'Organic Search',
            data: [
                {
                    x: '2023',
                    y: [
                        new Date(200, 2, 4).getTime(),
                        new Date(280, 2, 4).getTime()
                    ]
                },
                {
                    x: '2022',
                    y: [
                        new Date(180, 3, 21).getTime(),
                        new Date(289, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Direct
        {
            name: 'Direct',
            data: [
                {
                    x: '2023',
                    y: [
                        new Date(280, 2, 4).getTime(),
                        new Date(390, 2, 4).getTime()
                    ]
                },
                {
                    x: '2022',
                    y: [
                        new Date(289, 3, 21).getTime(),
                        new Date(420, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Referral
        {
            name: 'Referral',
            data: [
                {
                    x: '2023',
                    y: [
                        new Date(390, 2, 4).getTime(),
                        new Date(560, 2, 4).getTime()
                    ]
                },
                {
                    x: '2022',
                    y: [
                        new Date(420, 3, 21).getTime(),
                        new Date(590, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Social
        {
            name: 'Social',
            data: [
                {
                    x: '2023',
                    y: [
                        new Date(560, 2, 4).getTime(),
                        new Date(900, 2, 4).getTime()
                    ]
                },
                {
                    x: '2022',
                    y: [
                        new Date(590, 3, 21).getTime(),
                        new Date(780, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Email
        {
            name: 'Email',
            data: [
                {
                    x: '2023',
                    y: [
                        new Date(900, 2, 4).getTime(),
                        new Date(960, 2, 4).getTime()
                    ]
                },
                {
                    x: '2022',
                    y: [
                        new Date(780, 3, 21).getTime(),
                        new Date(1020, 2, 4).getTime()
                    ]
                }
            ]
        },
        // Paid Search
        {
            name: 'Paid Search',
            data: [
                {
                    x: '2023',
                    y: [
                        new Date(960, 2, 4).getTime(),
                        new Date(1240, 2, 4).getTime()
                    ]
                },
                {
                    x: '2022',
                    y: [
                        new Date(1020, 3, 21).getTime(),
                        new Date(1104, 2, 4).getTime()
                    ]
                }
            ]
        },
    ],
    chart: {
        height: 300,
        type: 'rangeBar',
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '25%',
            rangeBarGroupRows: true
        }
    },
    stroke: {
        show: true,
        colors: "transparent",
        width: 10,
    },
    colors: [
        "var(--primary-color)", "var(--primary08)", "var(--primary06)", "var(--primary04)", "var(--primary02)",
        "var(--primary005)"
    ],
    grid: {
        borderColor: '#f2f5f7',
    },
    fill: {
        type: 'solid'
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: false,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    yaxis: {
        labels: {
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        }
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        height: 50,
        offsetX: 0,
        offsetY: 20,
        markers: {
            width: 5,
            height: 5
        },
    },

}
export let BrowserData: any = {  
    series: [{
        name: 'Call',
        data: [80, 50, 30, 40, 100, 20],
    }, {
        name: 'Email',
        data: [20, 30, 40, 80, 20, 80],
    }, {
        name: 'Website',
        data: [44, 76, 78, 13, 43, 10],
    }],
    chart: {
        height: 268,
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        }
    },
    plotOptions: {
        radar: {
            size: 80,
            polygons: {
                fill: {
                    colors: ['var(--primary005)', 'var(--primary01)']
                },
            }
        }
    },
    title: {
        align: 'left',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    colors: ["#00ffbe", "#48f768", "#00e3d2"],
    stroke: {
        width: 0
    },
    fill: {
        opacity: 0.05
    },
    markers: {
        size: 0
    },
    legend: {
        show: true,
        fontSize: "12px",
        position: 'bottom',
        horizontalAlign: 'center',
        fontWeight: 500,
        offsetX: 0,
        offsetY: 10,
        labels: {
            colors: '#9ba5b7',
        },
        markers: {
            width: 7,
            height: 7,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            offsetX: 0,
            offsetY: 0
        },
    },
    xaxis: {
        categories: ['2019', '2020', '2021', '2022', '2023', '2024']
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: function (val:any, i:any) {
                if (i % 5 === 0) {
                    return val
                }
            }
        }
    }
}

export let RevenueData: any = {   
    series: [{
        name: 'This Week',
        data: [44, 42, 57, 86, 58, 55, 70],
    }, {
        name: 'Last Week',
        data: [34, 22, 37, 56, 21, 35, 60],
    }],
    chart: {
        type: 'area',
        height: 280,
        toolbar: {
            show: false,
        }
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    colors: ["var(--primary-color)", "rgb(0, 227, 210)"],
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: -100,
                    to: -46,
                    color: '#ebeff5'
                }, {
                    from: -45,
                    to: 0,
                    color: '#ebeff5'
                }]
            },
            columnWidth: '25%',
        }
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        curve: "straight",
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 15,
        height: 30,
        markers: {
            width: 5,
            height: 5
        },
    },
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'IRANYekan',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
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
        type: 'month',
        categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisBorder: {
            show: true,
            color: 'rgba(119, 119, 142, 0.05)',
            offsetX: 0,
            offsetY: 0,
        },
        axisTicks: {
            show: true,
            borderType: 'solid',
            color: 'rgba(119, 119, 142, 0.05)',
            width: 6,
            offsetX: 0,
            offsetY: 0
        },
        labels: {
            rotate: -90
        }
    }
}

export let DeviceData: any = {  
    series: [1754, 1234, 878, 270],
    labels: ["Mobile", "Tablet", "Desktop", "Others"],
    chart: {
        height: 322,
        width: '100%',
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
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
        show: true,
        curve: 'smooth',
        lineCap: 'round',
        colors: "#fff",
        width: 0,
        dashArray: 0,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '90%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '20px',
                        color: '#495057',
                        offsetY: -4
                    },
                    value: {
                        show: true,
                        fontSize: '18px',
                        color: undefined,
                        offsetY: 8,
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
    colors: ["var(--primary-color)", "var(--primary06)", "var(--primary04)", "var(--primary005)"],
}