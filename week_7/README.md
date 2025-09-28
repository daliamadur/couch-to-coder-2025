# ✒️ Week 7
**Learning Objectives:** Data analysis, Chart.js, HTML canvas

📄 [`analysis_snippet.js`](./analysis_snippets.js)
📄 [`example.html`](./example.html)

## 📝 Notes

### Data Analysis
#### Steps
- Identify business question and what needs to be measured
- Collect raw data sets
- Clean data to prepare it for analysis
- Analyse data
- Interpret results to see how well the presented data answers the original question

### Aggregating data
`reduce` – array method used to aggregate all chosen values into a single value
```js
const value = array.reduce(
    (accumulator, currentValue) => {
        //work done to accumulator value
    },
    initialValue, //optional
);
```
- `accumulator` – vairable to hold the returned result
- `currentValue` – the current array value being considered
- `initialValue` – the accumulator's initial value *(optional)*

### Displaying data
`chartjs` – JavaScript package used for visualising data in HTML
```js
const xValues = []; //<- array of x axis values
const yValues = []; //<- array of y axis values

new Chart("myChart", { 
    type: "pie", 
    data: { 
        labels: xValues, 
        datasets: [{ 
            data: yValues
        }] 
    }, 
    options: { 
        title: { 
        display: true, 
        text: "title text" 
        } 
    } 
});
```
`new Chart("name", obj)` – initialises chart
- `"name"` *string* – the name of the chart, corresponds with the canvas id in HTML
- `obj` *object* – object containing the chart details
    - `type` *string* – specifies the type of chart to be displayed
    - `data` *object* – specifies the values to be displayed on the chart
        - `labels` *array* – specifies labels for the data
        - `datasets` *array* – specifies parameters for all datasets, including data, specific labels and formatting parameters
    - `options` – specifies parameters for overall chart
        - `title` – Specifies details of the Chart title