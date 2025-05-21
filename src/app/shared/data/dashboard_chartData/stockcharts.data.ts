
export let TotalEarningData: any = { 
    series: [{
        name: 'Earnings',
        type: "column",
        data: [100, 210, 180, 454, -230, -320, 256, -430, - 350, -350, 210, 410],
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 1,
                colorStops: [
                    {
                        offset: 0,
                        color: "#60a5fa",
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: "#5a66f1",
                        opacity: 1,
                    },
                ],
            },
        },
    }, {
        name: "Stock Price",
        type: "line",
        data: [180, 620, 476, 220, 520, 780, 435, 515, 738, 454, 525, 230],
    }, {
        name: "Volume Of Trading",
        type: "line",
        data: [200, 530, 110, 130, 480, 520, 780, 435, 475, 738, 454, 480],
    }],
    chart: {
        redrawOnWindowResize: true,
        height: 335,
        type: 'bar',
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
            colors: {
                ranges: [{
                    from: -500,
                    to: 0,
                    color: 'var(--primary01)'
                }, {
                    from: 500,
                    to: 0,
                    color: 'var(--primary-color)'
                }]
            },
        },
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [0, 1.5, 1.5],
        curve: "straight",
    },
    legend: {
        show: true,
        fontSize: "12px",
        position: 'bottom',
        horizontalAlign: 'center',
        fontWeight: 500,
        height: 40,
        offsetX: 0,
        offsetY: 20,
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
    colors: ["var(--primary-color)", "rgba(72, 247, 104)", 'rgb(255, 49, 49)'],
    yaxis: {
        title: {
            style: {
                color: '#adb5be',
                fontSize: '14px',
                fontFamily: 'poppins, sans-serif',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        labels: {
            formatter: function (y:any) {
                return y.toFixed(0) + "";
            },
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    xaxis: {
        type: "month",
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
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
            rotate: -90,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y:any) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0);
                }
                return y;
            },
        },
    },
    fill: {
        colors: undefined,
        opacity: 0.025,
        type: ['solid', 'solid'],
        gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ['#fdc530'],
            inverseColors: true,
            opacityFrom: 0.35,
            opacityTo: 0.05,
            stops: [0, 50, 100],
            colorStops: ['#fdc530']
        }
    }
}

export let PortfolioData: any = { 
    series: [
        {
            name: "Portfolio Value",
            data: [15, 30, 22, 49, 32, 45, 30, 45, 65, 45, 25, 45],
        }
    ],
    chart: {
        type: "area",
        height: 260,
        toolbar: {
            show: false
        }
    },
    colors: [
        "var(--primary-color)"
    ],
   
    grid: {
        show: false,
        xaxis: {
            lines: {
                show: false
            }
        },
        yaxis: {
            lines: {
                show: false
            }
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: "top",
    },
    stroke: {
        curve: 'stepline',
        width: [1]
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 90, 100],
            colorStops: [
                [
                    {
                        offset: 0,
                        color: "var(--primary005)",
                        opacity: 1
                    },
                    {
                        offset: 75,
                        color: "var(--primary005)",
                        opacity: 1
                    },
                    {
                        offset: 100,
                        color: "var(--primary005)",
                        opacity: 1
                    }
                ]
            ]
        }
    },
    yaxis: {
        min: 0,
        show: false
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
    },
}