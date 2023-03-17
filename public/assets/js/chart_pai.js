$(document).ready(function () {
 
    // Chart Start
    google.load('visualization', '1', {
        packages: ['corechart', 'bar', 'line']
    });    
    google.setOnLoadCallback(function () {
        // COLUMN CHART
        var data = new google.visualization.DataTable();
        data.addColumn('timeofday', 'Time of Day');
        data.addColumn('number', '1Level');
        data.addColumn('number', '2Level');    
        data.addRows([
            [{
                v: [8, 0, 0],
                f: '8 am'
            }, 1, .25],
            [{
                v: [9, 0, 0],
                f: '9 am'
            }, 2, .5],
            [{
                v: [10, 0, 0],
                f: '10 am'
            }, 3, 1],
            [{
                v: [11, 0, 0],
                f: '11 am'
            }, 4, 2.25],
            [{
                v: [12, 0, 0],
                f: '12 pm'
            }, 5, 2.25],
            [{
                v: [15, 0, 0],
                f: '3 pm'
            }, 8, 5.25],
            [{
                v: [16, 0, 0],
                f: '4 pm'
            }, 9, 7.5],
            [{
                v: [17, 0, 0],
                f: '5 pm'
            }, 10, 10],
        ]);    
        var options = {
            title: 'Demo Graph',
            focusTarget: 'category',
            hAxis: {
                title: 'Time of Day',
                format: 'h:mm a',
                viewWindow: {
                    min: [7, 30, 0],
                    max: [17, 30, 0]
                },
            },
            vAxis: {
                title: 'Rating (scale of 1-10)'
            },
            colors: ['#6e4ff5', '#fe3995']
        };    
        var chart = new google.visualization.ColumnChart(document.getElementById('kt_docs_google_chart_column'));
        chart.draw(data, options);
    });
    // Chart Start Close

    // chart_pie_sex Start
    google.setOnLoadCallback(function () {
        var Femme=154;
        var Homme=72;
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Sex'],
            ['Femme', Femme],
            ['Homme', Homme]
        ]);
        var options = {
            title: 'Sex',
            colors: ['#fe3995', '#593ae1']
        };
        var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie_sex'));
        chart.draw(data, options);
    });

    // chart_pie_zones Start
    google.setOnLoadCallback(function () {
        var Rurale=97;
        var Urbaine=101;
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Zones'],
            ['Rurale', Rurale],
            ['Urbaine', Urbaine]
        ]);
        var options = {
            title: 'Zones',
            colors: ['#2abe81', '#6e4ff5']
        };
        var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie_zones'));
        chart.draw(data, options);
    });

    // chart_pie_parcours Start
    google.setOnLoadCallback(function () {
        var Emploi=43;
        var Formation=11;
        var Entreprenariat=55;
        var data = google.visualization.arrayToDataTable([
            ['Task', 'Parcours'],
            ['Emploi', Emploi],
            ['Formation', Formation],
            ['Entreprenariat', Entreprenariat]
        ]);
        var options = {
            title: 'parcours',
            colors: ['#fe3995', '#2abe81', '#f6aa33']
        };
        var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie_parcours'));
        chart.draw(data, options);
    });
    
    // chart_pie_situation-actuelle Start
    google.setOnLoadCallback(function () {
        var ChercheurdEmploi=73;
        var NEET=12;
        var Etudiant=95;
        var EnFormation=46;
        var EnEmploi=0;
        var EnStage=0;
        var data = google.visualization.arrayToDataTable([
            ["Task", 'Situation Actuelle'],
            ["Chercheur d'Emploi", ChercheurdEmploi],
            ["NEET", NEET],
            ["Etudiant", Etudiant],
            ["En formation", EnFormation],
            ["En emploi", EnEmploi],
            ["En Stage", EnStage]
        ]);
        var options = {
            title: 'Situation Actuelle',
            colors: ['#fe3995', '#f6aa33', '#6e4ff5', '#2abe81', '#c7d2e7', '#593ae1']
        };
        var chart = new google.visualization.PieChart(document.getElementById('kt_docs_google_chart_pie_situation'));
        chart.draw(data, options);
    });
    // chart_pie_situation-actuelle Close

});