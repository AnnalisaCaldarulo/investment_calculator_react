import { formatter } from "../util/investment";
const ResultTable = ({ resultData }) => {
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment
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
                    resultData.map((result) => {
                        const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
                        const totalAmountInvestment = result.valueEndOfYear - totalInterest;
                        return (
                            <tr key={result.year}>
                                <th> {result.year} </th>
                                <td>{formatter.format(result.valueEndOfYear)}</td>
                                <td>{formatter.format(result.interest)} </td>
                                <td>{formatter.format(totalInterest)} </td>
                                <td>{formatter.format(totalAmountInvestment)}</td>
                            </tr>
                        )
                    })
                }


            </tbody>
        </table>
    )
}

export default ResultTable;