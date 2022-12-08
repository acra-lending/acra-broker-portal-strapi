module.exports = (plugin) => {

    plugin.services.formatData = () => ({
        formatData(data) {
            
            return `
            <style>
                body {
                font-family: arial, sans-serif;
                }

                table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 1rem 0 2rem 0;
                }

                td, th {
                    border: 1px solid #323E48;
                    text-align: left;
                    padding: 8px;
                }

                tr:nth-child(even) {
                    background-color: #F0F8FF;
                }

                hr {
                    background-color: #0033A1;
                }

                footer {
                    padding: 1rem;
                }
            </style>
            
            <div style="padding: 0px;background-color: transparent">

                <div style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent; text-align: center;">
            
                    <img align="center" border="0" src="https://b6fe-107-194-134-60.ngrok.io/uploads/acra_logo_ea78bfefc3.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 250px;" width="250">

                </div>

                <div style="margin: 2rem 1rem;">
                    <table>
                        <tr>
                            <td>Broker ID</td>
                            <td>${data.brokerId}</td>
                        </tr>
                        <tr>
                            <td>Account Executive/BDO</td>
                            <td>${data.aeSelect}</td>
                        </tr>
                        <tr>
                            <td>Branch ID</td>
                            <td>${data.branchId}</td>
                        </tr>
                        <tr>
                            <td>Company Name</td>
                            <td>${data.companyName}</td>
                        </tr>
                        <tr>
                            <td>Contact Name</td>
                            <td>${data.contactName}</td>
                        </tr>
                        <tr>
                            <td>Contact Phone</td>
                            <td>${data.contactPhone}</td>
                        </tr>
                        <tr>
                            <td>Contact Email</td>
                            <td>${data.contactEmail}</td>
                        </tr>
                        <tr>
                            <td>Loan Type</td>
                            <td>${data.loanType}</td>
                        </tr>
                        <tr>
                            <td>Borrower's Name</td>
                            <td>${data.borrowerName}</td>
                        </tr>
                        <tr>
                            <td>Borrower's Address</td>
                            <td>${data.borrowerAddress}</td>
                        </tr>
                        <tr>
                            <td>Borrower's Self-Employment Business Name</td>
                            <td>${data.borrowerBusinessName}</td>
                        </tr>
                        <tr>
                            <td>Type of Business</td>
                            <td>${data.businessType}</td>
                        </tr>
                        <tr>
                            <td>Percentage of Ownership</td>
                            <td>${data.ownership}</td>
                        </tr>
                        <tr>
                            <td>Bank Statement Type</td>
                            <td>${data.bankStatementType}</td>
                        </tr>
                        <tr>
                            <td>Explanation of Business</td>
                            <td>${data.explanation}</td>
                        </tr>
                        <tr>
                            <td>Loan Ammount</td>
                            <td>${data.loanAmount}</td>
                        </tr>
                        <tr>
                            <td>Appraised Value</td>
                            <td>${data.appraisedValue}</td>
                        </tr>
                        <tr>
                            <td>LTV</td>
                            <td>${data.ltv}</td>
                        </tr>
                    </table>

                    <hr>

                    <p>
                        <em>~Acra Web Administrator</em>
                    </p>

                    <footer style="background-color: #0033a1;">
                        <div style="text-align: center; color: #fff;">
                            © ${new Date().getFullYear()} Acra Lending
                        </div>
                    </footer>
                </div>


            
            </div>


            
            `

        }

    })

    return plugin;
};