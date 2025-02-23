const ResultTable = ({ result }) => {
    console.log(result[0]);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (year)</th>
                    <th>Total interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    result.map((year) => (                        
                        <tr key={year.year}>
                            <th> {year.year} </th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    ))
                }


            </tbody>
        </table>
    )
}

export default ResultTable;