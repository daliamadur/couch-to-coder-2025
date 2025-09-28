const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
const yValues = [55, 49, 44, 24, 15];

new Chart("myChart", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [
            {
                data: yValues
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "World Wide Wine Production 2018"
        }
    }
});