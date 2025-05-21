export let ProjectOverviewData: any = {
    chart: {
        height: 358,
        toolbar: {
            show: false
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: undefined,
            top: 5,
            left: 0,
            blur: 3,
            color: ["rgba(255,255,255,0)", 'var(--primary02)', "var(--primary005)"],
            opacity: 0.5
        },
    },
    plotOptions: {
        bar: {
            columnWidth: "40%",
        },
    },
    grid: {
        show: true,
        borderColor: 'rgba(119, 119, 142, 0.1)',
        strokeDashArray: 4,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [0, 2, 2],
        curve: "smooth",
    },
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'center',
        fontWeight: 600,
        fontSize: '11px',
        tooltipHoverFormatter: function (val:any, opts:any) {
            return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
        },
        labels: {
            colors: '#74767c',
        },
        markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            radius: 12,
            offsetX: 0,
            offsetY: 0
        },
    },
    series: [{
        name: "Active Projects",
        data: [66, 85, 50, 105, 65, 74, 70, 105, 100, 125, 85, 110, 85, 58, 112],
        type: 'bar',
    }, {
        name: 'Completed Projects',
        data: [65, 20, 40, 55, 80, 90, 59, 86, 120, 165, 115, 120, 50, 70, 85],
        type: 'line',
    }, {
        name: "Project Revenue",
        data: [20, 65, 85, 38, 55, 25, 25, 165, 75, 64, 70, 75, 85, 85, 115],
        type: 'line',
    }],
    colors: ["rgba(255,255,255,0.05)", "var(--primary-color)", "var(--primary05)",],
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
                if (typeof y !== 'undefined') {
                    return y.toFixed(0) + "";
                } else {
                    return "";
                }
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
        type: 'day',
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan', '13 Jan', '14 Jan', '15 Jan'
        ],
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

 }

 export let ProjectsTimelineData: any = {
    
  }